import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import styles from "../components/LoginForm.module.css";
import axios from "axios";
import { Form, Input, Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const { Item } = Form;

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(">>>>>inside handle submit", username, password);
    login();
  };

  const login = () => {
    console.log(">>>>inside Login function");
    axios
      .post("http://localhost:3000/user/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(">>>>/user/login response", response);
        if (response.status === 200) {
          console.log(">>>>inside line no 389");

          axios
            .get("http://localhost:3000/user/details", {
              headers: {
                Authorization: `Bearer ${response.data.access_token}`,
                Accept: "*/*",
                "Content-Type": "application/json",
              },
            })
            .then((response) => {
              console.log(">>>>>>>/user/details", response.data);
             
              const userRole = response.data.roles;
              if(userRole === "admin"){
                navigate("/admin")
              }else if (userRole === "user"){
                navigate("/user")
              }else{
                navigate("/")
              }
            })
            .catch((error) => {
              console.log(error);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <form name="Login" onSubmit={handleSubmit}>
        <Item
          name="email"
          label="Email:"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        >
          <Input />
        </Item>

        <Item
          name="password"
          label="Password:"
          rules={[{ required: true, message: "Please enter a password" }]}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        >
          <Input.Password
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Item>

        <Item>
          <Button onClick={handleSubmit} type="primary" htmlType="submit">
            Login
          </Button>
          <Link to="/forgot-password">Forgot Password?</Link>
        </Item>
      </form>
    </div>
  );
}

export default Login;
