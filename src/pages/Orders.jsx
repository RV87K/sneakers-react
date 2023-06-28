import React from "react";
import Card from "../components/Card";
import AppContext from "../context";

function Orders() {

  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1>Мои заказы</h1>
        <div className="d-flex flex-wrap">
          {[].map((item, index) => (
            <Card />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Orders;
