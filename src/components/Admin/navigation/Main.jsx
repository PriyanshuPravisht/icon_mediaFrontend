import React from "react";
import HomeImageSectionAdmin from "../HomeImageSection";
import AdminHomeIconPage from "../IconPage";
import AdminEventHomeView from "../EventHomeView";


const AdminBody = () => {
  return (
    <div className="Main-section">
      {/* <section className="body__hero">
        <h1>Welcome to WeMa App</h1>
        <p>This is a dummy body content to test scrolling.</p>
      </section>
      
      <section className="body__content">
        {Array.from({ length: 20 }).map((_, index) => (
          <div className="body__card" key={index}>
            <h2>Content Block {index + 1}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed vitae justo a elit sagittis dignissim. Curabitur in felis ut 
              purus pharetra pretium.
            </p>
          </div>
        ))}
      </section> */}
      {/* <Navbar/> */}
      <HomeImageSectionAdmin/>
      <AdminHomeIconPage/>
      <AdminEventHomeView/>
    </div>
  );
};

export default AdminBody;
