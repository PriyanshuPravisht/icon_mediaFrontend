import { FaBed, FaCalendarAlt, FaHourglassHalf, FaMapMarkerAlt ,FaMoneyBill} from "react-icons/fa";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import '../Style/Events.scss';

const Card = ({ image, location,date,EventType, description, Location, Status, MoneyBill }) => {
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
    <div className="property-card">
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
      <div className="property-card__content">
        {/* Location */}
        <div className="property-card__location">
          {/* <FaMapMarkerAlt className="mr-2 text-red-500"></FaMapMarkerAlt> */}
          <span>{location}</span>
        </div>

        {/* Date row */}
        <div className="property-card__details">
            <div className="property-card__eventtype">
            {/* <FaBed className="mr-1 text-blue-500" />  */}
            {EventType}
          </div>
          <div className="flex items-center property-card__detailrow">
            {/* <FaBed className="mr-1 text-blue-500" />  */}
             <FaCalendarAlt className="mr-2 text-red-500"></FaCalendarAlt>
            {date}
          </div>
           
          
        </div>

        {/* Area */}
        <p className="property-card__description">{description}sqft</p>

        {/* Icons Row */}
        <div className="property-card__details">
          <div className="flex items-center property-card__detailrow">
            {/* <FaBed className="mr-1 text-blue-500" />  */}
             <FaMapMarkerAlt className="mr-2 text-red-500"></FaMapMarkerAlt>
            {Location}
          </div>
          <div className="flex items-center property-card__detailrow">
            {/* <FaBath className="mr-1 text-green-500" /> */}
            <FaHourglassHalf className="mr-2" />
             {Status}
          </div>
          <div className="flex items-center property-card__detailrow">
            {/* <FaCar className="mr-1 text-yellow-500" />  */}
            <FaMoneyBill className="text-green-500" />   
            {MoneyBill}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
