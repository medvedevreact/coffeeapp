import React from "react";
import { coffeeDB } from "../../data";
import { Coffees } from "../../components/Coffees/Coffees";
import { Basket } from "../../components/Basket/Basket";

export const HomePage = () => {
  return (
    <div>
      <Coffees coffeeDB={coffeeDB} />
      <Basket />
    </div>
  );
};
