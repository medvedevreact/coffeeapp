import React from "react";
import "./BasketItem.css";
import { useDispatch } from "react-redux";
import { changeQuantity, decreaseQuantity } from "../../store/basketSlice";

export const BasketItem = ({ basketItem }) => {
  const totalPrice = basketItem.price * basketItem.quantity;
  const dispatch = useDispatch();
  return (
    <div className="basket-item">
      <h4>{basketItem.name}</h4>
      <div className="basketItem-desc">
        <p>{basketItem.size}, </p>
        <p>{basketItem.syrup}</p>
        <p>{basketItem.sugar ? ", Добавить Сахар" : ""}</p>
      </div>

      <div className="btn-container">
        <button
          onClick={() => {
            dispatch(decreaseQuantity(basketItem));
          }}
        >
          -
        </button>

        <p>{basketItem.quantity}</p>

        <button
          onClick={() => {
            dispatch(changeQuantity(basketItem));
          }}
        >
          +
        </button>
      </div>
      <p>{totalPrice}</p>
    </div>
  );
};
