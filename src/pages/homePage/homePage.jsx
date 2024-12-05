import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import React from "react";
function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1>Real Estate Company to find your Dream House</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            consequatur debitis quia ut repellendus earum, nobis nihil eaque
            ipsum quidem expedita eum iste praesentium modi pariatur facere
            dolorum. Fugit, repudiandae!
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of experiemce</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Happy Clients</h2>
            </div>
            <div className="box">
              <h1>30</h1>
              <h2>Hardworking Employees</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <img src="/bg.png" alt="image" />
      </div>
    </div>
  );
}

export default HomePage;
