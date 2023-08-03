import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import axios from "axios";
import styles from "./Subcategory.module.css"

const SubcategoryForm = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    axios
      .post(`${process.env.REACT_APP_CREATE_SUBCATEGORY_URL}`, {
        name: values.subcategoryName,
        categoryId: values.categoryId,
      })
      .then((response) => {
        message.success("Subcategory created successfully!");
        setLoading(false);
      })
      .catch((error) => {
        message.error("Failed to create subcategory");
        setLoading(false);
      });
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formBox}>
        <div className={styles.formTitle}>Add Subcategory</div>
    <Form onFinish={onFinish}>
      <Form.Item className={styles.formItem}
        label="Subcategory Name"
        name="subcategoryName"
        rules={[
          {
            required: true,
            message: "Please enter subcategory name",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item  className={styles.formItem}
        label="Category ID"
        name="categoryId"
        rules={[
          {
            required: true,
            message: "Please enter category ID",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item style={{ textAlign: "center" }}>
        <Button type="primary" htmlType="submit" loading={loading}>
          Add Subcategory
        </Button>
      </Form.Item>
    </Form>
    </div>
    </div>
  );
};

export default SubcategoryForm;
