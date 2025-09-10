import { Link } from "react-router-dom";
import EventList from "./EventsList";
import EventCardData from "./EventsCardData"; // we will reuse data from here
import { properties } from "./EventsCardData";


const EventHomeView = () => {

  return (
   
    <div className="home-events-preview" >
      <h1> <p style={{color:"#000",marginRight:"10px", fontWeight:"400"}}>Featured</p>Events</h1>
      {/* Show only first 3 events */}
      <div className="home-events-preview-cards">
      {properties.slice(0, 3).map((property, index) => (
        <EventList key={index} {...property} />
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
