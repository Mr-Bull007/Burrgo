import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { RECIPE_IMG_URL } from "../utils/constants";

const Menu = () => {
  const [menuData, setMenuData] = useState([]);
  const [resName, setResName] = useState("");
  const params = useParams();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=" +
        params.id
    );
    const jsonData = await response.json();
    // console.log(jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    setMenuData(
      jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card?.card?.itemCards
    );
    setResName(jsonData?.data?.cards[0]?.card?.card?.text);
  };

  if (menuData.length === 0) {
    return <Shimmer/>
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
