import { FOOD_URL } from "../utils/constants";

const RestaurantCard = ({resData}) => {
    return (
      <div className="res-card">
        <div className="food-image">
          <img src={FOOD_URL} alt="food" />
        </div>
        <div className="res-name">
          <h2>{resData.resName}</h2>
        </div>
        <div className="food-name"><h3>{resData.resFood}</h3></div>
        <div className="Rating"><h3>{resData.resRating}</h3></div>
      </div>
    );
  };

  export default RestaurantCard;