import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { List, Button, Modal, Dropdown, Menu } from "antd"; // Import Dropdown and Menu
import {
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import axios from "axios";
import styles from "./AdminPage.module.css";

const { confirm } = Modal;

const CategoriesList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/categories`);
      setCategories(response.data);
    } catch (error) {
      console.log("error in fetching categories", error);
    }
  };

  const handleDelete = (categoryName) => {
    confirm({
      title: `Do you want to delete the category "${categoryName}"?`,
      icon: <ExclamationCircleOutlined />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk: async () => {
        try {
          await axios.delete(
            `${process.env.REACT_APP_API_URL}/categories/${categoryName}`
          );
          fetchCategories();
        } catch (error) {
          console.error("Failed to delete category", error);
        }
      },
    });
  };

  return (
    <div className={`${styles.categoriesList} ${styles.boldText}`}>
      <h1 className={styles.boldText}>Categories List</h1>
      <Link to="/create-category">
        <Button type="primary" icon={<PlusOutlined />} className={styles.boldText}>
          Add New Category
        </Button>
      </Link>

      <List
        itemLayout="horizontal"
        dataSource={categories}
        renderItem={(category) => (
          <List.Item
            actions={[
              <Dropdown
                overlay={
                  <Menu className={styles.dropdownMenu}>
                    <Menu.Item key="update"  className={styles.dropdownMenuItem}>
                      <Link to="/update-category">
                        Update Category
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="addSubcategory"  className={styles.dropdownMenuItem} >
                      <Link to="/create-subcategory">
                        Add New Subcategory
                      </Link>
                    </Menu.Item>
                  </Menu>
                }
                trigger={["click"]}
              >
                <Button icon={<EditOutlined />} className={styles.boldText}/>
              </Dropdown>,
              <Button
                icon={<DeleteOutlined />}
                onClick={() => handleDelete(category.name)}
              />,
            ]}
            className={styles.categoryItem}
          >
            <List.Item.Meta title={category.name} className={styles.boldText} />
          </List.Item>
        )}
      />
    </div>
  );
};

export default CategoriesList;
















