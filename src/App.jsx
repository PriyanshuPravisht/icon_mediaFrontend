import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer";
import Body from "./components/navigation/Main";
import PropertyListing from "./components/EventsCardData";
import EventDetails from "./components/EventDetails";
import AddEvent from "./components/Admin/AddEvent";

function App() {
    return (
        <Router>
            <Navbar />

            <Routes>
                {/* Home page */}
                <Route path="/" 
                element={<Body />} />

                {/* Events page */}
                <Route path="/events"
                 element={<PropertyListing />} />

                  {/* Event details page */}
                <Route path="/events/:id" element={<EventDetails />} />

                {/* Add Event page */}
                <Route path="/Admin/AddEvent" element={<AddEvent />} />
            
            </Routes>

            <Footer />
        </Router>
    );
}

export default App;
