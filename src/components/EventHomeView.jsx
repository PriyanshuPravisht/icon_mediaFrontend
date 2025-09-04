import { Link } from "react-router-dom";
import EventList from "./EventsList";
import EventCardData from "./EventsCardData"; // we will reuse data from here


const EventHomeView = () => {
  // Copy the same properties array from EventCardData
  const properties = [
   {
      image: ["event1.jpg", "event2.jpg", "event3.jpg"],
      location: "CA After Party",
      EventType:"NIGHTLIFE" ,
      date:"20/10/2025",
      description: "Join us for the ultimate CA after party! Dance the night away with great music, drinks, and fun. Don't miss this unforgettable event. See you there!",
      Location: "New York",
      Status: "Upcoming", 
      MoneyBill: "Free",
    },
    {
      image: ["event4.jpg", "event5.webp", "event6.jpeg"],
      location: "Los Angeles, USA",
      EventType:"WEDDING" ,
      date:"28/10/2025",
      description: "Join us for the ultimate CA after party! Dance the night away with great music, drinks, and fun. Don't miss this unforgettable event. See you there!",
      Location: "New York",
      Status: "Upcoming",
      MoneyBill: "$20",
    },
    {
     image: ["event7.jpg", "event1.jpg", "event3.jpg"],
      location: "New York City, USA",
      EventType:"TECHNOLOGY" ,
      date:"21/11/2025",
      description: "Join us for the ultimate CA after party! Dance the night away with great music, drinks, and fun. Don't miss this unforgettable event. See you there!",
      Location: "New York",
      Status: "Upcoming",
      MoneyBill: "$40",
    },
    {
      image: ["event2.jpg", "event5.webp", "event7.jpg"],
      location: "San Francisco, USA",
      EventType:"TRAVEL" ,
      date:"30/11/2025",
      description: "Join us for the ultimate CA after party! Dance the night away with great music, drinks, and fun. Don't miss this unforgettable event. See you there!",
      Location: "New York",
      Status: "Upcoming",
      MoneyBill: "Free",
    },
    {
      image: ["event5.webp", "event3.jpg", "event4.jpg"],
      location: "Miami, USA",
      EventType:"BUSINESS" ,
      date:"09/12/2025",
      description: "Join us for the ultimate CA after party! Dance the night away with great music, drinks, and fun. Don't miss this unforgettable event. See you there!",
      Location: "New York",
      Status: "Upcoming",
      MoneyBill: "$35",
    },
    {
      image: ["event3.jpg", "event7.jpg", "event2.jpg"],
      location: "Chicago, USA",
      EventType:"NIGHTLIFE" ,
      date:"10/12/2025",
      description: "Join us for the ultimate CA after party! Dance the night away with great music, drinks, and fun. Don't miss this unforgettable event. See you there!",
      Location: "New York",
      Status: "Upcoming",
      MoneyBill: "Free",
    },
  ];


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
          <button className="see_more-btn">See More Events</button>
        </Link>
      </div>
    </div>
  );
};

export default EventHomeView;
