import React from "react";
import { BsHouseDoorFill,BsEnvelopeOpen } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

const Header = () => {
  return (
    <header className="nav">
      <ul className="verticalnav">
        <li>
          <a href="#designer">
            <BsHouseDoorFill className="header-home-icon" />
            <h2 className="home">Home</h2>
          </a>
        </li>
        <li>
          <a href="#myabout">
            <AiOutlineUser className="header-home-icon" />
            <h2>About</h2>
          </a>
        </li>
        <li>
          <a href="#contact">
            <BsEnvelopeOpen className="header-home-icon" />
            <h2>Contact</h2>
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
