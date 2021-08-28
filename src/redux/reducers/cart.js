const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const CLEAR_CART = 'CLEAR_CART';
const ADD_PIZZA_CARD = 'ADD_PIZZA_CARD';
const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
const REMOVE_ONE_ITEM = 'REMOVE_ONE_ITEM';
const ADD_ONE_ITEM = 'ADD_ONE_ITEM'

const getTotalPrice = (arr) => {
  return arr.reduce((sum, acc) => acc.price + sum, 0);
}

const _get = (obj, path) => {
  const [firstKey, ...keys] = path.split('.');
  return keys.reduce((val, key) => {
    return val[key];
  }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path);
    return sum + value;
  }, 0);
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case  ADD_PIZZA_CARD: {
      const currentPizzaItems = !state.items[action.payload.id] ? [action.payload] : [...state.items[action.payload.id].items,
        action.payload]
      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        }
      }
      const totalCount = getTotalSum(newItems, 'items.length')
      const totalPrice = getTotalSum(newItems, 'totalPrice')

      return {
        ...state,
        items: newItems,
        totalCount: totalCount,
        totalPrice: totalPrice,
      };
    }
    case CLEAR_CART: {
      return {
        ...state,
        items: {},
        totalPrice: 0,
        totalCount: 0,
      };
    }
    case REMOVE_CART_ITEM: {
      const newItems = {
        ...state.items
      };
      const currentTotalPrice = newItems[action.payload].totalPrice;
      const currentTotalCount = newItems[action.payload].items.length;
      delete newItems[action.payload]
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };
    }
    case ADD_ONE_ITEM: {
      const newObjItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      const totalCount = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }
    case REMOVE_ONE_ITEM: {
      const oldItems = state.items[action.payload].items
      const newObjectItems = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjectItems,
          totalPrice: getTotalPrice(newObjectItems),
        }
      }
      const totalCount = getTotalSum(newItems, 'items.length')
      const totalPrice = getTotalSum(newItems, 'totalPrice')

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      }
    }
    default:
      return state
  }
};

export { cartReducer };
