import React from 'react';
import { Form, Input, Button } from 'antd';
import styles from './RegistrationForm.module.css';
import axios from 'axios';

const { Item } = Form;

function RegistrationForm() {
  const onFinish = async (values) => {
    try {
      const response = await axios.post('http://localhost:3000/user/register', values);
      console.log(response.data); 
      
  
      form.resetFields();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const [form] = Form.useForm();

  return (
    <div className={styles.formContainer}>
      <Form name="registration" onFinish={onFinish} className={styles.registrationForm}>
        <h2 className={styles.heading}>Register</h2>

        <Item
          name="name"
          label="Name"
          rules={[
            { required: true, message: 'Please enter your name' },
          ]}
        >
          <Input />
        </Item>

        <Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Please enter a valid email' },
          ]}
        >
          <Input />
        </Item>

        <Item
          name="password"
          label="Password"
          rules={[
            { required: true, message: 'Please enter a password' },
          ]}
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
          <Input.Password />
        </Item>

        <Item>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Item>
      </Form>
    </div>
  );
}

export default RegistrationForm;
