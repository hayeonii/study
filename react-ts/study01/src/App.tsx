import React, { useState } from "react";
import "./App.css";
import Store from "./Store";
import { Address, Restaurant } from "./model/restaurant";
import BestMenu from "./BestMenu";

let data: Restaurant = {
  name: "연이네 식당",
  category: "western",
  address: {
    city: "seoul",
    detail: "somewhere",
    zipCode: 1234567,
  },
  menu: [
    {
      name: "rose pasta",
      price: 2000,
      category: "PASTA",
    },
    {
      name: "garlic steak",
      price: 3000,
      category: "STEAK",
    },
  ],
};

const App: React.FC = () => {
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data);

  const changeAddress = (address: Address) => {
    setMyRestaurant({ ...myRestaurant, address: address });
  };

  const showBestMenuName = (name: string) => {
    return name;
  };

  return (
    <div className="App">
      <Store info={myRestaurant} changeAddress={changeAddress} />;
      <BestMenu
        name="불고기피자"
        category="피자"
        price={1000}
        showBestMenuName={showBestMenuName}
      />
    </div>
  );
};

export default App;
