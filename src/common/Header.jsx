import React from "react";
import "./header.css";

const Header = props => (
  <header className="header">
    <h1 className="header__title">{props.headerTitle}</h1>
  </header>
);

export default Header;
