// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import styles from "./LoginForm.module.css";
// import axios from "axios";
// import { useNavigate } from 'react-router-dom';
// import { Form, Input, Button } from 'antd';
// import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

// const { Item } = Form;

// function LoginForm () {

//   let navigate = useNavigate('');
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if(!email.trim() || !password.trim()){
//       console.error("Please fill in all information");
//       return;
//     }
//     console.log(email,password);


    
//     try {
//       const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTmFuZGluaSIsInN1YiI6MTcsImlhdCI6MTY4OTg2MzQ1MSwiZXhwIjoxNjg5OTQ5ODUxfQ.o1hlGI7MMXBO_K0dYMF1a1c6bATJASP3Zx5WPr6bRh8";
//       const response = await axios.post(`http://localhost:3000/user/login`, {
//         email, password
//       },
  
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           Accept: '*/*',
//           'Content-Type': 'application/json',
//         },
//       }
//     );
//     localStorage.setItem("token",response.data.token);
//     navigate("/register");
//   } catch (error) {
//     console.error('login failed', error);
//   }
// };

//   return (
//     <div className={styles.container}>
//       <h2>Login</h2>
//       <form  name="Login" onSubmit={handleSubmit}>
       
//           <Item
//           name="email"
//           label="Email:"
//           rules={[
//             { required: true, message: 'Please enter your email' },
//             { type: 'email', message: 'Please enter a valid email' },
//           ]}
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required 
//           >
//              <Input />
//         </Item>
          
//           <Item
//           name="password"
//           label="Password:"
//           rules={[
//             { required: true, message: 'Please enter a password' },
//           ]}

//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required 
//           >
//            <Input.Password
//             iconRender={(visible) =>
//               visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
//             }
//           />
//         </Item>
      
//         <Item>
//           <Button type="primary" htmlType="submit">
//             Login
//           </Button>
//           <Link to="/forgot-password">Forgot Password?</Link>
//         </Item>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;





import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./LoginForm.module.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const { Item } = Form;

function LoginForm () {

  let navigate = useNavigate('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!email.trim() || !password.trim()){
      console.error("Please fill in all information");
      return;
    }
    console.log(email,password);


    
    try {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTmFuZGluaSIsInN1YiI6MTcsImlhdCI6MTY4OTg2MzQ1MSwiZXhwIjoxNjg5OTQ5ODUxfQ.o1hlGI7MMXBO_K0dYMF1a1c6bATJASP3Zx5WPr6bRh8";
      
      const headers = new Headers();
      headers.append('Authorization', `Bearer ${token}`);
      headers.append('Content-Type', 'application/json');
      
      const response = await axios.post(`http://localhost:3000/user/login`, {
        email, password
      },{
        headers: headers,
      });
    localStorage.setItem("token",response.data.token);
    navigate("/");
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <Button type="primary" htmlType="submit">
            Login
          </Button>
          <Link to="/forgot-password">Forgot Password?</Link>
        </Item>
      </form>
    </div>
  );
};

export default LoginForm;



