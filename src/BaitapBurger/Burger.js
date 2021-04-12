import React from "react";
import { useSelector } from "react-redux";

export default function Burger() {
  const { burger } = useSelector((state) => state.burgerReducer);
  return (
    <div>
      <h4 className="text-center mb-4">Cửa hàng burger Cybersoft</h4>
      <div className="breadTop"></div>
      {Object.entries(burger).map(([foodName, amount]) => {
        let food = [];
        for (let i = 0; i < amount; i++) {
          food.push(<div key={i} className={foodName}></div>);
        }
        return food;
      })}
      <div className="breadBottom"></div>
    </div>
  );
}
