import React from 'react';
import { Outlet } from 'react-router-dom';

const FriendsLayout: React.FC = () => {
    return (
        <div>
            <Outlet></Outlet>
            <div className='right'></div>
        </div>
    )
}

export default FriendsLayout;