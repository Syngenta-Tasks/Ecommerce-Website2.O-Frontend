import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './WelcomeUser.module.css'

function WelcomeUser() {
    const { username } = useParams();
  
    return (
      <div className={styles.welcomeContainer}>
        <h2>Welcome {username} !!</h2>
  
      </div>
    );
  }
  
export default WelcomeUser;






