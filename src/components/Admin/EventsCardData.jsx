import Card from "../EventsList";
import { useState,useEffect } from "react";


  export const properties = [
    {
      id: 1,
      image: ["/event1.jpg", "/event2.jpg", "/event3.jpg"],
      location: "CA After Party",
      EventType:"NIGHTLIFE" ,
      startdate:"10/10/2025",
      enddate:"12/10/2025",
      doortime:"10:00 pm",
      description: `Looking for a truly unique and breathtaking experience in Cape Town? Look no further than Table Mountain Cableway, one of the city’s most iconic attractions. With its stunning views, thrilling ride, and rich history, it’s the perfect destination for tourists and locals alike. At Table Mountain Cableway, visitors can take a thrilling ride to the top of one of the world’s most famous mountains. The cable car offers panoramic views of the city, the coastline, and the surrounding mountains, providing a one-of-a-kind perspective on the natural beauty of Cape Town.

Once at the top, visitors can explore the mountain’s many trails, take in the stunning views from various lookout points, and enjoy a range of other activities. From hiking to paragliding to picnicking, there’s something for everyone.

But Table Mountain Cableway isn’t just a place to enjoy nature – it’s also a rich part of Cape Town’s history and culture. The mountain has played an important role in the city’s development, and visitors can learn more about its fascinating past through a range of exhibits and displays. Whether you’re looking for adventure, relaxation, or simply a unique and unforgettable experience, Table Mountain Cableway is the perfect destination. With its breathtaking views, thrilling ride, and rich history, it’s an attraction you won’t want to miss. So book your tickets today and get ready for a day of adventure and wonder on one of the world’s most famous mountains.`,
      Location: "New York",
      Status: "Upcoming", 
      MoneyBill: "Free",
       category:"Travel",
    },
    {
      id: 2,
      image: ["/event4.jpg", "/event5.webp", "/event6.jpeg"],
      location: "Los Angeles, USA",
      EventType:"WEDDING" ,
       startdate:"11/11/2025",
      enddate:"13/11/2025",
      doortime:"11:00 pm",
      description: `The Milano 23T Meeting is an event that brings together car enthusiasts from all over Italy to celebrate their shared passion for vintage vehicles. Whether you’re a proud owner of a classic car or simply appreciate their beauty and history, this event is the perfect opportunity to connect with like-minded individuals and experience the thrill of the open road. At the Milano 23T Meeting, you’ll have the chance to admire some of the most iconic cars from the 1920s and 1930s. From stylish roadsters to sleek coupes, you’ll be able to see these classic vehicles up close and appreciate their timeless design and craftsmanship. And with expert restorers and mechanics on hand, you’ll also be able to learn about the technical aspects of these vehicles and gain insight into what makes them so special.

But the Milano 23T Meeting isn’t just a static display – it’s also an opportunity to take your vintage car out for a spin and experience the thrill of driving it on some of the most beautiful roads in Italy. From the winding country roads of Tuscany to the scenic coastal highways of Liguria, you’ll have the chance to explore the stunning landscape of Italy in style. Of course, the Milano 23T Meeting is also a social event, and you’ll have the chance to connect with other car enthusiasts and share your experiences and knowledge. Whether you’re a seasoned collector or a newcomer to the world of vintage cars, you’ll find a welcoming community of like-minded individuals who share your passion and enthusiasm.

So if you’re a fan of vintage cars or simply appreciate their beauty and history, don’t miss the Milano 23T Meeting. With its stunning setting, exciting driving opportunities, and vibrant community, it’s sure to be an unforgettable event. Register today and get ready for a weekend of vintage cars, beautiful scenery, and new friends.`,
      Location: "New York",
      Status: "Upcoming",
      MoneyBill: "$20",
       category:"Travel",
    },
    {
      id: 3,
     image: ["/event7.jpg", "/event1.jpg", "/event3.jpg"],
      location: "New York City, USA",
      EventType:"TECHNOLOGY" ,
       startdate:"29/12/2025",
      enddate:"01/01/2026",
      doortime:"01:00 pm",
      description:`The Fashion Carnival is the ultimate celebration of style and creativity, bringing together designers, models, and fashion enthusiasts from all over the world for a weekend of fun, fashion, and entertainment. This exciting event is the perfect opportunity to discover the latest trends, meet new people, and immerse yourself in the world of fashion. At the Fashion Carnival, you’ll have the chance to see the latest collections from some of the most talented designers in the industry. From haute couture to streetwear, there’s something to suit every taste and style. And with a range of shows and presentations throughout the weekend, you’ll have plenty of opportunities to see your favorite designers in action.

But the Fashion Carnival is more than just a showcase for fashion – it’s also a celebration of creativity and diversity. Throughout the event, you’ll have the chance to meet models, photographers, stylists, and other industry professionals, and learn about the latest trends and techniques in the world of fashion. And of course, no fashion event would be complete without some exciting entertainment! The Fashion Carnival features live music, dance performances, and other exciting acts, creating a lively and dynamic atmosphere that will keep you entertained all weekend long.

So whether you’re a fashion insider or just a curious enthusiast, the Fashion Carnival is the perfect event for you. With its exciting shows, talented designers, and lively entertainment, it’s sure to be a weekend to remember. So why wait? Buy your tickets today and get ready to experience the ultimate celebration of style and creativity!`,
      Location: "New York",
      Status: "Upcoming",
      MoneyBill: "$40",
       category:"Travel",
    },
    {
      id: 4,
      image: ["/event2.jpg", "/event5.webp", "/event7.jpg"],
      location: "San Francisco, USA",
      EventType:"TRAVEL" ,
       startdate:"19/12/2025",
      enddate:"20/12/2025",
      doortime:"02:00 pm",
      description: `Get ready to rock out with Gloria, the hottest band in town, at their upcoming concert! With their high-energy sound and electrifying performances, Gloria is sure to get you up and dancing all night long. From their hit singles to their newest tracks, Gloria has a reputation for delivering unforgettable live shows that leave audiences wanting more. And at this concert, you’ll have the chance to experience their music in all its glory, surrounded by fellow fans who share your love for great music.

But the Rock Concert of the Gloria isn’t just about the music – it’s also an opportunity to enjoy an incredible atmosphere that’s second to none. With state-of-the-art lighting, sound, and special effects, this concert promises to be a truly immersive experience that will transport you to another world. And with plenty of food and drink options available, you won’t have to worry about missing a beat. Whether you’re craving a delicious snack or a refreshing beverage, you’ll find everything you need to keep your energy levels up and your taste buds satisfied.

So why wait? If you’re a fan of rock music and high-energy performances, the Rock Concert of the Gloria is an event you won’t want to miss. Buy your tickets today and get ready to rock out with Gloria!`,
      Location: "New York",
      Status: "Upcoming",
      MoneyBill: "Free",
       category:"Travel",
    },
    {
      id: 5,
      image: ["/event5.webp", "/event3.jpg", "/event4.jpg"],
      location: "Miami, USA",
      EventType:"BUSINESS" ,
       startdate:"16/12/2025",
      enddate:"16/12/2025",
      doortime:"09:00 pm",
      description:`The Xtra Technology Conference is a must-attend event for anyone interested in the latest trends and innovations in the tech industry. This exciting conference brings together leading experts, innovators, and entrepreneurs to share their insights, experiences, and ideas, and to explore the future of technology. At the Xtra Technology Conference, you’ll have the chance to hear from some of the top minds in the tech industry, as they share their knowledge and expertise in a wide range of fields, from artificial intelligence and machine learning to cybersecurity and blockchain technology. You’ll learn about the latest trends and emerging technologies, and discover how they’re transforming industries.

But the Xtra Technology Conference is more than just a series of lectures and presentations – it’s also an opportunity to connect with other professionals and entrepreneurs, to share ideas and collaborate on new projects. With plenty of networking events and interactive workshops, you’ll have the chance to meet like-minded individuals and build valuable connections that could help you take your career to the next level.

Whether you’re a seasoned tech industry professional or just starting out in your career, the conference is the perfect event to expand your knowledge, broaden your horizons, and connect with the brightest minds in the business. So don’t miss out – book your tickets today and get ready to take your tech career to the next level!`,
      Location: "New York",
      Status: "Upcoming",
      MoneyBill: "$35",
       category:"Travel",
    },
    {
      id: 6,
      image: ["/event3.jpg", "/event7.jpg", "/event2.jpg"],
      location: "Chicago, USA",
      EventType:"NIGHTLIFE" ,
      startdate:"13/12/2025",
      enddate:"14/12/2025",
      doortime:"01:00 pm",
      description: `Get ready to experience the excitement of the Soccer Cup Final! This thrilling event is the culmination of months of intense competition between the best soccer teams from around the world. And now, it’s time for the ultimate showdown – who will come out on top and claim the coveted championship trophy?

At the Soccer Cup Final, you’ll be in the middle of all the action as you watch the world’s top soccer players battle it out on the field. From stunning goals to dramatic saves, every moment is sure to have you on the edge of your seat. And with a passionate crowd of fans cheering on their favorite teams, the atmosphere is electric and unforgettable. But the Soccer Cup Final is more than just a soccer game – it’s a celebration of the global community that comes together to support this beloved sport. From the colorful flags waving in the stands to the diverse range of food and drinks available, you’ll feel the energy and excitement of people from all walks of life who share a love for soccer.

Whether you’re a die-hard soccer fan or simply enjoy a good sporting event, the Soccer Cup Final is the perfect experience for you. With its thrilling atmosphere, world-class players, and unforgettable moments, it’s an event that you won’t want to miss. So get your tickets today and get ready to witness history in the making!`,
      Location: "New York",
      Status: "Upcoming",
      MoneyBill: "Free",
      category:"Travel",
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

const PropertyListing = () => {

    // state for text color
  const [eventHome_textColor, setTextColor] = useState(() => {
    return localStorage.getItem("eventHome_textColor") || "#000000";
  });

  // state for gradient
  const [eventHome_cardGradient, setCardGradient] = useState(() => {
    return JSON.parse(localStorage.getItem("eventHome_cardGradient")) || {
      start: "#e0e0e0",
      end: "#b0b0b0",
    };
  });

  // Load saved values from localStorage on mount
  useEffect(() => {
    const savedTextColor = localStorage.getItem("eventHome_textColor");
    const savedCardGradient = localStorage.getItem("eventHome_cardGradient");

    if (savedTextColor) setTextColor(savedTextColor);
    if (savedCardGradient) setCardGradient(JSON.parse(savedCardGradient));
  }, []);

  // Save values to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("eventHome_textColor", eventHome_textColor);
    localStorage.setItem("eventHome_cardGradient", JSON.stringify(eventHome_cardGradient));
  }, [eventHome_textColor, eventHome_cardGradient]);


  return (
    <div style={{border:"solid red"}}>
      <div style={{ margin: "5% 0 0 0" }}>
        <label>
          <b>Card Gradient Start:</b>{" "}
          <input
            type="color"
            value={eventHome_cardGradient.start}
            onChange={(e) =>
              setCardGradient({ ...eventHome_cardGradient, start: e.target.value })
            }
          />
        </label>
        &nbsp;&nbsp;
        <label>
          <b>Card Gradient End:</b>{" "}
          <input
            type="color"
            value={eventHome_cardGradient.end}
            onChange={(e) =>
              setCardGradient({ ...eventHome_cardGradient, end: e.target.value })
            }
          />
        </label>
        &nbsp;&nbsp;
        <label>
          <b>Text Color:</b>{" "}
          <input
            type="color"
            value={eventHome_textColor}
            onChange={(e) => setTextColor(e.target.value)}
          />
        </label>
      </div>

{/* Cards */}
    <div className="propertylist-content">
      {properties.map((property) => (
        <Card key={property.id} {...property} 
        cardGradient={eventHome_cardGradient}
        textColor={eventHome_textColor}/>
      ))}

    </div>
    </div>
  );
};

export default PropertyListing;
