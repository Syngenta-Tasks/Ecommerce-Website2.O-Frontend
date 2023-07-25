import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./LoginForm.module.css";
import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (email && password) {
      try {
        const response = await axios.post("http://localhost:3000/user/login", {
          email,
          password,
        });
        console.log(response.data); // Handle response from backend

        // Reset form fields
        setEmail("");
        setPassword("");

      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>
        <div className={styles.formGroup}>
          <button type="submit">Login</button>
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
