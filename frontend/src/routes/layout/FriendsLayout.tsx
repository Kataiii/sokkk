import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';

const FriendsLayout: React.FC = () => {
    return (
        <div className='container'>
            <div className='left'>
                <div className='search'>
                    <input type="search"></input>
                </div>
                <Outlet />
            </div>
            <div className='right'>
                <div className="nav">
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                    >
                        Друзья
                    </NavLink>
                    <NavLink
                        to="/requests"
                        className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                    >
                        Заявки
                    </NavLink>
                    <NavLink
                        to="/messages"
                        className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                    >
                        Сообщения
                    </NavLink>
                    <NavLink
                        to="/findFriends"
                        className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                    >
                        Найти друга
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default FriendsLayout;