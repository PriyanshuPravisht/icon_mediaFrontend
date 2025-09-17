import "./App.scss";
import { BrowserRouter as Router, Routes, Route ,useLocation, createBrowserRouter,
  RouterProvider,} from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer";
import Body from "./components/navigation/Main";
import PropertyListing from "./components/EventsCardData";
import EventDetails from "./components/EventDetails";
import AddEvent from "./components/Admin/AddEvent";
import Login from "./components/Admin/auth/Login";
import SignUp from "./components/Admin/auth/SignUp";
import { AppRoutes } from "./utils/Routes";
// function Layout({ children }) {
//   const location = useLocation();
 
//   const hideNavFooter = ["/Admin/Login", "/Admin/Signup"];

//   const shouldHide = hideNavFooter.includes(location.pathname);

//   return (
//     <>
//       {!shouldHide && <Navbar />}
//       {children}
//       {!shouldHide && <Footer />}
//     </>
//   );
// }


// function App() {
//     return (
//         <Router>
//       <Layout>
//         <Routes>
//           <Route path="/" element={<Body />} />
//           <Route path="/events" element={<PropertyListing />} />
//           <Route path="/events/:id" element={<EventDetails />} />
//           <Route path="/Admin/AddEvent" element={<AddEvent />} />
//           <Route path="/Admin/Login" element={<Login />} />
//           <Route path="/Admin/Signup" element={<SignUp />} />
//         </Routes>
//       </Layout>
//     </Router>
//     );
// }

function App() {
  const router = createBrowserRouter(AppRoutes);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}


export default App;
