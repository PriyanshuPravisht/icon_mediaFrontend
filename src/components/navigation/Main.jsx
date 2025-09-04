import React from "react";
// import "./body.scss"; // Import SCSS

const Body = () => {
  return (
    <div className="body">
      <section className="body__hero">
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
      </section>
    </div>
  );
};

export default Body;
