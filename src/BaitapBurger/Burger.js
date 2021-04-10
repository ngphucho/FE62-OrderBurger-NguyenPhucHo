import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Burger() {
  const burgerState = useSelector((state) => state.burgerReducer);
  console.log(burgerState.burger.salad)
  return (
    <div>
      <div className="breadTop"></div>
      <div>
          {for(let i = 0, i< burgerState.burger.salad, i++){

          }}
        <div className="salad"></div>
        <div className="cheese"></div>
        <div className="beef"></div>
      </div>
      <div className="breadBottom"></div>
    </div>
  );
}
