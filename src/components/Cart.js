import { useDispatch, useSelector } from "react-redux";
import { RECIPE_IMG_URL } from "../utils/constants";
import { FaStar } from "react-icons/fa";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  console.log(cartItems);

  return (
    <div>
      <div className="text-center m-5 p-5">
        <h1 className="text-2xl font-bold">Cart</h1>
        {cartItems.length > 0 && (<button className="bg-black text-white p-2 m-2 rounded-md" onClick={handleClearCart}>Clear Cart</button>)}
      </div>
      {!cartItems || cartItems.length === 0 ? (
        <div className="text-xl font-mono text-center">
          <h1>Your Cart is empty!</h1>
        </div>
      ) : (cartItems.map((recipe, index) => (
          <div className="recipe-card p-8 w-6/12 m-auto" key={index}>
            <div className="recipe-info flex justify-between">
              <div className="recipe-details py-2 my-2 pt-8">
                <h3 className="font-semibold">
                  {recipe?.card?.info?.name} - Rs.{" "}
                  {(recipe?.card?.info?.defaultPrice ||
                    recipe?.card?.info?.price) / 100}
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
                <img
                  className="rounded-lg size-40 object-cover"
                  src={RECIPE_IMG_URL + recipe?.card?.info?.imageId}
                />
              </div>
            </div>
            <hr className="bg-black" />
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
