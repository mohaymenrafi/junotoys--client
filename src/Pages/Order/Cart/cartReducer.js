const ACTION = {
  cartLoaded: 'SUCCESS_CART_PRODUCTS',
  removeItem: 'REMOVE_ITEM',
  clearCart: 'CLEAR_CART_PAGE',
  increment: 'INCREMENT',
  decrement: 'DECREMENT',
  getTotal: 'GET_TOTAL',
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case ACTION.cartLoaded:
      return {
        ...state,
        items: action.payload,
      };

    case ACTION.removeItem:
      return {
        ...state,
        items: state.items.filter(
          (currentItem) => currentItem._id !== action.payload
        ),
      };
    case ACTION.clearCart:
      return {
        ...state,
        items: [],
      };
    /* eslint-disable no-case-declarations */
    case ACTION.increment:
      const updatedCartIncrease = state.items.map((currentProduct) => {
        if (currentProduct._id === action.payload) {
          return { ...currentProduct, quantity: currentProduct.quantity + 1 };
        }
        return currentProduct;
      });
      return { ...state, items: updatedCartIncrease };

    case ACTION.decrement:
      const updatedCartDecrease = state.items.map((currentProduct) => {
        if (currentProduct._id === action.payload) {
          return { ...currentProduct, quantity: currentProduct.quantity - 1 };
        }
        return currentProduct;
      });
      return { ...state, items: updatedCartDecrease };

    case ACTION.getTotal:
      const countItems = state.items.reduce(
        (acc, currentVal) => acc + currentVal.quantity,
        0
      );
      const countTotalAmount = state.items.reduce(
        (acc, current) => acc + current.price * current.quantity,
        0
      );
      return { ...state, totalItem: countItems, totalAmount: countTotalAmount };

    default:
      return state;
  }
};

export default cartReducer;
