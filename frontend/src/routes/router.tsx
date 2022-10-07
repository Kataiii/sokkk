import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import FriendsList from "./pages/FriendList";
import Home from "./pages/Home";
import Market from "./pages/Market";
import Root from "./pages/Root";

export const router = createBrowserRouter([
   {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage/>
   },
   
   {
      path: '/home',
      element: <Home/>,
      
   },
   {
      path: '/market',
      element: <Market/>
   },
   {
      path: '/friends',
      element: <FriendsList></FriendsList>
   }
])