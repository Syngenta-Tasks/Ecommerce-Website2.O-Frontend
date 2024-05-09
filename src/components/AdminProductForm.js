import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import styles from "./AdminProductForm.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const { Item } = Form;

function AdminProductForm() {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [size, setSize] = useState("");
  const [paymentDetails, setPaymentDetails] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, price, imageUrl, size, paymentDetails, deliveryDate);

    try {
      const token = process.env.ACCESS_TOKEN2;
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/products`,
        {
          name,
          price,
          imageUrl,
          size,
          paymentDetails,
          deliveryDate,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "*/*",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      navigate(`/products`);
    } catch (error) {
      console.error("Product Addition failed", error);
    }
  };
  return (
    <div className={styles.formContainer}>
      <form
        name="registration"
        onSubmit={handleSubmit}
        className={styles.adminForm}
      >
        <h2 className={styles.heading}>Add Product</h2>
        <Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Please enter product name" }]}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
        >
          <Input />
        </Item>
        <Item
          name="price"
          label="Price"
          rules={[{ required: true, message: "Please enter product price" }]}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className={styles.input}
        >
          <Input />
        </Item>
        <Item
          name="imageUrl"
          label="ImageUrl"
          rules={[
            { required: true, message: "Please enter a product image url" },
          ]}
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className={styles.input}
        >
          <Input />
        </Item>
        <Item
          name="size"
          label="Size"
          rules={[{ required: true, message: "Please enter product size" }]}
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className={styles.input}
        >
          <Input />
        </Item>

        <Item
          name="paymentDetails"
          label="PaymentDetails"
          rules={[{ required: true, message: "Please enter payment details" }]}
          value={paymentDetails}
          onChange={(e) => setPaymentDetails(e.target.value)}
          className={styles.input}
        >
          <Input />
        </Item>

        <Item
          name="deliveryDate"
          label="DeliveryDate"
          rules={[{ required: true, message: "Please enter delivery date" }]}
          value={deliveryDate}
          onChange={(e) => setDeliveryDate(e.target.value)}
          className={styles.input}
        >
          <Input />
        </Item>

        <Item>
          <Button onClick={handleSubmit} type="primary" htmlType="submit">
            Submit
          </Button>
        </Item>
      </form>
    </div>
  );
}

export default AdminProductForm;
