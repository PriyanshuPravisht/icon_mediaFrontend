import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
// import "./Navbar.css";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${scrolled ? "navbar-scrolled" : "navbar-scrolled2"}`}>
            <div className="navbar-container">
                <div >
                    <img
                        src="https://scontent.fdel27-1.fna.fbcdn.net/v/t39.30808-1/505781465_1595337354733996_4279726865292578324_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=101&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=-vkRMHVhYeIQ7kNvwEkZ1JU&_nc_oc=AdkyTB2CfqlYDDLvs_KMxJDR6LmJos1B4Atf60A-KI9EG9u4MuRYZcmhl8doVhWOoAp7ECtQ8Us_vzRc5Pvvd3Ju&_nc_zt=24&_nc_ht=scontent.fdel27-1.fna&_nc_gid=tfmWFIp0R9rG9z7scaUZew&oh=00_AfbMVz_pxkWkH7cKWUru3EdChda373yeS1DRuokINzjMrA&oe=68BEEAE8"
                        alt="Profile"
                        className="logo"
                    />
                </div>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/events">Events</Link></li> {/* ✅ Route to events */}
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>

                </ul>
                <button className="register-btn">Register</button>
            </div>
        </nav>
    );
};

export default Navbar;
