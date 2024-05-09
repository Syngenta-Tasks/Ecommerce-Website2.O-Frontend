import React, { useState } from "react";
import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import CategoriesList from "./ListOfCategory";
import styles from "./AdminPage.module.css";
import { Link } from "react-router-dom";

const AdminPage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const dropdownOverlay = <CategoriesList />;

  const productMenu = (
    <Menu>
      <Menu.Item key="1">
        <Link to="/admin-product">Add Product</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/admin-product/update">Update Product</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/admin-product/delete">Delete Product</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className={styles.adminPageContainer}>
      <h1 className={styles.adminHeading}>Welcome Admin!!</h1>
      <Dropdown
        overlay={dropdownOverlay}
        visible={isDropdownOpen}
        onVisibleChange={() => {}}
      >
        {/* <button onClick={toggleDropdown}  className={styles.redirectButton}> */}
        <button onClick={toggleDropdown}>
          List Of Categories <DownOutlined />
        </button>
      </Dropdown>
      <Dropdown overlay={productMenu}>
        <button className={styles.redirectButton}>
          Products <DownOutlined />
        </button>
      </Dropdown>
    </div>
  );
};
export default AdminPage;
