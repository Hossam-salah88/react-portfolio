import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <h1 className="navbar__logo--logo">Hossam</h1>
        <span className="navbar__togglebtn"></span>
      </div>
      <div className="navbar__menu">
        <div className="navbar__items">
          <ul className="navbar__list">
            <li className="navbar__link">Hossam</li>
            <li className="navbar__link">Serivces</li>
            <li className="navbar__link">Experience</li>
            <li className="navbar__link">Protfolio</li>
            <li className="navbar__link">Testimonial</li>
          </ul>
        </div>

        <button className="btn navbar__btn">Contact</button>
      </div>
    </div>
  );
};
export default Navbar;
