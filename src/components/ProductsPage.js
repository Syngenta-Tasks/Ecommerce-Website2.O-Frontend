import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col } from "antd";
import ProductCard from "./ProductCard";
import styles from "./ProductsPage.module.css";

function ProductPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const backendUrl = `${process.env.REACT_APP_API_URL}/products`;
        const response = await axios.get(backendUrl);
        setData(response.data);
      } catch (error) {
        console.log("error in fetching data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.homepage}>
      <h1 className={`${styles.heading} ${styles.fancyHeading}`}>Products</h1>
      <Row gutter={16} className={styles.productsRow}>
        {data.map((product) => (
          <Col span={8} key={product.id} className={styles.centerCard}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ProductPage;
