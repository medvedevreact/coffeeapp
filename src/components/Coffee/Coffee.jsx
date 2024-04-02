import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCoffee, changeQuantity } from "../../store/basketSlice";

import "./Coffee.css";
import { ModalWindow } from "../ModalWindow/ModalWindow";

export const Coffee = ({ coffee }) => {
  const [coffeeObject, setCoffeeObject] = useState({
    name: coffee.type,
    size: "Маленький",
    syrup: "Без сиропа",
    sugar: false,
  });
  const [modalOpen, setModalOpen] = useState(false);
  console.log(coffeeObject);

  const basket = useSelector((state) => state.basket.basket);
  console.log(basket);

  const dispatch = useDispatch();

  const handleSizeChange = (size) => {
    setCoffeeObject({ ...coffeeObject, size: size.name });
  };

  const handleSyrupChange = (syrup) => {
    setCoffeeObject({ ...coffeeObject, syrup: syrup.name });
  };

  const handleSugarChange = () => {
    setCoffeeObject({ ...coffeeObject, sugar: !coffeeObject.sugar });
  };

  const calculatePrice = () => {
    const selectedSize = coffee.sizes.find(
      (size) => size.name === coffeeObject.size
    );
    const selectedSyrup = coffee.syrups.find(
      (syrup) => syrup.name === coffeeObject.syrup
    );
    return selectedSize.price + selectedSyrup.price;
  };

  const sameItem = basket.find(
    (item) =>
      item.name === coffeeObject.name &&
      item.size === coffeeObject.size &&
      item.syrup === coffeeObject.syrup &&
      item.sugar === coffeeObject.sugar
  );

  const increaseBasket = () => {
    dispatch(changeQuantity(coffeeObject));
  };

  const addToBasket = () => {
    dispatch(
      addCoffee({ ...coffeeObject, price: calculatePrice(), quantity: 1 })
    );
  };

  return (
    <div>
      <div onClick={() => setModalOpen(true)} className="coffee-div">
        <img src={coffee.photo} alt={coffee.type} />
        <h3>{coffee.type}</h3>
      </div>
      <ModalWindow
        isOpen={modalOpen}
        handleClose={() => setModalOpen(false)}
        coffee={coffee}
        handleSizeChange={handleSizeChange}
        handleSugarChange={handleSugarChange}
        handleSyrupChange={handleSyrupChange}
        calculatePrice={calculatePrice}
        sameItem={sameItem}
        addToBasket={addToBasket}
        dispatch={dispatch}
        coffeeObject={coffeeObject}
        setCoffeeObject={setCoffeeObject}
        increaseBasket={increaseBasket}
      />
    </div>
  );
};
