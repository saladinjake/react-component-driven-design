import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { getToken } from "../utils/tokenConfig";
import Layout from "layout/LayoutOne";

const PrivateRoute = () => {
  const context = useContext(AuthContext);
  const isAuth = context.isAuth;

  return isAuth && getToken() ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to="/login" replace={true} />
  );
};

export default PrivateRoute;
