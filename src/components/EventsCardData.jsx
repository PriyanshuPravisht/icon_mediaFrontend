import Card from "./EventsList";

const PropertyListing = () => {
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
      image: ["event3.jpg", "event7.jpeg", "event2.jpg"],
      location: "Chicago, USA",
      EventType:"NIGHTLIFE" ,
      date:"10/12/2025",
      description: "Join us for the ultimate CA after party! Dance the night away with great music, drinks, and fun. Don't miss this unforgettable event. See you there!",
      Location: "New York",
      Status: "Upcoming",
      MoneyBill: "Free",
    },
    // {
    //     image :"property7.jpg",
    //     location:"Los Angeles, USA",
    //     area: 2000 ,
    //     bedrooms: 3,
    //     bathrooms: 2,
    //     parking :1
    // },
  ];

  return (
    <div className="propertylist-content">
      {properties.map((property, index) => (
        <Card key={index} {...property} />
      ))}
    </div>
  );
};

export default PropertyListing;
