import React from "react";
import { UserLayout } from "../assets/layouts/UserLayout";
import AdminLayout from "../components/Admin/AdminLayout";
import Login from "../components/Admin/auth/Login";
import SignUp from "../components/Admin/auth/SignUp";
import PropertyListing from "../components/EventsCardData";
import EventDetails from "../components/EventDetails";
import Body from "../components/navigation/Main";

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
     element:<PropertyListing />,
    } ,
    {
     path:"/events/:id",
     element:<EventDetails />,
    } ,
],
  },

      {
        path: "/admin",
        element: <AdminLayout />,
        children: [
          { path: "login", element: <Login /> },
          { path: "signup", element: <SignUp /> },
       
        ],
      },
    ]
  
