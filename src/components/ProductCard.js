import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <Card className={styles.productCard}>
      <Link to={`/products/${product.id}`}>
        <img src={product.imageUrl} alt={product.name} className={styles.productImage} />
      </Link>
      <h1 className={styles.productName}>{product.name}</h1>
      <p className={styles.price}>Price: {product.price}</p>
    </Card>
  );
};

export default ProductCard;
