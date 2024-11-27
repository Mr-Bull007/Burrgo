import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
const Body = () => {
    const resList = [
        {
            resName: "Yum Khaana",
            resFood: "Shahi Paneer, Matar Paneer and Paneer Pasanda",
            resRating: 4.2
        },
        {
            resName: "Damdaar Khaana",
            resFood: "Chicken Burger, Red Pizza",
            resRating: 3.8
        }
    ];

    const [listOfRestaurants, setListOfRestaurants] = useState(resList)
    return (
      <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={() => {
                const newList = listOfRestaurants.filter(
                    (res) => res.resRating > 4
                );
                setListOfRestaurants(newList);
            }}>Top Restaurants!</button>
        </div>
        <div className="res-container">
            {listOfRestaurants.map((Restaurant, index) => (<RestaurantCard key={index} resData={Restaurant} />)) }
        </div>
      </div>
    );
  };

export default Body;