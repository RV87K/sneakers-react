import React from "react";

const Header = () => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="headerLeft d-flex align-center">
        <img width={40} height={40} src="/img/logo.svg" />
        <div className="headerInfo">
          <h3>REACT SNEAKERS</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
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
  )
}

export default Header;