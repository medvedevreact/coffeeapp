import React from "react";
import { Coffee } from "../Coffee/Coffee";
import "./Coffees.css";

export const Coffees = ({ coffeeDB }) => {
  return (
    <div>
      <h2 className="coffees-title">Выбери свой кофе</h2>
      <div className="coffees">
        {coffeeDB.map((coffee) => (
          <Coffee coffee={coffee} />
        ))}
      </div>
    </div>
  );
};
