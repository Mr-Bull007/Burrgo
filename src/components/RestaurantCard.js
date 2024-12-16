import { FOOD_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  return (
    <div className="h-[400px] w-[200px] bg-white border-solid border-2 border-black p-2 m-3 rounded-md transition-transform transform hover:scale-95 hover:shadow-inner">
      <div className="food-image">
        <img
          className="rounded-md size-40 mx-3 object-cover"
          src={FOOD_URL + resData?.info?.cloudinaryImageId}
          alt="food"
        />
      </div>
      <div className="font-extrabold mx-5 mt-2">
        <h2>{resData?.info?.name}</h2>
      </div>
      <div className="font-medium text-gray-400 mx-5">
        <p>{resData?.info?.cuisines.join(", ")}</p>
      </div>
      <div className="mx-5">
        <h3>{resData?.info?.avgRating}</h3>
      </div>
    </div>
  );
};

export default RestaurantCard;
