import React from "react";
import { useNavigate } from "react-router-dom";
import logOut from "../../icons/logout.svg";
import { useAuth } from "../../hook/useAuth";

const LogOut = () => {
  const {setAuth} = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () =>{
   
    setAuth({})
    navigate('/login')
  }
  return (
    <button className="icon-btn" onClick={handleLogOut}>
      <img src={logOut} alt="Logout" />
    </button>
  );
};

export default LogOut;
