import React from "react";
import { UserLayout } from "../assets/layouts/UserLayout";
import AdminLayout from "../components/Admin/AdminLayout";
import Login from "../components/Admin/auth/Login";
import SignUp from "../components/Admin/auth/SignUp";
import PropertyListingUser from "../components/EventsCardDataUser";  // user ke liye
import PropertyListingAdmin from "../components/EventsCardData";     // admin ke liye
import EventDetails from "../components/EventDetails";
import Body from "../components/navigation/Main";
import AdminBody from "../components/Admin/navigation/Main";

export const AppRoutes = [
  {
    path: "/",
    element: <UserLayout />,
    children: [
    {
     path:"/",
     element:<Body />,
    } ,
    {
     path:"/events",
     element:<PropertyListingUser />,
    } ,
    {
     path:"/events/:id",
     element:<EventDetails />,
    } ,
],
  },

     // Admin routes without layout (login, signup)
  {
    path: "/admin/login",
    element: <Login />,
  },
  {
    path: "/admin/signup",
    element: <SignUp />,
  },

  // Admin routes with AdminLayout (with navbar/footer)
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path: "home", element: <AdminBody /> }, 
      { path: "events", element: <PropertyListingAdmin /> }, 
      // future admin-only pages yaha add kar sakte ho
    ],
  },
]
  
