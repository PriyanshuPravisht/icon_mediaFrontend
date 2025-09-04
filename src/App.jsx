import "./App.scss";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer";
import Body from "./components/navigation/Main";

function App() {
    return (
        <>
            <Navbar />
            {/* <Navbar />
    <Footer /> */}
            <Body />
            <Footer />
        </>
    );
}

export default App;


