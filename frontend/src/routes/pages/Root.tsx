import React from "react"
import { Link } from "react-router-dom";

const Root: React.FC = () => {
    return (
        <>
            <div>Главная</div>
            <Link to={'/home'}>3д сцена</Link>
        </>
    )
}

export default Root;