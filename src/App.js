import React from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Favorites from "./pages/Favorites";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch("https://6452058dbce0b0a0f73a80b8.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });

    axios
      .get("https://6452058dbce0b0a0f73a80b8.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });

    axios
      .get("https://6452058dbce0b0a0f73a80b8.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });

    axios
      .get("https://6452058dbce0b0a0f77a80b8.mockapi.io/favorites")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    axios.post("https://6452058dbce0b0a0f73a80b8.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onChangeSearchInput = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://6452058dbce0b0a0f73a80b8.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id != id));
  };

  const onAddToFavorite = (obj) => {
    if (favorites.find(favObj => favObj.id === obj.id)){
      axios.delete(`/favorites/${obj.id}`);
      setFavorites((prev) => prev.filter((item) => item.id != obj.id));
    } else {
      axios.post(`https://6452058dbce0b0a0f73a80b8.mockapi.io/favorites`, obj);
      setFavorites((prev) => [...prev, obj]);
    }
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route path="/" element={
          <Home
            items={items}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeSearchInput={onChangeSearchInput}
            onAddToFavorite={onAddToFavorite}
            onAddToCart={onAddToCart}
          />}
        />
        <Route path="/favorites" element={
          <Favorites items={favorites} />
        }/>
      </Routes>


    </div>
  );
}

export default App;
