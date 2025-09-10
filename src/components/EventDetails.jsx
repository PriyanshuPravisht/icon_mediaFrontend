import { useParams, useNavigate, Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaHourglassHalf,
  FaMapMarkerAlt,
  FaMoneyBill,
  FaChevronLeft,
  FaChevronRight,
  FaTags,
  FaRegClock,
} from "react-icons/fa";
import { properties } from "./EventsCardData";
import EventList from "./EventsList";

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const event = properties.find((p) => String(p.id) === id);

  if (!event) return <h2>Event Not Found</h2>;

  // Custom Prev Button
  const PrevArrow = ({ className, onClick }) => (
    <div
      className={className}
      onClick={onClick}
      style={{
        left: "10px",
        zIndex: 2,
        width: "50px",
        height: "50px",
        background: "rgba(0,0,0,0.5)",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FaChevronLeft color="#fff" />
    </div>
  );

  // Custom Next Button
  const NextArrow = ({ className, onClick }) => (
    <div
      className={className}
      onClick={onClick}
      style={{
        right: "10px",
        zIndex: 2,
        width: "50px",
        height: "50px",
        background: "rgba(0,0,0,0.5)",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FaChevronRight color="#fff" />
    </div>
  );

  // slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  // Related events (exclude current one)
  const relatedEvents = properties
    .filter((p) => p.id !== event.id)
    .slice(0, 3);

  return (
    <div className="event-details" style={{ marginTop: "5%" }}>
      {/* BackButton */}
      <button onClick={() => navigate("/events")} className="backtolisting-btn">
        <FaArrowLeft /> Back to Events
      </button>

      {/* Image Carousel */}
      <div
        className="images-carousel"
        style={{ marginBottom: "20px", display: "flex" }}
      >
        <Slider {...settings} style={{ width: "60%" }}>
          {event.image.map((img, i) => (
            <div key={i}>
              <img
                src={img}
                alt={`event-${i}`}
                style={{
                  width: "100%",
                  height: "500px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </div>
          ))}
        </Slider>
        <div className="event-details-card1">
          <h1>Overview</h1>
          <hr />
          <div className="event-details-row2">
            <p className="event-details-startdate">
              <FaCalendarAlt style={{ color: "#ffbb00", marginRight: "8px" }} />
              <strong style={{ fontWeight: "600" }}>Start Date : </strong>{" "}
              {event.startdate}
            </p>
            <p className="event-details-enddate">
              <FaCalendarAlt style={{ color: "#ffbb00", marginRight: "8px" }} />
              <strong style={{ fontWeight: "600" }}>End Date : </strong>{" "}
              {event.enddate}
            </p>
            <p className="event-details-doortime">
              <FaRegClock style={{ color: "#ffbb00", marginRight: "8px" }} />
              <strong style={{ fontWeight: "600" }}>Door Time : </strong>{" "}
              {event.doortime}
            </p>
            <p className="event-details-status">
              <FaHourglassHalf
                style={{ color: "#ffbb00", marginRight: "8px" }}
              />
              <strong style={{ fontWeight: "600" }}>Status : </strong>{" "}
              {event.Status}
            </p>
            <p className="event-details-location">
              <FaMapMarkerAlt
                style={{ color: "#ffbb00", marginRight: "8px" }}
              />
              <strong style={{ fontWeight: "600" }}>Location : </strong>{" "}
              {event.Location}
            </p>

            <p className="event-details-price">
              <FaMoneyBill style={{ color: "#ffbb00", marginRight: "8px" }} />
              <strong style={{ fontWeight: "600" }}>Price : </strong>{" "}
              {event.MoneyBill}
            </p>
            <p className="event-details-category">
              <FaTags style={{ color: "#ffbb00", marginRight: "8px" }} />
              <strong style={{ fontWeight: "600" }}>Category : </strong>{" "}
              {event.category}
            </p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="event-details-card">
        <h1>Description</h1>
        <hr />
        <p className="event-details-description">{event.description}</p>
      </div>

      {/* Related Events Section */}
      <div className="related-events" >
        <h1 style={{ marginBottom: "0px" }}>Related Events</h1><hr></hr>
        <div className="related-events-cards" style={{ display: "flex", gap: "20px",justifyContent:"space-between" }}>
          {relatedEvents.map((relEvent, index) => (
            <EventList key={index} {...relEvent} />
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Link to="/events">
            <button className="see_more-btn"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>See More Events</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
