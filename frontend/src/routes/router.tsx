import React from 'react';
import { createBrowserRouter, Outlet } from "react-router-dom";
import AuthGuard from './guards/AuthGuard';
import FriendsLayout from './layout/FriendsLayout';
import GlobalLayout from './layout/GlobalLayout';
import AuthPage from './pages/Auth';
import ErrorPage from "./pages/ErrorPage";
import FriendsList from "./pages/FriendList";
import Requests from "./pages/Requests";
import FindFriends from "./pages/FindFriends";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import Message from './pages/Message';
import Root from "./pages/Root";
import Cart from './pages/Cart';
import Selery from './pages/Selery';

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
            <Outlet context={[]}/>
         </AuthGuard>,
      children: [
         {
            path: '/home/scene',
            element: <Home />
         },
         {
            path: '/home/',
            element: <GlobalLayout/>,
            children: [
               {
                  path: '/home/selery',
                  element: <Selery/>,
               },
               {
                  path: '/home/market',
                  element: <Marketplace />,
               },
               {
                  path: '/home/cart',
                  element: <Cart/>
               },
               {
                  path: '/home/social',
                  element: <FriendsLayout/>,
                  children: [
                     {
                        path: '/home/social/',
                        element: <FriendsList></FriendsList>
                     },
                     {
                        path: '/home/social/requests',
                        element: <Requests></Requests>
                     },
                     {
                        path: '/home/social/chat',
                        element: <Message></Message>
                     },
                     {
                        path: '/home/social/find',
                        element: <FindFriends></FindFriends>
                     },
                     
                  ]
               },
            ]
         },
      ]
   },
   {
      path: '*',
      element: <ErrorPage></ErrorPage>
   }
])