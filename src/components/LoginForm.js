import React, { useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import styles from "./LoginForm.module.css";
import axios from "axios";
import { Form, Input, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";


const { Item } = Form;

function LoginForm () {

 
  let navigate = useNavigate('');
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username,password);
  
    try {
      const token =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGhydXZhbmlrYW0iLCJzdWIiOjIwLCJpYXQiOjE2OTAwOTUyNTJ9.Xr9QUe1EsQ1AqvJLNiaXsvIiaioTXLGpsDSK2BzK6wQ";
      const response = await axios.post(`http://localhost:3000/user/login`, {
        username, password
      },
  
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: '*/*',
          'Content-Type': 'application/json',
        },
      }
    );
    localStorage.setItem("token",response.data.token);
    navigate(`/welcome/${username}`);

  } catch (error) {
    console.error('login failed', error);
  }
};

  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <form  name="Login" onSubmit={handleSubmit}>
       
          <Item
          name="email"
          label="Email:"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Please enter a valid email' },
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
          rules={[
            { required: true, message: 'Please enter a password' },
          ]}

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
          <Button onClick={handleSubmit}  type="primary" htmlType="submit">
            Login
          </Button>
          <Link to="/forgot-password">Forgot Password?</Link>
        </Item>
      </form>
    </div>
  );
};

export default LoginForm;


