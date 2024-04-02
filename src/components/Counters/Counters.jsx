import React from "react";
import { useDispatch } from "react-redux";
import { changeQuantity, decreaseQuantity } from "../../store/basketSlice";

export const Counters = ({ coffeeObject, sameItem }) => {
  const dispatch = useDispatch();
  return (
    <div className="button-container">
      <button
        onClick={() => {
          dispatch(decreaseQuantity(coffeeObject));
        }}
      >
        -
      </button>
      <p>{sameItem.quantity}</p>

      <button
        onClick={() => {
          dispatch(changeQuantity(coffeeObject));
        }}
      >
        +
      </button>
    </div>
  );
};
