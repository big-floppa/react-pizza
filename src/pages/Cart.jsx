import React from 'react';
import { EmptyCart, FullCart } from '../components';
import { useSelector } from 'react-redux';

function Cart() {
  const { totalCount } = useSelector(({ cart }) => cart);
  console.log();
  return (
    <div className="container container--cart">{totalCount ? <FullCart /> : <EmptyCart />}</div>
  );
}

export default Cart;
