import React from "react";
import { Link } from 'react-router-dom';
import cartEmptyPng from "../assets/img/empty-cart.png";

const CartEmpty = () => {
  return (
    <div class="cart cart--empty">
      <h2>
        Корзина пустая <span>😕</span>
      </h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу.<br></br>Для того, чтобы
        заказать пиццу, перейди на главную страницу.
      </p>
      <img src={cartEmptyPng} alt="Empty cart" />
      <Link to="/" class="button button--black">
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
};

export default CartEmpty;
