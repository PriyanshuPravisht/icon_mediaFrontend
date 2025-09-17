import { Link } from "react-router-dom";
import EventList from "./EventsList";
import EventCardData from "./EventsCardData"; // we will reuse data from here
import { properties } from "./EventsCardData";
import { useState,useEffect } from "react";


const EventHomeView = () => {
   // state for colors
    const [eventHome_textColor, setTextColor] = useState(() => {
    return localStorage.getItem("eventHome_textColor") || "#000000";
  });
    // const [gradientStart, setGradientStart] = useState("#ffffff");
    // const [gradientEnd, setGradientEnd] = useState("#f0f0f0");
     const [eventHome_gradient, setGradient] = useState(() => {
    return JSON.parse(localStorage.getItem("eventHome_gradient")) || {
      start: "#ffffff",
      end: "#cccccc",
    };
  });

  

   // state for colors
  // const [textColor, setTextColor] = useState("#000000");
  // const [gradientStart, setGradientStart] = useState("#ffffff");
  // const [gradientEnd, setGradientEnd] = useState("#f0f0f0");


  // 🔹 Load saved colors from localStorage on mount
    useEffect(() => {
      const savedTextColor = localStorage.getItem("eventHome_textColor");
      const savedGradient = localStorage.getItem("eventHome_gradient");
  
      if (savedTextColor) setTextColor(savedTextColor);
      if (savedGradient) setGradient(JSON.parse(savedGradient));
    }, []);
  
    // 🔹 Save colors in localStorage when they change
    useEffect(() => {
      localStorage.setItem("eventHome_textColor", eventHome_textColor);
      localStorage.setItem("eventHome_gradient", JSON.stringify(eventHome_gradient));
    }, [eventHome_textColor, eventHome_gradient]);

  return (
    <div className="home-events-preview" 
     style={{
        background: `linear-gradient(to right, ${eventHome_gradient.start}`,
           color: eventHome_textColor,
        padding: "20px",
        borderRadius: "12px",
      }}
       >
        {/* Color pickers for admin */}
      <div style={{ marginBottom: "15px", textAlign: "center" }}>
        <label>
          <b>Text Color:</b>{" "}
          <input
            type="color"
            value={eventHome_textColor}
            onChange={(e) => setTextColor(e.target.value)}
          />
        </label>
        &nbsp;&nbsp;
        <label>
          <b>Backgrund Color:</b>{" "}
          <input
            type="color"
            value={eventHome_gradient.start}
            onChange={(e) => 
             setGradient({ ...eventHome_gradient, start: e.target.value })
            }
          />
        </label>
        &nbsp;&nbsp;
        {/* <label>
          <b>Gradient End:</b>{" "}
          <input
            type="color"
             value={eventHome_gradient.end}
            onChange={(e) => setGradient({ ...eventHome_gradient, end: e.target.value })}
          />
        </label> */}
      
      </div>


      <h1  
      // style={{color:textColor}}
      > <p style={{color:eventHome_textColor,marginRight:"10px", fontWeight:"400"}}>Featured</p>Events</h1>
      {/* Show only first 3 events */}
      <div className="home-events-preview-cards" >
      {properties.slice(0, 3).map((property, index) => (
        <EventList key={index} {...property} style={{border:"solid blue"}}/>
      ))}
      </div>

      {/* See More button */}
      <div className="see-more-btn " style={{ textAlign: "center" }}>
        <Link to="/events">
          <button className="see_more-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>See More Events</button>
        </Link>
      </div>
    </div>
  );
};

export default EventHomeView;
