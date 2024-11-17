import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <p>auth layout</p>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
