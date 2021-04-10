import React from "react";
import Burger from "./Burger";
import Menu from "./Menu";

export default function BaitapBurger() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Burger />
        </div>
        <div className="col-md-6">
          <Menu />
        </div>
      </div>
    </div>
  );
}
