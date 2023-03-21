import React from "react";
import logo from "../image/React.webp"
function Navbar() {
  return (
    <div className="navbar">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <h1>SOME RANDOM TEXT,SOME<br/> RANDOM TEXT,SOME RANDOM TEXT</h1>
    </div>
  );
}

export default Navbar;