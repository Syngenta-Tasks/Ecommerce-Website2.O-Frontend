import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import axios from "axios";
import styles from "./AdminProductUpdate.module.css";
import { useNavigate } from "react-router-dom";

const UpdateProductForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values) => {
    setLoading(true);
    axios
      .patch(`http://localhost:3000/products/${values.productName}`, {
        name: values.newProductName,
      })
      .then((response) => {
        message.success("Product updated successfully!");
        setLoading(false);
        navigate("/admin");
      })
      .catch((error) => {
        console.error("Failed to update product", error);
        message.error("Failed to update product");
        setLoading(false);
      });
  };

  return (
    <div className={styles.formContainer}>
    <div className={styles.formBox}>
      <div className={styles.formTitle}>Update Product</div>
    <Form onFinish={onFinish}>
      <Form.Item
        label="Product Name"
        name="productName"
        rules={[
          {
            required: true,
            message: "Please enter prouct name",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="New Category Name"
        name="newProductName"
        rules={[
          {
            required: true,
            message: "Please enter new product name",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Update Product
        </Button>
      </Form.Item>
    </Form>
    </div>
    </div>
  );
};

export default UpdateProductForm;
