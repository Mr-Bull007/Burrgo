import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const {userName} = useContext(UserContext);
  return (
    <div className="flex justify-around pt-4 mt-4 bg-slate-400 pb-8">
      <div className="copyright">copyright 2024</div>
      <div className="links">
        <ul className="flex">
          <li className="mx-3">Home</li>
          <li className="mx-3">Contact</li>
          <li className="mx-3">Address:</li>
          <li className="mx-3">
            <a>Instagram</a>
          </li>
          <li className="mx-3">
            <a>Facebook</a>
          </li>
          <li className="mx-3">User : {userName}</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
