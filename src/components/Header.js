import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [log, setLog] = useState("login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus === true ? "✅" : "🔴"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Help</Link></li>
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
