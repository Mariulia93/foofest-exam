import React from "react";
import Contact from "./Contact";
import Address from "./Address";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="bgImageFadeOut">
          <ul>
            <li>
              <Contact />
            </li>
            <li>
              <Address />
            </li>
          </ul>
      </div>
    </div>
  );
}

export default Footer;
