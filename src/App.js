import {Route, Routes } from 'react-router-dom';
import './App.css';
import FooterComponent from './components/Footer';
import HomePage from './components/Home';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import RegistrationForm from './components/RegistrationForm';
import WelcomePage from './components/WelcomePage';
import WelcomeUser from './components/WelcomeUser';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';


function App(){
  return(
    <div className="app-container">
    <Header/>
    <div className="app-container">
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/login" element={<LoginForm/>}/>
      <Route path="/register" element={<RegistrationForm/>}/>
      <Route path="/welcome/:name" element={<WelcomePage/>} />
      <Route path="/welcome/" element={<WelcomeUser/>} />
      <Route path="/welcome/:roles/:username" element={<WelcomeUser />} />
      <Route path="/forgot-password" element={<ForgotPassword/>} />
      <Route path="/" element={<FooterComponent/>}/>
      <Route path="/reset/:token" element={<ResetPassword/>}/>
    </Routes>
    </div>
<FooterComponent/>
    </div>
  )
}


export default App;


