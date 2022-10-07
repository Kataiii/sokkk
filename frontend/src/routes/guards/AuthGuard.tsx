import React, { Component } from 'react';
import { Navigate, redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useAppSelector } from '../../app/store';

interface GuardProps {
    children: React.ReactElement,
}

const AuthGuard: React.FC<GuardProps> = ({children}) => {

    const {isAuthorized} = useAppSelector(state => state.user);

    return (
        isAuthorized 
        ? children
        : <Navigate to={'*'} replace/>
    );
}

export default AuthGuard
