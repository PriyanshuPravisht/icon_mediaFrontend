import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = ({ children }) => {
  return <div>{children || <Outlet />}</div>;
};

export default AdminLayout;
