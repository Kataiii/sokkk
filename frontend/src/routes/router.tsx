import React from 'react';
import { createBrowserRouter, Outlet } from "react-router-dom";
import AuthGuard from './guards/AuthGuard';
import AuthPage from './pages/Auth';
import ErrorPage from "./pages/ErrorPage";
import FriendsList from "./pages/FriendList";
import Home from "./pages/Home";
import Market from "./pages/Market";
import Root from "./pages/Root";

export const router = createBrowserRouter([
   {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
   },
   {
      path: '/auth',
      element: <AuthPage></AuthPage>,
      errorElement: <ErrorPage></ErrorPage>
   },
   {
      path: '/home',
      element:
         <AuthGuard>
            <Outlet/>
         </AuthGuard>,
      children: [
         {
            path: '/home/',
            element: <Home/>
         },
         {
            path: '/home/market',
            element: <Market />
         },
         {
            path: '/home/friends',
            element: <FriendsList/>
         },
      ]
   },

   {
      path: '*',
      element: <ErrorPage></ErrorPage>
   }
])