import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer";
import Body from "./components/navigation/Main";
import PropertyListing from "./components/EventsCardData";

function App() {
    return (
        <Router>
            <Navbar />

            <Routes>
                {/* Home page */}
                <Route path="/" element={<Body />} />

                {/* Events page */}
                <Route path="/events" element={<PropertyListing />} />

                {/* future: About, Contact, etc */}
            </Routes>

            <Footer />
        </Router>
    );
}

export default App;
