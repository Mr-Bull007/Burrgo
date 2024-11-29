import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [originalData, setOriginalData] = useState([]);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await response.json();

    setListOfRestaurants(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setOriginalData(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return listOfRestaurants.length === 0 ? (
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
              const newList = listOfRestaurants.filter(
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
          <RestaurantCard key={Restaurant.info.id} resData={Restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
