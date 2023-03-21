import React from "react";
import google from "../image/google-logo.png"
import facebook from "../image/facebook.png"
import twitter from "../image/twitter-logo.png"


function MaterialIcon() {
  return (
    <>
      <div className="icons">
        <div className="icon">
          
          <img src={google} alt="google" />
        </div>
        <div className="icon">
        
          <img src={facebook} alt="facebook" />
        </div>
        <div className="icon">
        
          <img src={twitter} alt="twitter" />
        </div>
      </div>
      <h6>
        Don't have an Account? <b>Create new now!</b>
      </h6>
      <h6>
        By signing up, you are agree with our <b>Term & Conditions</b>
      </h6>
    </>
  );
}

export default MaterialIcon;