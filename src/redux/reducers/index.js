import { filterReducer } from "./filter";
import { combineReducers } from "redux";
import { pizzasReducer } from "./pizzas";
import { cartReducer } from "./cart";


const RootReducer = combineReducers({
  filter: filterReducer,
  pizzas: pizzasReducer,
  cart: cartReducer,
});

export { RootReducer }