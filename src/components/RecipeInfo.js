import { FaStar } from "react-icons/fa";
import { RECIPE_IMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RecipeInfo = ({ props }) => {
  const menuData = props.card?.card?.itemCards;

  const dispatch = useDispatch();
  const handleAddItem = (recipe) => {
    dispatch(addItem(recipe));
  };
  return menuData.map((recipe, index) => (
    <div className="recipe-card p-8" key={recipe?.card?.info?.id}>
      <div className="recipe-info flex justify-between">
        <div className="recipe-details py-2 my-2 pt-8">
          <h3 className="font-semibold">
            {recipe?.card?.info?.name} - Rs.
            {(recipe?.card?.info?.defaultPrice || recipe?.card?.info?.price) /
              100}
          </h3>
          <div className="flex gap-2 justify-center">
            {recipe?.card?.info?.ratings?.aggregatedRating?.rating && (
              <FaStar className="mt-2 my-2" />
            )}
            <h4 className="pt-1">
              {recipe?.card?.info?.ratings?.aggregatedRating?.rating}
            </h4>
          </div>
          <p>{recipe?.card?.info?.description}</p>
        </div>
        <div className="recipe-img p-4">
          <div className="absolute">
            <button
              className="add-button p-2 rounded-lg bg-black text-white shadow-lg"
              onClick={() => {
                handleAddItem(recipe);
              }}
            >
              {" "}
              Add +{" "}
            </button>
          </div>
          <img
            className="rounded-lg size-40 object-cover"
            src={RECIPE_IMG_URL + recipe?.card?.info?.imageId}
          />
        </div>
      </div>
      {index !== menuData.length - 1 && <hr className="bg-black" />}
    </div>
  ));
};

export default RecipeInfo;
