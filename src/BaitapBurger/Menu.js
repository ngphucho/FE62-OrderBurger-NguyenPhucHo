import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeAmount } from "../redux/actions/burgerAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Button } from "reactstrap";

export default function Menu() {
  const { burger, menu, total } = useSelector((state) => state.burgerReducer);
  const dispatch = useDispatch();
  const tbodyHandle = () => {
    return Object.entries(menu).map(([foodName, price]) => {
      return (
        <tr key={foodName}>
          <td>{foodName}</td>
          <td>
            <Button
              color="link"
              disabled={!burger[foodName]}
              onClick={() => {
                dispatch(changeAmount(foodName, false));
              }}
            >
              <FontAwesomeIcon icon={faMinusCircle} />
            </Button>
            <span
              style={{
                width: "40px",
                textAlign: "center",
                display: "inline-block",
              }}
            >
              {burger[foodName]}
            </span>
            <Button
              color="link"
              onClick={() => {
                dispatch(changeAmount(foodName, true));
              }}
            >
              <FontAwesomeIcon icon={faPlusCircle} />
            </Button>
          </td>
          <td>{price}</td>
          <td>{burger[foodName] * price}</td>
        </tr>
      );
    });
  };
  return (
    <div>
      <h1>Chọn thức ăn</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Thức ăn</th>
            <th>Số lượng</th>
            <th>Giá</th>
            <th>Thành Tiền</th>
          </tr>
        </thead>
        <tbody>{tbodyHandle()}</tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className="text-right font-weight-bold">
              Tổng tiền:
            </td>
            <td>{total} vnđ</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td colSpan="2">
              <Button color="primary">THANH TOÁN</Button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
