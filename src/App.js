// import {Route, Routes } from 'react-router-dom';
// import './App.css';
// import FooterComponent from './components/Footer';
// import HomePage from './components/Home';
// import LoginForm from './components/LoginForm';
// import Header from './components/Header';

// function App(){
//   return(
//     <div className="app-container">
//       <Routes>
//         <Route path='="/"
//       </Routes>
//     </div>
//   )
// }









import React from 'react';
import Header from './components/Header';
import FooterComponent from './components/Footer';
import './App.css';
import LoginForm from './components/LoginForm';
import HomePage from './components/Home';

function App () {
  return (
    <div className="app-container">
      <Header />

      <div className="content">
    
    <HomePage/>
      {/* <LoginForm/> */}
      </div>

      <FooterComponent />
    </div>
  );
};

export default App;






// import React from 'react';
// import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import Header from './components/Header';
// import FooterComponent from './components/Footer';
// import './App.css';
// import LoginForm from './components/LoginForm';

// const App = () => {
//   return (
    
//       <div className="app-container">
//       <Router>
//         <Header />
//         <div className="content">
//           <Routes>
//             <Route path="/login" component={LoginForm} />
//           </Routes>
//         </div>
//         <FooterComponent />
//         </Router>
//       </div>
    
//   );
// };

// export default App;



