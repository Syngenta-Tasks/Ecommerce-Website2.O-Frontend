import React, { useState } from "react";
import { Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import CategoriesList from "./ListOfCategory";
import styles from "./AdminPage.module.css";

const AdminPage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const dropdownOverlay = <CategoriesList />;

  return (
    <div className={styles.adminPageContainer}>
      <h1 className={styles.adminHeading}>Welcome Admin!!</h1>
      <Dropdown
        overlay={dropdownOverlay}
        visible={isDropdownOpen}
        onVisibleChange={() => {}}
      >
        <button onClick={toggleDropdown}>
          List Of Categories <DownOutlined />
        </button>
      </Dropdown>
    </div>
  );
};

export default AdminPage;