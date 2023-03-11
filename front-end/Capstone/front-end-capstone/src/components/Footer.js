import React from "react";
import "../styles/Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <footer>
                <nav className="footer-left">
                    <div>
                        <h3>Contact us</h3>
                        <ul>
                            <li><b>Address</b>: 555 Foobar Ln.</li>
                            <li><b>Email</b>: help@littlelemon.com</li>
                            <li><b>Phone</b>: (206) 555 - 1276</li>
                        </ul>
                    </div>
                </nav>

                <nav className="footer-right">
                    <div>
                        <h3>Little Lemon Hours</h3>
                        <ul>
                            <li>Monday - Friday: 9AM - 10PM</li>
                            <li>Saturday - Sunday: 10AM - 12AM</li>
                        </ul>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;