import { FOOD_URL } from "../utils/constants";

const RestaurantCard = ({resData}) => {
    return (
      <div className="res-card">
        <div className="food-image">
          <img src={FOOD_URL + resData?.info?.cloudinaryImageId} alt="food" />
        </div>
        <div className="res-name">
          <h2>{resData?.info?.name}</h2>
        </div>
        <div className="food-name"><p>{resData?.info?.cuisines.join(", ")}</p></div>
        <div className="Rating"><h3>{resData?.info?.avgRating}</h3></div>
      </div>
    );
  };

  export default RestaurantCard;