import { FOOD_URL } from "../utils/constants";

const RestaurantCard = ({resName, resFood, resRating}) => {
    return (
      <div className="res-card">
        <div className="food-image">
          <img src={FOOD_URL} />
        </div>
        <div className="res-name">
          <h2>{resName}</h2>
        </div>
        <div className="food-name"><h3>{resFood}</h3></div>
        <div className="Rating"><h3>{resRating}</h3></div>
      </div>
    );
  };

  export default RestaurantCard;