import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [log, setLog] = useState("login");
  const onlineStatus = useOnlineStatus();

  const {userName} = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between p-5 bg-red-500 shadow-xl">
      <div className="logo-container">
        <img src={LOGO_URL} className="size-24" />
      </div>
      <div className="nav-items">
        <ul className="flex p-2 m-4">
          <li className="px-4 font-semibold">Online Status: {onlineStatus === true ? "✅" : "🔴"}</li>
          <li className="px-4 font-semibold"><Link to="/about">About Us</Link></li>
          <li className="px-4 font-semibold"><Link to="/">Home</Link></li>
          <li className="px-4 font-semibold"><Link to="/contact">Help</Link></li>
          <li className="px-4 font-semibold"><Link to="/cart">Cart - {cartItems.length} items</Link></li>
          <button
            className="px-4 font-semibold"
            onClick={() => {
              log === "login" ? setLog("logout") : setLog("login");
            }}
          >
            {log}
          </button>
          <li className="px-4 font-semibold">User : {userName}</li>

        </ul>
      </div>
    </div>
  );
};

export default Header;
