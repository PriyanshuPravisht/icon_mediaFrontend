import React from "react";
import '../Style/home.scss'; // make sure your CSS file is in the right path

const HomeIconPage = () => {
  return (
    <div className="container">
      {/* Top Image Section */}
      <div className="top-section">
        <img src="../public\ICON Logo AUS - Black.png" alt="Logo" className="logo" />
        {/* <h2>ICON <br />MEDIA</h2> */}
        <img src="../public\pexels-a-darmel-8134174.jpg" alt="People" className="people-img" />

        <div className="qr-box">
          <img src="../public\QR-image.png" alt="QR Code" />
          <p>
            <b>SCAN</b>
            <br />
            FOR MORE INFO
          </p>
        </div>
      </div>

      {/* Heading */}
      <div className="heading">
        <h2>Let's Connect you to the Community</h2>
      </div>

      {/* Services */}
      <div className="services">
        <h3>OUR SERVICES</h3>
        <div className="service-grid">
          <div className="service">
            <img src="https://cdn-icons-png.flaticon.com/512/1041/1041889.png" alt="" />
            <p>
              <b style={{ color: "black" }}>Business</b>
              <br />
              Promotions
            </p>
          </div>
          <div className="service">
            <img src="https://cdn-icons-png.flaticon.com/512/747/747310.png" alt="" />
            <p>
              <b style={{ color: "black" }}>Event</b>
              <br />
              Management
            </p>
          </div>
          <div className="service">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="" />
            <p>
              <b style={{ color: "black" }}>Social Media</b>
              <br />
              Management
            </p>
          </div>
          <div className="service">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
            <p>
              <b style={{ color: "black" }}>Marketing</b>
              <br />
              Designings
            </p>
          </div>
          <div className="service">
            <img src="https://cdn-icons-png.flaticon.com/512/685/685655.png" alt="" />
            <p>
              <b style={{ color: "black" }}>Photography</b>
              <br />
              & Videography
            </p>
          </div>
        </div>
      </div>

      {/* Community Reach */}
      <div className="community">
        <h3>OUR COMMUNITY REACH</h3>
        <ul>
          <li>
            <a href="#">
              <i className="fa-solid fa-circle-play" style={{ color: "#000" }}></i>
            </a>
            <span className="title">
              <b>ICON MEDIA</b> PAGE
            </span>
            <span className="count">
              <b>15,000</b> Likes
            </span>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <span className="title">
              <b>INDIANS IN MELBOURNE</b> GROUP
            </span>
            <span className="count">
              <b>70,000</b> Members
            </span>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <span className="title">
              <b>INDIANS IN SYDNEY</b> GROUP
            </span>
            <span className="count">
              <b>15,000</b> Members
            </span>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <span className="title">
              <b>INDIANS IN MELBOURNE</b> PAGE
            </span>
            <span className="count">
              <b>18,000</b> Members
            </span>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <span className="title">
              <b>INDIANS IN MELBOURNE</b> MEETUP
            </span>
            <span className="count">
              <b>4,000</b> Members
            </span>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <span className="title">
              <b>INDIANS IN AUSTRALIA</b> GROUP
            </span>
            <span className="count">
              <b>1,000</b> Members
            </span>
          </li>
        </ul>

        <ul style={{ width: "100%" }}>
          <li style={{ paddingLeft: "5%" }}>
            <div>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </div>
            <span className="title">
              <b>ICON MEDIA YouTube, Instagram & TikTok Channels</b>
            </span>
          </li>
          <li style={{ paddingLeft: "18%" }}>
            <a href="#">
              <i className="fa-solid fa-users"></i>
            </a>
            <span className="title">
              <b>INFLUENCERS AND COMMUNITY LEADERS</b>
            </span>
          </li>
        </ul>
      </div>

      {/* Footer Contact */}
      <div className="footer-bar">
        <p className="footer-bar1">📞 1300 947 227</p>
        <p className="footer-bar2">
          🌐 www.iconmedia.info | 📧 hello@iconmedia.info{" "}
        </p>
      </div>
    </div>
  );
};

export default HomeIconPage;
