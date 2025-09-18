import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "./navigation/AdminNavbar";
import AdminFooter from "./navigation/AdminFooter";

const AdminLayout = ({ children }) => {
  // return <div>{children || <Outlet />}</div>;
  return (
    <div>
      <AdminNavbar />
      
      <main>
        {children || <Outlet />}
      </main>

      <AdminFooter />
    </div>
  );
};


export default AdminLayout;
