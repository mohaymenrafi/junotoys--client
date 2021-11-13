// get items
const getItems = () => localStorage.getItem('junoCart');

// update Items
const updateItems = (cart) =>
  localStorage.setItem('junoCart', JSON.stringify(cart));

// add to local
const saveToLocal = (id) => {
  const exists = getItems();
  let shoppingCart = {};
  if (!exists) {
    shoppingCart[id] = 1;
  } else {
    shoppingCart = JSON.parse(exists);
    if (shoppingCart[id]) {
      shoppingCart[id] += 1;
    } else {
      shoppingCart[id] = 1;
    }
  }
  updateItems(shoppingCart);
};

const removeFromCart = (id) => {
  const exists = getItems();
  if (exists) {
    const shoppingCart = JSON.parse(exists);
    delete shoppingCart[id];
    updateItems(shoppingCart);
  }
};

const clearCart = () => {
  localStorage.removeItem('junoCart');
};

const getStoredCart = () => {
  const exists = getItems();
  return exists ? JSON.parse(exists) : {};
};

export { saveToLocal, removeFromCart, clearCart, getStoredCart };
