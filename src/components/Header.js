import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Row, Col, Dropdown, Button, Avatar } from "antd";
import {
  UserOutlined,
  HeartOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import axios from "axios";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const [data, setData] = useState([]);
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/login");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const backendUrl = process.env.REACT_APP_API_URL + "/categories";
        const response = await axios.get(backendUrl);
        setData(response.data);
      } catch (error) {
        console.log("error in fetching data", error);
      }
    };

    fetchData();
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
      <Menu.Item onClick={handleLogout}>Logout</Menu.Item>
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
          <Menu
            mode="horizontal"
            className={`${styles.menu} ${openMenu ? styles.menuHidden : ""}`}
          >
            {data.map((category) => (
              <Menu.SubMenu
                key={category.id}
                className={styles["menu-item"]}
                title={category.name}
                popupClassName={styles["menu-item"]}
              >
                {generateSubMenu(category.subcategories)}
              </Menu.SubMenu>
            ))}
          </Menu>
        </Col>

        <Col>
          <Button
            type="link"
            className={`${styles.profileButton} ${styles.desktopOnly}`}
          >
            <Dropdown overlay={menu} placement="bottomRight" arrow>
              <div className={styles.profile}>
                <Avatar size={32} icon={<UserOutlined />} />
                <span>Profile</span>
              </div>
            </Dropdown>
          </Button>
          <Button
            type="link"
            className={`${styles.wishlistButton} ${styles.desktopOnly}`}
          >
            <Link to="/wishlist">
              <div className={styles.wishlist}>
                <HeartOutlined />
                <span>Wishlist</span>
              </div>
            </Link>
          </Button>

          <MenuOutlined
            style={{ color: "red", fontSize: 24 }}
            className={`${styles.hamburgerIcon} ${styles.mobileOnly}`}
            onClick={() => setOpenMenu(!openMenu)}
          />
        </Col>
      </Row>

      {openMenu && (
        <div className={styles.hiddenMenu}>
          <Menu mode="vertical">
            {data.map((category) => (
              <Menu.SubMenu
                key={category.id}
                title={category.name}
                popupClassName={styles["menu-item"]}
              >
                {generateSubMenu(category.subcategories)}
              </Menu.SubMenu>
            ))}
          </Menu>
          <Button type="link" className={styles.hiddenMenuItem}>
            <Dropdown overlay={menu} placement="bottomRight" arrow>
              <div className={styles.profile}>
                <Avatar size={32} icon={<UserOutlined />} />
                <span>Profile</span>
              </div>
            </Dropdown>
          </Button>
          <Button type="link" className={styles.hiddenMenuItem}>
            <Link to="/wishlist">
              <div className={styles.wishlist}>
                <HeartOutlined />
                <span>Wishlist</span>
              </div>
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}

export default Header;
