import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import axios from "axios";
import styles from "./UpdateCategoryForm.module.css"
import { useNavigate } from "react-router-dom";

const UpdateCategoryForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values) => {
    setLoading(true);
    axios
      .patch(`http://localhost:3000/categories/${values.categoryName}`, {
        name: values.newCategoryName,
      })
      .then((response) => {
        message.success("Category updated successfully!");
        setLoading(false);
        navigate("/admin");
      })
      .catch((error) => {
        console.error("Failed to update category", error);
        message.error("Failed to update category");
        setLoading(false);
      });
  };

  return (
    <div className={styles.formContainer}>
    <div className={styles.formBox}>
      <div className={styles.formTitle}>Update Category</div>
    <Form onFinish={onFinish}>
      <Form.Item
        label="Category Name"
        name="categoryName"
        rules={[
          {
            required: true,
            message: "Please enter category ID",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="New Category Name"
        name="newCategoryName"
        rules={[
          {
            required: true,
            message: "Please enter new category name",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Update Category
        </Button>
      </Form.Item>
    </Form>
    </div>
    </div>
  );
};

export default UpdateCategoryForm;
