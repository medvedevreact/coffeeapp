import React from "react";
import { useSelector } from "react-redux";
import { BasketItem } from "../BasketItem/BasketItem";
import "./Basket.css";

export const Basket = () => {
  const basket = useSelector((state) => state.basket.basket);
  const totalSum = useSelector((state) => state.basket.totalSum);
  return (
    <div>
      <h2 className="basket-title">Корзина</h2>
      <div className="basket-items">
        {basket.map((basketItem) => (
          <BasketItem basketItem={basketItem} />
        ))}
      </div>
      <h2 className="basket-title">Итого: {totalSum}</h2>
    </div>
  );
};
