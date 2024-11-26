import RestaurantCard from "./RestaurantCard";
const Body = () => {
    return (
      <div className="body">
        <div className="search">search</div>
        <div className="res-container">
          <RestaurantCard resName="Mamta" resFood="pizza" resRating="3" />
          <RestaurantCard resName="Ramta" resFood="biryani" resRating="4.2"/>
        </div>
      </div>
    );
  };

export default Body;