import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './WelcomeUser.module.css'

function WelcomeUser() {
    const { roles } = useParams();
  
    return (
      <div className={styles.welcomeContainer}>
        <h2>Welcome {roles} !!</h2>
  
      </div>
    );
  }
  
export default WelcomeUser;




// import React from 'react';
// import { useParams } from 'react-router-dom';
// import styles from './WelcomeUser.module.css'

// function WelcomeUser() {
//     const { username } = useParams();
  
//     return (
//       <div className={styles.welcomeContainer}>
//         <h2>Welcome {username} !!</h2>
  
//       </div>
//     );
//   }
  
// export default WelcomeUser;




// import React from 'react';
// import { useParams } from 'react-router-dom';
// import styles from './WelcomeUser.module.css';

// function WelcomeUser() {
//   const { username, role } = useParams();

//   return (
//     <div className={styles.welcomeContainer}>
//       {role === 'admin' ? (
//         <h2 style={{ color: 'green' }}>Welcome Admin {username} !!</h2>
//       ) : (
//         <h2 style={{ color: 'red' }}>Welcome {username} !!</h2>
//       )}
//     </div>
//   );
// }

// export default WelcomeUser;





// import React from 'react';
// import { useParams } from 'react-router-dom';
// import styles from './WelcomeUser.module.css';

// function WelcomeUser() {
//   const { username } = useParams();
//   const userRole = localStorage.getItem('roles');

//   return (
//     <div className={styles.welcomeContainer}>
//       {userRole === 'admin' ? (
//         <h2 style={{ color: 'green' }}>Welcome Admin {username} !!</h2>
//       ) : (
//         <h2 style={{ color: 'red' }}>Welcome {username} !!</h2>
//       )}
//     </div>
//   );
// }

// export default WelcomeUser;

