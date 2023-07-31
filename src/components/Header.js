import React from "react";
import { Link } from "react-router-dom";
import { Input, Menu, Row, Col, Dropdown, Button, Avatar } from "antd";
import {
  SearchOutlined,
  UserOutlined,
  HeartOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";

import styles from "./Header.module.css";


function Header() {
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
            <Menu.Item key="men" className={styles["menu-item"]}>
              <Link to="/men">Men</Link>
            </Menu.Item>
            <Menu.Item key="women" className={styles["menu-item"]}>
              <Link to="/women">Women</Link>
            </Menu.Item>
            <Menu.Item key="children" className={styles["menu-item"]}>
              <Link to="/children">Children</Link>
            </Menu.Item>
            <Menu.Item key="beauty" className={styles["menu-item"]}>
              <Link to="/beauty">Beauty</Link>
            </Menu.Item>
            <Menu.Item key="studio" className={styles["menu-item"]}>
              <Link to="/studio">Studio</Link>
            </Menu.Item>
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
















// import React from "react";
// import { useEffect,useState } from "react";
// import { Link } from "react-router-dom";
// import { Input, Menu, Row, Col, Dropdown, Button, Avatar } from "antd";
// import {
//   SearchOutlined,
//   UserOutlined,
//   HeartOutlined,
//   ShoppingOutlined,
// } from "@ant-design/icons";

// import styles from "./Header.module.css";
// import axios from 'axios';

// function Header() {


//   const [subcategories, setSubcategories] = useState([]);

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const fetchCategories = async () => {
//     try {
//       const response = await axios.get('http://localhost:3000/categories');
//       const categories = response.data;

//       const subcategoriesPromises = categories.map(async (category) => {
//         const subcategoriesResponse = await axios.get(
//           `http://localhost:3000/subcategories/${category}`
//         );
//         return {
//           category,
//           subcategories: subcategoriesResponse.data.subcategories,
//         };
//       });

//       const subcategoriesData = await Promise.all(subcategoriesPromises);
//       setSubcategories(subcategoriesData);
//     } catch (error) {
//       console.error('Failed to fetch categories and subcategories', error);
//     }
//   };



//   const menu = (
//     <Menu>
//       <Menu.Item>
//         <Link to="/login">Login</Link>
//       </Menu.Item>
//       <Menu.Item>
//         <Link to="/register">Register</Link>
//       </Menu.Item>
//     </Menu>
//   );

//   return (
//     <header className={styles.header}>
//       <Row justify="space-between" align="middle">
//         <Col style={{ paddingLeft: "30px" }}>
//           <Link to="/">
//             <img
//               src="https://aartisto.com/wp-content/uploads/2020/11/myntra.png"
//               alt="Myntra"
//               className={styles.logo}
//               style={{ width: "60px", height: "auto" }}
//             />
//           </Link>
//         </Col>
//         <Col flex="auto">
//         <Menu mode="horizontal" className={styles.menu}>
//             {subcategories.map((categoryData) => (
//               <Menu.Item key={categoryData.category} className={styles['menu-item']}>
//                 <Link to={`/${categoryData.category}`}>{categoryData.category}</Link>
//                 {categoryData.subcategories.length > 0 && (
//                   <Menu.SubMenu key={`${categoryData.category}-submenu`} title="Subcategories">
//                     {categoryData.subcategories.map((subcategory) => (
//                       <Menu.Item key={`${categoryData.category}-${subcategory}`}>
//                         <Link to={`/${categoryData.category}/${subcategory}`}>
//                           {subcategory}
//                         </Link>
//                       </Menu.Item>
//                     ))}
//                   </Menu.SubMenu>
//                 )}
//               </Menu.Item>
//             ))}
//           </Menu>
//         </Col>
//         <Col>
//           <div className={styles["search-bar"]}>
//             <Input
//               placeholder="Search for products, brands, and more"
//               prefix={<SearchOutlined />}
//               className={styles["search-input"]}
//             />
//           </div>
//         </Col>
//         <Col>
//           <Button type="link" className={styles.profileButton}>
//             <Dropdown overlay={menu} placement="bottomRight" arrow>
//               <div className={styles.profile}>
//                 <Avatar size={32} icon={<UserOutlined />} />
//                 <span>Profile</span>
//               </div>
//             </Dropdown>
//           </Button>
//           <Button type="link" className={styles.wishlistButton}>
//             <Link to="/wishlist">
//               <div className={styles.wishlist}>
//                 <HeartOutlined />
//                 <span>Wishlist</span>
//               </div>
//             </Link>
//           </Button>
//           <Button type="link" className={styles.bagButton}>
//             <Link to="/bags">
//               <div className={styles.bag}>
//                 <ShoppingOutlined />
//                 <span>Bag</span>
//               </div>
//             </Link>
//           </Button>
//         </Col>
//       </Row>
//     </header>
//   );
// }

// export default Header;
