import React from "react";

import { Link } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

const Home = () => {
  const { auth } = useAuth();
  console.log(auth);
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/profile">
        <p>porfle page</p>
      </Link>
    </>
  );
};

export default Home;
