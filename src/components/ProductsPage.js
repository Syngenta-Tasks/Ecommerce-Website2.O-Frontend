import React, { useEffect, useState } from "react";
import axios from "axios";
import { Input, Row, Col } from "antd";
import ProductCard from "./ProductCard";
import styles from "./ProductsPage.module.css";

function ProductPage() {
  const [data, setData] = useState([]);
  const [searchedText, setSearchedText] = useState("");

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

  const filteredData = data.filter((product) =>
    product.name.toLowerCase().includes(searchedText.toLowerCase())
  );

  return (
    <div className={styles.homepage}>
      <h1 className={`${styles.heading} ${styles.fancyHeading}`}>Products</h1>

      <Input.Search
        style={{ maxWidth: 500, display: "flex", margin: "auto" }}
        className={styles.searchBar}
        placeholder="Search products"
        value={searchedText}
        onChange={(e) => setSearchedText(e.target.value)}
      />

      <Row gutter={16} className={styles.productsRow}>
        {filteredData.map((product) => (
          <Col
            xs={36}
            sm={24}
            md={12}
            lg={8}
            xl={8}
            key={product.id}
            className={styles.centerCard}
          >
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ProductPage;
