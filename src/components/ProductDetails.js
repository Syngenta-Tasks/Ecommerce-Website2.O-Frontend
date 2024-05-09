import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styles from "./ProductDetails.module.css"

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const backendUrl = `${process.env.REACT_APP_API_URL}/products/${id}`;
        const response = await axios.get(backendUrl);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.productDetails} >
      <h1 className={styles.productName} >{product.name}</h1>
      <img src={product.imageUrl} alt={product.name}  className={styles.productImage}/>
      <p className={styles.price}>Price: {product.price}</p>
      <p className={styles.size}>Size: {product.size}</p>
      <p  className={styles.paymentDetails}>Payment Details: {product.paymentDetails}</p>
      <p className={styles.deliveryDate}>Delivery Date: {product.deliveryDate}</p>
    </div>
  );
}

export default ProductDetails;
