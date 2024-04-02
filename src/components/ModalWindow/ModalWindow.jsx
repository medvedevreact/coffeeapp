import React from "react";
import { changeQuantity, decreaseQuantity } from "../../store/basketSlice";
import "./ModalWindow.css";
import { Counters } from "../Counters/Counters";

export const ModalWindow = ({
  isOpen,
  handleClose,
  coffee,
  handleSizeChange,
  handleSugarChange,
  handleSyrupChange,
  calculatePrice,
  sameItem,
  addToBasket,
  dispatch,
  coffeeObject,

  setCoffeeObject,
}) => {
  const closeModalWindow = () => {
    handleClose();

    setCoffeeObject({
      name: coffee.type,
      size: "Маленький",
      syrup: "Без сиропа",
      sugar: false,
    });
  };
  if (!isOpen) return null;
  return (
    <div className="modal">
      <div className="modal-content">
        <span
          className="close"
          onClick={() => {
            closeModalWindow();
          }}
        >
          &times;
        </span>
        <h3>
          {coffee.type} {calculatePrice()}
        </h3>
        <div>
          {coffee.sizes.map((size) => (
            <p
              className={`size ${
                size.name === coffeeObject.size ? "selected" : ""
              }`}
              onClick={() => handleSizeChange(size)}
            >
              {size.name}
            </p>
          ))}
        </div>
        <label className="sugar-label">
          <input
            type="checkbox"
            checked={coffeeObject.sugar}
            onChange={handleSugarChange}
          />
          <p className={coffeeObject.sugar ? "selected" : "sugar"}>
            Добавить сахар
          </p>
        </label>
        <div>
          {coffee.syrups.map((syrup) => (
            <p
              onClick={() => {
                handleSyrupChange(syrup);
              }}
              className={`syrup ${
                syrup.name === coffeeObject.syrup ? "selected" : ""
              }`}
            >
              {syrup.name}
            </p>
          ))}
        </div>
        {sameItem ? (
          <Counters coffeeObject={coffeeObject} sameItem={sameItem} />
        ) : (
          <button className="add-button" onClick={addToBasket}>
            Добавить
          </button>
        )}
      </div>
    </div>
  );
};
