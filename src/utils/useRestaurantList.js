import { useEffect, useState } from "react";
import { RES_API } from "./constants";
import resListMock from "../components/mockData/resListMock.json";

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
        console.warn("API fetch failed, falling back to mock data:", error);
        try {
          const data = resListMock.data;
          const cards = data.cards;

          const resInfoCard = cards[4];
          const resListCard =
            resInfoCard.card?.card?.gridElements?.infoWithStyle?.restaurants;

          setOriginalData(resListCard || []);
          setListOfRestaurants(resListCard || []);
        } catch (mockError) {
          console.error("Failed to load mock data:", mockError);
        }
      }
    };

    fetchData();
  }, []);

  return {
    originalData,
    listOfRestaurants,
    setListOfRestaurants,
  };
};

export default useRestaurantList;
