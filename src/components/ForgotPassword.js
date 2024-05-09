import React, { useState } from 'react';

import axios from "axios";
import { Form, Input, Button } from 'antd';
import styles from './Forgot.module.css'

const { Item } = Form;

const ForgotPassword = (props) => {

    const[email, setEmail] = useState('');
    const[notify, setNotify] = useState({
      show : false,
      error : false,
      message : ''
    })
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email);

    
        try {
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTmFuZHVQaW5kdUJpbmR1Iiwic3ViIjoyNCwiaWF0IjoxNjkwMTE3NDUyfQ.l_YpIbyyQ6BDlHPsy3ju5YlQwSd9Aq1_fr3w3zpqVdo";
            const response = await axios.post(`http://localhost:3000/password-reset/request`, {
              email
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
          setNotify({
            show: true,
            error : true,
            message: "please check your mail",
          })
      
        } catch (error) {
          setNotify({
            show: true,
            error : true,
            message: "error occured!!",
          })
          console.error('password reset failed', error);
        }
      };
      
      let info;

      if(notify.show){
        info = <div className={notify.error? 'alert alert-danger': 'alert alert-success'}role= "alert">
          {notify.message}
        </div>
      }

    return (
        <div className={styles.container}>
         {info}
        <h2>Forget Password</h2>
       
        <form  onSubmit={handleSubmit}>
         
            <Item
            name="email"
            label="Email:"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Please enter a valid email' },
            ]}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            >
               <Input />
          </Item>
                    
          <Item>
            <Button onClick={handleSubmit}  type="primary" htmlType="submit">
             Submit
            </Button>
          </Item>
        </form>
      </div>
        
    );
};

export default ForgotPassword;