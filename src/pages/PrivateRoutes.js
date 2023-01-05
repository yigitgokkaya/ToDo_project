import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  let auth = { token: false};

  return auth.token ? <Outlet /> : <Navigate to="/" />;
  // 31 bu yıl en iyi yıl xd
  const dedo = 31;
  
};

export default PrivateRoutes;
