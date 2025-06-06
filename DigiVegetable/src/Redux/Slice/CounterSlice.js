import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  cart: [],
  fruits: [],
};

export const counterSlice = createSlice({
  name: 'cartData',
  initialState,
  reducers: {
    increment: (state, action) => {
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    decrement: (state, action) => {
      const updatedCart = state.cart.filter(item => item.id !== action.payload.id);
      state.cart = updatedCart;
    },
    AddtoCart: (state, action) => {
      const existingProduct = state.cart.find(item => item.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    RemoveCart: (state, action) => {
      const existingProduct = state.cart.find(item => item.id === action.payload.id);
      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1;
        } else {
          state.cart = state.cart.filter(item => item.id !== action.payload.id);
        }
      }
    },



    setFruitsData: (state, action) => {
      state.fruits = action.payload;
    },
  },
});

export const { increment, decrement, AddtoCart, RemoveCart, setFruitsData } = counterSlice.actions;
export default counterSlice.reducer;


















// import { createSlice } from "@reduxjs/toolkit"

// const initialState = {
//   value: 0,
//   cart: [],
// };

// export const counterSlice = createSlice({

//   name: 'cartData',
//   initialState,
//   reducers: {
//     increment: (state, action) => {
//       const NewItem = state.cart.find(item => item.id === action.payload.id);
//       if (NewItem) {
//         NewItem.quantity += 1;
//       } else {
//         state.cart.push({ ...action.payload, quantity: 1 });
//       }
//     },
//     decrement: (state, action) => {
//       const RemoveItem = state.cart.filter(item => item.id !== action.payload.id);

//       state.cart = RemoveItem;
//     },
//     AddtoCart: (state, action) => {
//       const existingProduct = state.cart.find(item => item.id === action.payload.id);
//       if (existingProduct) {
//         existingProduct.quantity += 1;
//       } else {
//         state.cart.push({ id: action.payload.id, quantity: 1 });
//       }
//     },
//     RemoveCart: (state, action) => {
//       const existingProduct = state.cart.find(item => item.id === action.payload.id);
//       if (existingProduct) {
//         if (existingProduct.quantity > 1) {
//           existingProduct.quantity -= 1;
//         } else {
//           state.cart = state.cart.filter(item => item.id !== action.payload.id);
//         }
//       }
//     },
//     // AddtoCart: (state, action) => {
//     //     const NewItem = state.cart.find(item => item.id === action.payload.id)
//     //     if (NewItem) {
//     //         if (NewItem.quantity >= 0) {
//     //             NewItem.quantity += 1;
//     //         }
//     //     }
//     // },
//     // RemoveCart: (state, action) => {
//     //     const NewItem = state.cart.find(item => item.id === action.payload.id)
//     //     if (NewItem) {
//     //         if (NewItem.quantity > 1) {
//     //             NewItem.quantity -= 1;
//     //         } else {
//     //             NewItem.quantity = 0;
//     //         }
//     //     }
//     // },


//   },
// })

// export const { increment, decrement, AddtoCart, RemoveCart, } = counterSlice.actions;
// export default counterSlice.reducer;