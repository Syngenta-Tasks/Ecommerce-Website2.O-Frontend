import React from "react";
import { Card } from "antd";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  console.log("Product Image URL:", product.image);

  return (
    <Card className={styles.productCard}>
     <h1 className={styles.productName}>{product.name}</h1>
      <img src={product.imageUrl} alt={product.name}  className={styles.productImage} />
      <p className={styles.price}>Price: {product.price}</p>
    </Card>
  );
};

export default ProductCard;
