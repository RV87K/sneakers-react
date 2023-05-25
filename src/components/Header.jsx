import React from "react";

const Header = (props) => {

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
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="/img/cart.svg" alt="корзина"/>
          <span>1205 руб.</span>
        </li>
        <li className="mr-20 cu-p">
          <img width={18} height={18} src="/img/heart.svg" alt="закладки"/>
        </li>
        <li>
          <img width={18} height={18} src="/img/user.svg" alt="пользователь"/>
        </li>
      </ul>
    </header>
  )
}

export default Header;