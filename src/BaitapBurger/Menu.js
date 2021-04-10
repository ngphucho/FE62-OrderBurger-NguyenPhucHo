import React from "react";

export default function Menu() {
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
        <tbody>
          <tr>
            <td>Salad</td>
            <td>
              <div className="btn btn-success">-</div>
              <div className="btn btn-danger">+</div>
            </td>
            <td>10</td>
            <td></td>
          </tr>
          <tr>
            <td>Cheese</td>
            <td>
              <div className="btn btn-success">-</div>
              <div className="btn btn-danger">+</div>
            </td>
            <td>10</td>
            <td></td>
          </tr>
          <tr>
            <td>Beef</td>
            <td>
              <div className="btn btn-success">-</div>
              <div className="btn btn-danger">+</div>
            </td>
            <td>10</td>
            <td></td>
          </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colSpan="3" className="text-right font-weight-bold">Tổng tiền: </td>
                <td>vnđ</td>
            </tr>
        </tfoot>
      </table>
    </div>
  );
}
