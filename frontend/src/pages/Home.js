import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Bem vindo ao Home</h1>
            <Link to="/users">Ver Usuarios</Link>
        </div>
    )
}

export default Home;