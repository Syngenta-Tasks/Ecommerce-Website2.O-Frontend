import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './WelcomePage.module.css'

function WelcomePage() {
    const { name } = useParams();
  
    return (
      <div className={styles.welcomeContainer}>
        <h2>Welcome {name} !!</h2>
  
      </div>
    );
  }
  
export default WelcomePage;
