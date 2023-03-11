import React from "react";
import { Link } from "react-router-dom";
import LittleLemonLogo from "../assets/Logo.svg";
import "../styles/Navbar.css";

function Navbar() {
    return (
        <nav className="header">
            <div id="logo">
                <Link to="/">
                    <img src={LittleLemonLogo} alt="Little Lemon logo" />
                </Link>
            </div>

            <ul>
                <li>
                    <Link className="nav-item active" to="/">Home</Link>
                </li>
                <li>
                    <a className="nav-item" href="/#">About</a>
                </li>
                <li>
                    <a className="nav-item" href="/#menu">Menu</a>
                </li>
                <li>
                    <Link className="nav-item" to="/reserve">Make Reservation</Link>
                </li>
                <li>
                    <a className="nav-item" href="/#">Order Online</a>
                </li>
                <li>
                    <a className="nav-item" href="/#">Login</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;