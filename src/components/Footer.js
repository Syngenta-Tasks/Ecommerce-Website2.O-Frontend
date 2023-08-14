import React from 'react';
import { Layout, Row, Col, Typography, Divider } from 'antd';
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from '@ant-design/icons';
import styles from './Footer.module.css';

const { Footer } = Layout;
const { Title, Text } = Typography;

const FooterComponent = () => {
  return (
    <Footer className={styles.footer}>
      <div className={styles.container}>
        <Row justify="space-between" align="top">
          <Col xs={24} sm={24} md={6}>
            <Title level={5}>Contact Us</Title>
            <Text>Email: example@example.com</Text>
            <br />
            <Text>Phone: 123-456-7890</Text>
          </Col>
          <Col xs={24} sm={24} md={8}>
            <Title level={5}>Customer Policies</Title>
            <ul className={styles.linksList}>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms">Terms and Conditions</a>
              </li>
              <li>
                <a href="/shipping">Shipping Policy</a>
              </li>
            </ul>
          </Col>
          <Col xs={24} sm={24} md={8}>
            <Title level={5}>Social Media</Title>
            <div className={styles.socialMediaIcons}>
              <a href="https://www.facebook.com">
                <FacebookOutlined className={styles.socialIcon} />
              </a>
              <a href="https://www.twitter.com">
                <TwitterOutlined className={styles.socialIcon} />
              </a>
              <a href="https://www.instagram.com">
                <InstagramOutlined className={styles.socialIcon} />
              </a>
            </div>
          </Col>
        </Row>
        <Divider className={styles.divider} />
        <Row justify="center" className={styles.copyRightRow}>
          <Col>
            <Text className={styles.copyRightText}>
              &copy; 2023 Your Company. All rights reserved.
            </Text>
          </Col>
        </Row>
      </div>
    </Footer>
  );
};

export default FooterComponent;
