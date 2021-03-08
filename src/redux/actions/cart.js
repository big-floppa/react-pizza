export const addPizzaToCart = (pizza) => ({
  type: 'ADD_PIZZA_CART',
  payload: pizza,
});

export const clearCart = (id) => ({
  type: 'CLEAR_CART',
  payload: id,
});

export const plusPizza = (id) => ({
  type: 'PLUS_CART_ITEM',
  payload: id,
});

export const minusPizza = (id) => ({
  type: 'MINUS_CART_ITEM',
  payload: id,
});

export const removePizzaFromCart = (pizza) => ({
  type: 'REMOVE_CART_ITEM',
  payload: pizza,
});
