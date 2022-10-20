import React from "react";
import { Link } from 'react-router-dom';
import './menu.css';

const Menu = () => {
    return (
        <header>
            <div className="container">
                <Link to="/home" id="caio"><h1>Caio Oliveira</h1></Link>
                <nav id="navHeader">
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/sobre">Sobre</Link>
                        </li>
                        <li>
                            <Link to="/habilidades">Habilidades</Link>
                        </li>
                        <li>
                            <Link to="/projetos">Projetos</Link>
                        </li>
                        <li>
                            <Link to="/curriculo">Currículo</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Menu;