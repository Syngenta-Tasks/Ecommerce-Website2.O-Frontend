import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Input, Menu, Row, Col, Dropdown, Button, Avatar } from "antd";
import {
  SearchOutlined,
  UserOutlined,
  HeartOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import axios from "axios";
import styles from "./Header.module.css";

function Header() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const backendUrl = "http://localhost:3000/categories";

    axios
      .get(backendUrl)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log("error in fetching data", error);
      });
  }, []);

  const generateSubMenu = (subcategories) => (
    <Menu>
      {subcategories.map((subcategory) => (
        <Menu.Item key={subcategory.id}>
          <Link to={`/category/${subcategory.id}`}>{subcategory.name}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );

  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="/login">Login</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/register">Register</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <header className={styles.header}>
      <Row justify="space-between" align="middle">
        <Col style={{ paddingLeft: "30px" }}>
          <Link to="/">
            <img
              src="https://aartisto.com/wp-content/uploads/2020/11/myntra.png"
              alt="Myntra"
              className={styles.logo}
              style={{ width: "60px", height: "auto" }}
            />
          </Link>
        </Col>
        <Col flex="auto">
          <Menu mode="horizontal" className={styles.menu}>
            {data.map((category) =>
              category.name === "Men" ? (
                <Menu.SubMenu
                  key={category.id}
                  className={styles["menu-item"]}
                  title={category.name}
                  popupClassName={styles["menu-item"]}
                >
                  {generateSubMenu(category.subcategories)}
                </Menu.SubMenu>
              ) : null
            )}
            {data.map((category) =>
              category.name === "Women" ? (
                <Menu.SubMenu
                  key={category.id}
                  className={styles["menu-item"]}
                  title={category.name}
                  popupClassName={styles["menu-item"]}
                >
                  {generateSubMenu(category.subcategories)}
                </Menu.SubMenu>
              ) : null
            )}
            {data.map((category) =>
              category.name === "Children" ? (
                <Menu.SubMenu
                  key={category.id}
                  className={styles["menu-item"]}
                  title={category.name}
                  popupClassName={styles["menu-item"]}
                >
                  {generateSubMenu(category.subcategories)}
                </Menu.SubMenu>
              ) : null
            )}
            {data.map((category) =>
              category.name === "Home & Living" ? (
                <Menu.SubMenu
                  key={category.id}
                  className={styles["menu-item"]}
                  title={category.name}
                  popupClassName={styles["menu-item"]}
                >
                  {generateSubMenu(category.subcategories)}
                </Menu.SubMenu>
              ) : null
            )}
          </Menu>
        </Col>
        <Col>
          <div className={styles["search-bar"]}>
            <Input
              placeholder="Search for products, brands, and more"
              prefix={<SearchOutlined />}
              className={styles["search-input"]}
            />
          </div>
        </Col>
        <Col>
          <Button type="link" className={styles.profileButton}>
            <Dropdown overlay={menu} placement="bottomRight" arrow>
              <div className={styles.profile}>
                <Avatar size={32} icon={<UserOutlined />} />
                <span>Profile</span>
              </div>
            </Dropdown>
          </Button>
          <Button type="link" className={styles.wishlistButton}>
            <Link to="/wishlist">
              <div className={styles.wishlist}>
                <HeartOutlined />
                <span>Wishlist</span>
              </div>
            </Link>
          </Button>
          <Button type="link" className={styles.bagButton}>
            <Link to="/bags">
              <div className={styles.bag}>
                <ShoppingOutlined />
                <span>Bag</span>
              </div>
            </Link>
          </Button>
        </Col>
      </Row>
    </header>
  );
}

export default Header;
