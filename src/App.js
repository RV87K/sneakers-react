function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="headerLeft d-flex align-center">
          <img width={40} height={40} src="/img/logo.svg" />
          <div className="headerInfo">
            <h3>REACT SNEAKERS</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="headerRight d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.svg" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/heart.svg" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1>Все кроссовки</h1>
        
        <div className="card">
          <img/>
          <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
          <div>
            <span>Цена:</span>
            <b>12 999 руб.</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
