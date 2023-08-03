import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Card } from "antd";
import { PlusCircleOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import styles from "./AdminPage.module.css";

const AdminPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      navigate("/login");
    }
  });

  const actions = [
    {
      title: "Create Category",
      icon: <PlusCircleOutlined />,
      route: "/create-category",
    },
    {
      title: "Create Subcategory",
      icon: <PlusCircleOutlined />,
      route: "/create-subcategory",
    },
    {
      title: "Update Category",
      icon: <EditOutlined />,
      route: "/update-category",
    },
    {
      title: "Delete Category",
      icon: <DeleteOutlined />,
      route: "/delete-category",
    },
  ];

  return (
    <div>
      <h1 className={styles.welcomeText}>Welcome Admin!</h1>
      <div className={styles.actionContainer}>
        {actions.map((action, index) => (
          <Link to={action.route} key={index}>
            <Card className={styles.actionCard}>
              <div className={styles.cardIcon}>{action.icon}</div>
              <div className={styles.cardTitle}>{action.title}</div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
