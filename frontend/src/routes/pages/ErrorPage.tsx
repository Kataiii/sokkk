import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage: React.FC = () => {

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <Link to={'/'}>На главную</Link>
        </div>
    )
}

export default ErrorPage;
