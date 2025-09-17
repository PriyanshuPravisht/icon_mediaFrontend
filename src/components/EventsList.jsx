import {Link} from "react-router-dom";
import { FaBed, FaCalendarAlt, FaHourglassHalf, FaMapMarkerAlt ,FaMoneyBill} from "react-icons/fa";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState,useEffect } from "react";
// import '../Style/Events.scss';

const Card = ({id, image, location,startdate,title,doortime,EventType, description, Location, Status, MoneyBill,cardGradient ,textColor}) => {
   // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  
  return (
    <Link to={`/events/${id}`} style={{ textDecoration: "none", color: "inherit" }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
    <div className="property-card"   
    style={{
    background: `linear-gradient(135deg, ${cardGradient?.start || "#ffffff"}, ${cardGradient?.end || "#f0f0f0"})`,
    color: textColor || "#000",
    borderRadius: "15px",
    padding: "10px",
  }}
    // style={{
    //       background: `linear-gradient(135deg, ${cardGradient.start}, ${cardGradient.end})`,
    //       color: textColor,  
    //       borderRadius: "15px",
    //       padding: "10px"
    //     }}
        >
      {/* Image */}
      {/* <img src={image} alt={location} className="property-card__image" /> */}
      {/* Image Carousel */}


    
      <Slider {...settings} >
        {image.map((img, index) => (
          <div key={index} >
            <img
              className="property-card__image"
              src={img}
              alt={`property-${index}`}
            //   className="w-full h-52 object-cover"
            />
          </div>
        ))}
      </Slider>

      {/* Details */}
      <div className="property-card__content" >
        {/* Location */}
        <div className="property-card__location" style={{ color: textColor || "#000" }}>
          {/* <FaMapMarkerAlt className="mr-2 text-red-500"></FaMapMarkerAlt> */}
          <span>{location}</span>
        </div>

        {/* Date row */}
        <div className="property-card__details" style={{ color: textColor || "#000" }}>
            <div className="property-card__eventtype">
            {/* <FaBed className="mr-1 text-blue-500" />  */}
            {EventType}
          </div>
          <div className="flex items-center property-card__detailrow" >
            {/* <FaBed className="mr-1 text-blue-500" />  */}
             <FaCalendarAlt className="mr-2 text-red-500" style={{ color: textColor || "#000" }}></FaCalendarAlt>
            {startdate}
          </div>
          
        </div>

        {/* Area */}
        {/* <p className="property-card__description">{title}</p> */}

        {/* Icons Row */}
        <div className="property-card__details">
          <div className="flex items-center property-card__detailrow" style={{ color: textColor || "#000" }}>
            {/* <FaBed className="mr-1 text-blue-500" />  */}
             <FaMapMarkerAlt className="mr-2 text-red-500"></FaMapMarkerAlt>
            {Location}
          </div>
          <div className="flex items-center property-card__detailrow" style={{ color: textColor || "#000" }}>
            {/* <FaBath className="mr-1 text-green-500" /> */}
            <FaHourglassHalf className="mr-2" />
             {Status}
          </div>
          <div className="flex items-center property-card__detailrow" style={{ color: textColor || "#000" }}>
            {/* <FaCar className="mr-1 text-yellow-500" />  */}
            <FaMoneyBill className="text-green-500" />   
            {MoneyBill}
          </div>
        </div>
      </div>
    </div>
    </Link>

    
  );
};

export default Card;
