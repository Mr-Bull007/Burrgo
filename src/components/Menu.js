import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";
import RecipeInfo from "./RecipeInfo";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Menu = () => {
  const params = useParams();
  const { menuData, resName, resMenuCards } = useRestaurantMenu(params.id);
  const [cardIndex, setCardIndex] = useState(null);

  const toggle = (index) => {
    setCardIndex(cardIndex === index ? null : index);
  };

  if (!menuData || menuData.length === 0) {
    return <Shimmer />;
  }

  console.log(cardIndex);
  return (
    <div className="menu text-center mx-10">
      <div className="restaurant-name text-3xl font-bold p-2">
        <h1>{resName}</h1>
      </div>
      {resMenuCards.map((menuCard, index) => (
        <div className="menu-cards" key={index}>
          <div className="mx-96 p-5 shadow-xl mb-2 rounded-3xl gap-3 border-solid border-black border-2  bg-gray-50">
            <div className="flex justify-between font-semibold text-lg hover:cursor-pointer" onClick={() => toggle(index)}>
              <div
                className="card-title"
                
              >
                <h2>{menuCard.card?.card?.title}</h2>
              </div>
              <div className="p-1 m-1">
                {cardIndex === index ? <FaAngleUp /> : <FaAngleDown />}
              </div>
            </div>
            {cardIndex === index && <RecipeInfo props={menuCard} />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
