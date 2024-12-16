import { useEffect, useState } from "react";
import { RES_API } from "./constants";

const useRestaurantList = () => {
  const [originalData, setOriginalData] = useState([]);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(RES_API);
        const jsonData = await response.json();

        const data = jsonData.data;
        const cards = data.cards;

        const resInfoCard = cards[4];
        const resListCard =
          resInfoCard.card?.card?.gridElements?.infoWithStyle?.restaurants;

        setOriginalData(resListCard || []);
        setListOfRestaurants(resListCard || []);
      } catch (error) {
        <h2>Fetch error: {error}</h2>
        console.log("Fetch error:", error);
      }
    };
    fetchData();
  }, []);

  return { originalData, listOfRestaurants, setListOfRestaurants };
};

export default useRestaurantList;

