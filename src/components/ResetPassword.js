import React, {useState} from 'react';
import { Navigate,useParams} from "react-router-dom";
import axios from "axios";
import { Form, Input, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import styles from './ResetPassword.module.css';

const { Item } = Form;

const ResetPassword = (props) => {

    // const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [newPassword, setnewPassword] = useState('');
    const[redirect, setRedirect] = useState(false);
    const {token} = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(newPassword);

        try {
            const access_token =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTmFuZHVQaW5kdUJpbmR1Iiwic3ViIjoyNCwiaWF0IjoxNjkwMTIwNzQ4fQ.r_Fc-TmdRPhmq72hXHucHJYodoeK3OEDozRVR5nvnIQ";
            const response = await axios.post(`http://localhost:3000/password-reset/reset`, {
            token,
            email,
            newPassword
            },
        
            {
              headers: {
                Authorization: `Bearer ${access_token}`,
                Accept: '*/*',
                'Content-Type': 'application/json',
              },
            }
          );

          console.log(response.data); 
        setRedirect(true);

    }catch (error) {
        console.error('password reset failed', error);
      }

    }
    
    if(redirect){
        return <Navigate to="/login"/>
    }

    return (<div className={styles.container}>
        <h2>Reset Password</h2>
        <form onSubmit={handleSubmit}>
                 
            <Item
            name="email"
            label="Email:"
            rules={[
              { required: true, message: 'Please enter a password' },
            ]}
  
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            >
             <Input.Password
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Item>

          <Item
            name="newPassword"
            label="newPassword:"
            rules={[
              { required: true, message: 'Please enter your new password' },
            ]}
  
              value={newPassword}
              onChange={(e) => setnewPassword(e.target.value)}
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
             Submit
            </Button>
          </Item>
        </form>
      </div>
      );
}


export default ResetPassword;