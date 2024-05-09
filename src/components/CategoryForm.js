import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import axios from "axios";
import styles from "./CategoryForm.module.css"
import { useNavigate } from "react-router-dom";

const CategoryForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values) => {
    setLoading(true);
    axios
      .post(`${process.env.REACT_APP_API_URL}/categories`, {
        name: values.categoryName,
      })
      .then((response) => {
        message.success("Category created successfully!");
        setLoading(false);
        navigate("/admin");
      })
      .catch((error) => {
        message.error("Failed to create category");
        setLoading(false);
      });
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formBox}>
        <div className={styles.formTitle}>Add Category</div>
    <Form onFinish={onFinish} className={styles.categoryForm}>
      <Form.Item 
        label="Category Name"
        name="categoryName"
        rules={[
          {
            required: true,
            message: "Please enter category name",
          },
        ]}
        labelAlign="left"
        className={styles.formItemLabel}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}  className={styles.formSubmitButton}>
          Add Category
        </Button>
      </Form.Item>
    </Form>
    </div>
    </div>
  );
};

export default CategoryForm;
