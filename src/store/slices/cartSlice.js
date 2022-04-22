import { createSlice } from "@reduxjs/toolkit";

const cartInitState = {
  cartProducts: [{price : 5} , {price : 7} , {price : 9}],
  get cartSum()
  {
      return this.cartProducts.reduce((prev , current)=>
      {
          return prev+= current.price ; 
      },0)
  }
};

export const cartSlice = createSlice({
  name: "cart_slice",
  initialState: cartInitState,
  reducers: {
    add_to_cart: (state, action) => {
      const productObject = action.payload.product;
      const productObjectCounted = {
        count: 1,
        ...productObject,
      };
      state.cartProducts.push(productObjectCounted);
    },
    remove_from_cart: (state, action) => {
      state.cartProducts = state.product.filter(
        (item) => item.id !== action.payload.id
      );
    },
    increase_in_cart: (state, action) => {
      state.cartProducts.filter(
        (item) => item.id === action.payload.id
      )[0].count += 1;
    },
    decrease_in_cart: (state, action) => {
      const productCount = state.cartProducts.filter(
        (item) => item.id === action.payload.id
      )[0].count;
      if (productCount > 1) {
        state.cartProducts.filter(
          (item) => item.id === action.payload.id
        )[0].count -= 1;
      }
      if (productCount === 1) {
        state.cartProducts = state.product.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
  },
});

export const {
  remove_from_cart,
  add_to_cart,
  increase_in_cart,
  decrease_in_cart,
} = cartSlice.actions;
export default cartSlice.reducer;
