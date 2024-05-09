import React ,{ useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserPage = () => {
  const navigate = useNavigate();

  useEffect(() =>{
    if(!localStorage.getItem('access_token')){
      navigate('/login')
    }
  })

  return (
    <div  style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <h1  style={{ textAlign: "center",fontSize: "36px"  }}>Welcome User!</h1>
    </div>
  );
};

export default UserPage;
