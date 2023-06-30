import React from "react";
import Card from "../components/Card";
import axios from "axios";
import AppContext from "../context";
function Orders() {
  const {onAddToFavorite, onAddToCart} = React.useContext(AppContext);
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("https://6452058dbce0b0a0f73a80b8.mockapi.io/orders");
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))
        setIsLoading(false)
      } catch (error) {
        alert("Ошибка при запроосе заказов")
        console.error(error)
      }
    })();
  }, []);

  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1>Мои заказы</h1>
        <div className="d-flex flex-wrap">
          {(isLoading ? [...Array(8)] : orders).map((item, index) => (
            <Card
              key={index}
              loading={isLoading}
              {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Orders;
