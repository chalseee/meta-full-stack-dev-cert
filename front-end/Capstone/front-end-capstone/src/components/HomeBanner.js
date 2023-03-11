import React from "react";
import { NavLink } from "react-router-dom";
import Restaurant from "../assets/Restaurant.jpg";
import "../styles/HomeBanner.css";

const HomeBanner = () => {
    return (
        <div className="home-banner">
            <div className="card-section">
                <div className="card-left">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Paragraph.
                    </p>
                    <NavLink to="/reserve">
                        <button>Reserve a Table</button>
                    </NavLink>
                </div>

                <div className="card-right">
                    <img className="restaurant" src={Restaurant}
                        alt="Little lemon restauraunt indoor"
                        style={{ borderRadius: "8px", width: "65%" }}
                    />
                </div>
            </div>
        </div>
    );
}

export default HomeBanner;