import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  const [log, setLog] = useState("login");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Help</li>
          <li>Cart</li>
          <button
            className="logging"
            onClick={() => {
              log === "login" ? setLog("logout") : setLog("login");
            }}
          >
            {log}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
