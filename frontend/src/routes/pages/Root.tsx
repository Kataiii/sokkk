import React from "react"
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Root: React.FC = () => {
    return (
        <>
            <div>Главная</div>
            <Link to={'/auth'}>3д сцена</Link>
        </>
    )
}

export default Root;