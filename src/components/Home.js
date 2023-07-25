import React from 'react';
import { Row, Col, Card } from 'antd';
import styles from './Home.module.css'
import products from './ProductData';

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <h1 className = {`${styles.heading} ${styles.fancyHeading}`}>Welcome to Myntra</h1>
      <Row gutter={[16, 16]} className={styles.productsRow}>
        {products.map((product) => (
          <Col key={product.id} xs={24} sm={12} md={8} lg={6} className={styles.centerCard}>
            <Card className={styles.card} cover={<img src={product.imageUrl} alt={product.name} className={styles.productImage}/>}>
              <div className={styles.cardContent}>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productPrice}>{product.price}</p>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomePage;