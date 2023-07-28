const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, amount, product } = action.payload;

    let existingProduct = state.cart.find((curItem) => curItem.id == id);

    if (existingProduct) {
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id === id) {
          let newAmount = curElem.amount + amount;
          return {
            ...curElem,
            amount: newAmount,
          };
        } else {
          return curElem;
        }
      });
      return { ...state, cart: updatedProduct };
    } else {
      letCartProduct = {
        id: id,
        name: product.name,
        amount,
        image: product.image,
        price: product.price,
      };
    }
  }

  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id == action.payload) {
        let decAmount = curElem.amount - 1;
        if (devAmound <= 1) {
          decAmount = 1;
        }
        return {
          ...curElem,
          amount: decAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type == "SET_INCREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id == action.payload) {
        let incAmount = curElem.amount + 1;
        return {
          ...curElem,
          amount: incAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type == "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type == "CART_ITEM_PRICE_TOTAL") {
    let { total_item, total_price } = state.cart.reduce(
      (accum, curElem) => {
        let { price, amount } = curElem;
        accum.total_item += amount;
        accum.total_price += price * amount;
        return accum;
      },
      {
        total_item: 0,
        total_price: 0,
      }
    );
    return {
      ...state,
      total_item,
      total_price,
    };
  }

  return state;
};

export default cartReducer;
