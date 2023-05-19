import React from "react";
import axios from "axios";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";


function App() {

  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://6452058dbce0b0a0f73a80b8.mockapi.io/items').then((res) => {
      return res.json();
    }).then(json => {
      setItems(json)
    })

    axios.get('https://6452058dbce0b0a0f73a80b8.mockapi.io/items').then((res) => {
      setItems(res.data);
    })

    axios.get('https://6452058dbce0b0a0f73a80b8.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
    })
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://6452058dbce0b0a0f73a80b8.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);
  }

  const onChangeSearchInput = (event) => {
    console.log(event.target.value)
    setSearchValue(event.target.value)
  }

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'} </h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            {searchValue && <img 
              onClick={() => setSearchValue('')} 
              className="clear cu-p" 
              src="/img/btn-remove.svg" 
              alt="Close" 
            />}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items
            .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item, index) => (
              <Card
                key={index}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onFavorite={() => console.log('Добавили в закладки')}
                onPlus={(obj) => onAddToCart(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}


export default App;
