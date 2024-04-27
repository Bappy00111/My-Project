import React from "react";
import { useAuth } from "../hook/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/common/Header";

const PrivetRoutes = () => {
  const { auth } = useAuth();
  // const navigate = useNavigate()
  return (
    <>
      {auth.user ? (
        <main className="mx-auto max-w-[1020px]  py-8">
          <div className="container">
            <Header/>
            <Outlet />
          </div>
        </main>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default PrivetRoutes;
