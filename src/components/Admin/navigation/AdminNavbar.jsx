import React, { useState, useEffect } from "react";
import { Link ,useNavigate} from "react-router-dom"; // ✅ Import Link
// import "./Navbar.css";

const AdminNavbar = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  const handleLogout = () => {
    // Remove saved token
    localStorage.removeItem("token");

    // Redirect to login page
    navigate("/admin/login");
  }

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
                        src="../ICON Logo AUS - Black.png"
                        alt="Profile"
                        className="logo"
                    />
                </div>
                <ul className="nav-links">
                    <li><Link to="home">Home</Link></li>
                    <li><Link to="events">Events</Link></li> {/* ✅ Route to events */}
                    {/* <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li> */}

                </ul>
                <button className="register-btn" onClick={handleLogout}>Log Out</button>
            </div>
        </nav>
    );
};

export default AdminNavbar;
