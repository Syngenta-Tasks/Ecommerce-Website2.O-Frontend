import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import axios from "axios";
import styles from "./DeleteAdminProduct.module.css";
import { useNavigate } from "react-router-dom";

const DeleteAdminProduct = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values) => {
    setLoading(true);
    axios
      .delete(`http://localhost:3000/products/${values.productName}`)
      .then((response) => {
        message.success("Product deleted successfully!");
        setLoading(false);
        navigate("/admin");
      })
      .catch((error) => {
        message.error("Failed to delete product");
        setLoading(false);
      });
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formBox}>
        <div className={styles.formTitle}>Delete Product</div>
    <Form onFinish={onFinish}>
      <Form.Item
        label="Product Name"
        name="productName"
        rules={[
          {
            required: true,
            message: "Please enter product Name",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Delete Product
        </Button>
      </Form.Item>
    </Form>
      </div>
    </div>
  );
};

export default DeleteAdminProduct;



