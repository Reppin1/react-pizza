const ADD_PIZZA_CARD = 'ADD_PIZZA_CARD';
const CLEAR_CART = 'CLEAR_CART';
const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
const REMOVE_ONE_ITEM = 'REMOVE_ONE_ITEM';
const ADD_ONE_ITEM = 'ADD_ONE_ITEM'

export const addPizzaToCart = (pizzaObj) => ({
  type: ADD_PIZZA_CARD,
  payload: pizzaObj,
});

export const clearCart = () => ({
  type: CLEAR_CART,
})

export const removeCartItem = (id) => ({
  type: REMOVE_CART_ITEM,
  payload: id
});

export const removeOneItem = (id) => ({
  type: REMOVE_ONE_ITEM,
  payload: id
});

export const addOneItem = (id) => ({
  type: ADD_ONE_ITEM,
  payload: id
});
