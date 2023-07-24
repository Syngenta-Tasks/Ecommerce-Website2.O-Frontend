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









// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import styles from './WelcomeUser.module.css';
// import axios from 'axios';

// function WelcomeUser() {
//   const { username } = useParams();
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchUserInfo = async () => {
//       try {
//         const token = localStorage.getItem('access_token');
//         const response = await axios.get(`http://localhost:3000/user/register/${username}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setUser(response.data);
//       } catch (error) {
//         console.error('Failed to fetch user profile', error);
//       }
//     };

//     fetchUserInfo();
//   }, [username]);

//   return (
//     <div className={styles.welcomeContainer}>
//       <h2>Welcome {user?user.name : ''} !!</h2>
//     </div>
//   );
// }

// export default WelcomeUser;
