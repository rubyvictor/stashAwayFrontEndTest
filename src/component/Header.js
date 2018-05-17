import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="header_stashaway">StashAway</div>
        <div className="header_support">Support</div>
        <div className="header_logout">Logout</div>
      </div>
      <div className="container_two">
        <div className="header_preview">Preview your portfolio</div>
        <div className="header_youcan">You can alway change this later</div>
      </div>
    </div>
  );
};

export default Header;
