import React from 'react';
import { Row, Col, Card } from 'antd';
import styles from './Home.module.css'

const products = [
  { id: 1, name: 'Product 1', price: '$10', imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.yEQviaqP5Zb5kIwKkwhrTAHaHa&pid=Api&P=0&h=180' },
  { id: 2, name: 'Product 2', price: '$20', imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.RMRS0r9bd3h1tTcZgSKHHQHaHa&pid=Api&P=0&h=180' },
  { id: 3, name: 'Product 3', price: '$30', imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.c0x4yslKwB0v3eN0U0JvMwHaHa&pid=Api&P=0&h=180' },
  { id: 4, name: 'Product 4', price: '$40', imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.zvzBkFU7MQ_p3iRuJYtg1QHaE8&pid=Api&P=0&h=180' },
  { id: 5, name: 'Product 5', price: '$10', imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.5W9AhF9g7Pr4TloVIYmwNQHaFw&pid=Api&P=0&h=180' },
  { id: 6, name: 'Product 6', price: '$20', imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.D3fPCu4HuwBR3HIQ4d9eUQHaHa&pid=Api&P=0&h=180' },
  { id: 7, name: 'Product 7', price: '$30', imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.mzIRYCvz9WTzh6w5GM-vuQHaHa&pid=Api&P=0&h=180' },
  { id: 8, name: 'Product 8', price: '$40', imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.NXum5bYbN8NlH_qMjiUWVQHaHa&pid=Api&P=0&h=180' },
  { id: 9, name: 'Product 9', price: '$10', imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.NKKIuwp_7QigJO7XmduL-wHaHa&pid=Api&P=0&h=180' },
  { id: 10, name: 'Product 10', price: '$20', imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.9ZhQmlmnLKLAANFEpBHnBQHaHa&pid=Api&P=0&h=180' },
  { id: 11, name: 'Product 11', price: '$30', imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.byRHMlxFLpj8LonPvANJuAHaGO&pid=Api&P=0&h=180' },
  { id: 12, name: 'Product 12', price: '$40', imageUrl: 'https://pngimg.com/uploads/scarf/scarf_PNG19.png' },
];

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <h1>Welcome to Myntra</h1>
      <Row gutter={[16, 16]}>
        {products.map((product) => (
          <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
            <Card className={styles.card} cover={<img src={product.imageUrl} alt={product.name} />}>
              <div className={styles.cardContent}>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomePage;
