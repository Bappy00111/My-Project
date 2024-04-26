import React from "react";
import { useNavigate } from "react-router-dom";
import logOut from "../../icons/logout.svg";

const LogOut = () => {
  const navigate = useNavigate();

  const handleLogOut = () =>{
    navigate('/login')
  }
  return (
    <button className="icon-btn" onClick={handleLogOut}>
      <img src={logOut} alt="Logout" />
    </button>
  );
};

export default LogOut;
