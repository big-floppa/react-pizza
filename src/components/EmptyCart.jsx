import React from 'react';
import { Button } from '../components/';
import { Link } from 'react-router-dom';
import cartEmptyImage from '../assets/empty-cart.png';

function EmptyCart() {
  return (
    <div className="cart cart--empty">
      <h2>
        Корзина пустая <i>😕</i>
      </h2>
      <p>
        Вероятней всего, Вы еще не заказали пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейдите на главную страницу.
      </p>
      <img src={cartEmptyImage} alt="Empty cart" />
      <Link to="/">
        <Button className="button--black">
          <span>Вернуться назад</span>
        </Button>
      </Link>
    </div>
  );
}

export default EmptyCart;
