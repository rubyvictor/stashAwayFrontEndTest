import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="stashaway">StashAway</div>
        <div className="support">Support</div>
        <div className="logout">Logout</div>
      </div>
      <div className="container_two">
        <div className="preview">Preview your portfolio</div>
        <div className="youcan">You can alway change this later</div>
      </div>
    </div>
  );
};

export default Header;
