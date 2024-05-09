import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import axios from "axios";
import styles from "./DeleteCategoryForm.module.css"

const DeleteCategoryForm = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    axios
      .delete(`http://localhost:3000/categories/${values.categoryName}`)
      .then((response) => {
        message.success("Category deleted successfully!");
        setLoading(false);
      })
      .catch((error) => {
        message.error("Failed to delete category");
        setLoading(false);
      });
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formBox}>
        <div className={styles.formTitle}>Delete Category</div>
    <Form onFinish={onFinish}>
      <Form.Item
        label="Category Name"
        name="categoryName"
        rules={[
          {
            required: true,
            message: "Please enter category Name",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Delete Category
        </Button>
      </Form.Item>
    </Form>
      </div>
    </div>
  );
};

export default DeleteCategoryForm;
