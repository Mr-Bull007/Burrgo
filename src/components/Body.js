import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RES_API } from "../utils/constants";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  const [searchValue, setSearchValue] = useState("");
  const { originalData, listOfRestaurants } = useRestaurantList();

  return !listOfRestaurants || listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const newList = originalData.filter((res) =>
                res.info.name.toLowerCase().includes(searchValue.toLowerCase())
              );
              setListOfRestaurants(newList);
              setSearchValue("");
            }}
          >
            Search
          </button>
          <button
            className="all-res-btn"
            onClick={() => {
              setListOfRestaurants(originalData);
            }}
          >
            All the Restaurants
          </button>
        </div>
        <div className="top-filter">
          <button
            className="filter-btn"
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
      </div>
      <div className="res-container">
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
