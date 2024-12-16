import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [menuData, setMenuData] = useState([]);
  const [resName, setResName] = useState("");
  const [resMenuCards, setResMenuCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(MENU_API + resId);

        const jsonData = await response.json();

        // Access data from the response
        const restaurantData = jsonData.data;

        // Find the correct cards path
        const cards = restaurantData.cards;


        // Extract menu items and restaurant name
        const restaurantInfoCard = cards.find(
          (card) =>
            card.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2"
        );

        const menuCard = cards.find(
          (card) => card.groupedCard?.cardGroupMap?.REGULAR
        );

        const allSectionItemCards =
          menuCard.groupedCard?.cardGroupMap?.REGULAR?.cards;

        const onlyMenuItemCards = allSectionItemCards.filter(
          (c) =>
            c.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );

        const name = restaurantInfoCard?.card?.card?.text;
        
        const menuItems =
          menuCard?.groupedCard?.cardGroupMap?.REGULAR?.cards.find(
            (item) => item.card?.card?.itemCards
          )?.card?.card?.itemCards;

        setResName(name || "");
        setMenuData(menuItems || []);
        setResInfo(restaurantData);
        setResMenuCards(onlyMenuItemCards || []);
      } catch (error) {
        console.error("Fetch Error:", error);
      }
    };

    fetchData();
  }, [resId]);

  return { resInfo, menuData, resName, resMenuCards };
};

export default useRestaurantMenu;
