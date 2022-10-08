import { Card } from 'antd';
import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
  } from 'react-router-dom';
import './friendsRight.css';

interface FriensdsRightProps{
    title: string,
}
  
const FriensdsRight: React.FC<FriensdsRightProps> = (props) => {
    return(
    <Card>
      <Router>
        <div className="nav">
          <NavLink
            to="friends"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            Users
          </NavLink>
          <NavLink
            to="requests"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            Posts
          </NavLink>
        </div>
        <Routes>
          <Route path="users" element={<Card />} />
          <Route path="posts" element={<Card />} />
        </Routes>
      </Router>
        </Card>
    );
};
  
export default FriensdsRight;