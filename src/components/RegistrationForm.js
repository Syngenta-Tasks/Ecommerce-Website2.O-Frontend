import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import styles from './RegistrationForm.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const { Item } = Form;

function RegistrationForm() {

  let navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name,email,password,confirm);

    try {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTmFuZGl0YUFONzciLCJzdWIiOjYsImlhdCI6MTY4OTg1MDIyNywiZXhwIjoxNjg5OTM2NjI3fQ.zzLoNiJkLNMl4No9AxpMVoDv0hGjIUxatmnxBCPTZ2E";
      // const response = await axios.post(`${process.env.REACT_APP_API_URL}/user/register`, {
      const response = await axios.post(`http://localhost:3000/user/register`, {
        name, email, password, confirm
      },
  
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: '*/*',
          'Content-Type': 'application/json',
        },
      }
    );

    console.log(response.data); 
    navigate(`/welcome/${name}`);
  } catch (error) {
    console.error('Registration failed', error);
  }
};


      
  return (
    <div className={styles.formContainer}>
      <form name="registration" onSubmit={handleSubmit} className={styles.registrationForm}>
        <h2 className={styles.heading}>Register</h2>

        <Item
          name="name"
          label="Name"
          rules={[
            { required: true, message: 'Please enter your name' },
          ]}
          value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
        >
          <Input />
        </Item>

        <Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Please enter a valid email' },
          ]} value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
        >
          <Input />
        </Item>

        <Item
          name="password"
          label="Password"
          rules={[
            { required: true, message: 'Please enter a password' },
          ]} value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
        >
          <Input.Password />
        </Item>

        <Item
          name="confirmPassword"
          label="Confirm Password"
          dependencies={['password']}
          rules={[
            { required: true, message: 'Please confirm your password' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords do not match'));
              },
            }),
          ]}
        >
          <Input.Password
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            className={styles.input}
          />
        </Item>


        <Item>
          <Button onClick={handleSubmit} type="primary" htmlType="submit">
            Register
          </Button>
        </Item>
      </form>
    </div>
  );
}

export default RegistrationForm;
