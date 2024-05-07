import React from "react";
import logo from "../../assets/logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <div className="nav-items">
          <section>
            {/*logo*/}
            <div class="nav-logo">
              <img src={logo} alt="loading" />
              <span>GeekFoods</span>
            </div>
          </section>
          <section className="nav-links-container">
            {" "}
            {/* Nav links */}
            <ul className="nav-links">
              <a href="#">Home</a>
              <a href="#">Quotes</a>
              <a href="#">Resturants</a>
              <a href="#">Foods</a>
              <a href="#">Contact</a>
            </ul>
          </section>
          <section className="nav-button">
            <button>Get started</button>
          </section>
        </div>
      </nav>
      </div>
  );
};

export default Header;
