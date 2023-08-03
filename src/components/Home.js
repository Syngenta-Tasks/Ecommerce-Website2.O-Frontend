import React from "react";
import {Row, Col } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Home.module.css"

const images = [
  "https://www.shopickr.com/wp-content/uploads/2016/01/myntra-end-of-reason-sale-2016-2-3-january-2016-fashion-mega-sale-coupon-banner-768x430.jpg",
  "https://i.pinimg.com/originals/60/b1/9f/60b19f7d17171d30f83842b516e9644b.png",
  "https://www.oberlo.com/media/1603955840-shutterstock1038849250.jpg?w=1824&fit=max",
  "https://i.pinimg.com/originals/39/59/97/395997be6f5afcab573ea16ad8878ce6.png",

];

const   HomePage = () => {
  const sliderRef = React.useRef();
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
  };

  return (
    <div>
   
    <div className={styles["landing-page"]}>
    <h1 className = {`${styles.heading} ${styles.fancyHeading}`}>Welcome to Myntra</h1>
    <Row gutter={[16, 16]} justify="center" className={styles["image-container"]}>
        {images.map((imageUrl, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <img src={imageUrl} alt={`Landing Page ${index + 1}`} className={styles["image-item"]} />
          </Col>
        ))}
      </Row>
      <div className={styles["carousel-container"]}>
        <Slider {...settings} ref={sliderRef} className={styles["carousel"]} autoplay>
          {images.map((imageUrl, index) => (
            <div key={index}>
              <img src={imageUrl} alt={`Landing Page ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
      <Row gutter={[16, 16]} justify="center" className={styles["image-container"]}>
        {images.map((imageUrl, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <img src={imageUrl} alt={`Landing Page ${index + 1}`} className={styles["image-item"]} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomePage;

