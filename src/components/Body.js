import RestaurantCard from "./RestaurantCard";
import { useContext, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import UserContext from "../utils/UserContext";


const Body = () => {
  const [searchValue, setSearchValue] = useState("");
  const { originalData, listOfRestaurants, setListOfRestaurants } = useRestaurantList();

  const {myName, setMyName} = useContext(UserContext);

  return !listOfRestaurants || listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="m-4">
      <div className="flex mb-4">
        <div className="flex mx-2">
          <div>
            <input
              type="text"
              className="border-solid border-black h-6 bg-slate-300 rounded-lg mx-2 px-2"
              placeholder="Search for Restaurants"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
          </div>
          <div className="border-r-2 border-gray-700 pr-1">
            <button
            className="hover:font-extralight"
              onClick={() => {
                const newList = originalData.filter((res) =>
                  res.info.name
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
                );
                setListOfRestaurants(newList);
                setSearchValue("");
              }}
            >
              Search
            </button>
          </div>
        </div>
        <div className="mx-5 border-r-2 border-gray-700 pr-1">
          <button
            className="hover:font-extralight"
            onClick={() => {
              setListOfRestaurants(originalData);
            }}
          >
            All the Restaurants
          </button>
        </div>
        <div className="mx-5 border-r-2 border-gray-700 pr-1">
          <button
            className="hover:font-extralight"
            onClick={() => {
              const newList = originalData.filter(
                (res) => res.info.avgRating > 4.4
              );
              setListOfRestaurants(newList);
            }}
          >
            Top Restaurants!
          </button>
        </div>
        <input className="border border-black px-2" onChange={(e) => setMyName(e.target.value)} value={myName}/>
      </div>
      <div className="res-container flex flex-wrap">
        {listOfRestaurants.map((Restaurant) => (
          <Link
            to={"/restaurant/" + Restaurant.info.id}
            key={Restaurant.info.id}
          >
            <RestaurantCard resData={Restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
