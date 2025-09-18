import React from "react";
import { useState,useEffect } from "react";



const AdminHomeIconPage = () => {
 // state for colors
  const [textColor, setTextColor] = useState(() => {
  return localStorage.getItem("textColor") || "#000000";
});
  // const [gradientStart, setGradientStart] = useState("#ffffff");
  // const [gradientEnd, setGradientEnd] = useState("#f0f0f0");
   const [gradient, setGradient] = useState(() => {
  return JSON.parse(localStorage.getItem("gradient")) || {
    start: "#ffffff",
    end: "#cccccc",
  };
});

   // ✅ Fetch colors from API on mount
  // useEffect(() => {
  //   axios.get("/api/colors")
  //     .then((res) => {
  //       setTextColor(res.data.textColor);
  //       setGradientStart(res.data.gradientStart);
  //       setGradientEnd(res.data.gradientEnd);
  //     })
  //     .catch((err) => console.error("Error fetching colors:", err));
  // }, []);

  // ✅ Save to API when user changes any color
  // const saveColors = () => {
  //   axios.post("/api/colors", {
  //     textColor,
  //     gradientStart,
  //     gradientEnd
  //   })
  //   .then(() => alert("Colors saved successfully!"))
  //   .catch((err) => console.error("Error saving colors:", err));
  // };
// 🔹 Load saved colors from localStorage on mount
  useEffect(() => {
    const savedTextColor = localStorage.getItem("textColor");
    const savedGradient = localStorage.getItem("gradient");

    if (savedTextColor) setTextColor(savedTextColor);
    if (savedGradient) setGradient(JSON.parse(savedGradient));
  }, []);

  // 🔹 Save colors in localStorage when they change
  useEffect(() => {
    localStorage.setItem("textColor", textColor);
    localStorage.setItem("gradient", JSON.stringify(gradient));
  }, [textColor, gradient]);

  return (
    <div className="container"  style={{
        // background: `linear-gradient(135deg, ${gradientStart}, ${gradientEnd})`
          background: `linear-gradient(to right, ${gradient.start}, ${gradient.end})`,
           color: textColor, 
        }}>
      
      {/* Top Image Section */}
      {/* <div className="top-section">
        <img src="../public\ICON Logo AUS - Black.png" alt="Logo" className="logo" />
        
        <img src="../public\pexels-a-darmel-8134174.jpg" alt="People" className="people-img" />

        <div className="qr-box">
          <img src="../public\QR-image.png" alt="QR Code" />
          <p>
            <b>SCAN</b>
            <br />
            FOR MORE INFO
          </p>
        </div>
      </div> */}


       {/* Color pickers for admin */}
      <div style={{ marginBottom: "15px", textAlign: "center" }}>
        <label>
          <b>Text Color:</b>{" "}
          <input
            type="color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
          />
        </label>
        &nbsp;&nbsp;
        <label>
          <b>Gradient Start:</b>{" "}
          <input
            type="color"
            value={gradient.start}
            onChange={(e) => 
             setGradient({ ...gradient, start: e.target.value })
            }
          />
        </label>
        &nbsp;&nbsp;
        <label>
          <b>Gradient End:</b>{" "}
          <input
            type="color"
            value={gradient.end}
            onChange={(e) => setGradient({ ...gradient, end: e.target.value })}
          />
        </label>
      </div>

      {/* Save Button */}
      {/* <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button onClick={saveColors}>Save Colors</button>
      </div> */}

      {/* Heading */}
      <div className="heading">
        <h2>Let's Connect you to the Community</h2>
      </div>

      {/* Services */}
      <div className="services"  style={{ color: textColor}}>
        <h3>OUR SERVICES</h3>
        <div className="service-grid">
          <div className="service">
            <img src="https://cdn-icons-png.flaticon.com/512/1041/1041889.png" alt="" />
            <p>
              <b style={{ color: textColor}}>Business</b>
              <br />
              Promotions
            </p>
          </div>
          <div className="service">
            <img src="https://cdn-icons-png.flaticon.com/512/747/747310.png" alt="" />
            <p>
              <b  style={{ color: textColor}}>Event</b>
              <br />
              Management
            </p>
          </div>
          <div className="service">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="" />
            <p>
              <b  style={{ color: textColor}}>Social Media</b>
              <br />
              Management
            </p>
          </div>
          <div className="service">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
            <p>
              <b  style={{ color: textColor}}>Marketing</b>
              <br />
              Designings
            </p>
          </div>
          <div className="service">
            <img src="https://cdn-icons-png.flaticon.com/512/685/685655.png" alt="" />
            <p>
              <b  style={{ color: textColor}}>Photography</b>
              <br />
              & Videography
            </p>
          </div>
        </div>
      </div>

      {/* Community Reach */}
      <div className="community" style={{ color: textColor}}>
        <h3>OUR COMMUNITY REACH</h3>
        <ul style={{ color: textColor }}>
          <li >
            <a href="#">
              <i className="fa-solid fa-circle-play" style={{ color:textColor }}></i>
            </a>
            <span className="title">
              <b  >ICON MEDIA</b> PAGE
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

        <ul style={{ width: "100%" ,Color: textColor}}>
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
      <div className="footer-bar" >
        <p className="footer-bar1">📞 1300 947 227</p>
        <p className="footer-bar2">
          🌐 www.iconmedia.info | 📧 hello@iconmedia.info{" "}
        </p>
      </div>
    </div>
  );
};

export default AdminHomeIconPage;
