import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { RECIPE_IMG_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const Menu = () => {
  const params = useParams();
  const { menuData, resName } = useRestaurantMenu(params.id);

  console.log("Menu Data:", menuData);
  console.log("Restaurant Name:", resName);

  if (!menuData || menuData.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="menu">
      <div className="restaurant-name">
        <h1>{resName}</h1>
      </div>
      {menuData.map((recipe, index) => (
        <div className="recipe-card" key={recipe?.card?.info?.id}>
          <div className="recipe-info">
            <div className="recipe-details">
              <h2>
                {recipe?.card?.info?.name} - Rs.{" "}
                {(recipe?.card?.info?.defaultPrice ||
                  recipe?.card?.info?.price) / 100}
              </h2>
              <h3>{recipe?.card?.info?.ratings?.aggregatedRating?.rating}</h3>
              <p>{recipe?.card?.info?.description}</p>
            </div>
            <div className="recipe-img">
              <img src={RECIPE_IMG_URL + recipe?.card?.info?.imageId} />
            </div>
          </div>
          {index !== menuData.length - 1 && <hr />}
        </div>
      ))}
    </div>
  );
};

export default Menu;
