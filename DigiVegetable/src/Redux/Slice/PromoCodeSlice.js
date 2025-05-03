
// PromoCode.js
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    Code: [],
    Shipping: 0,
};

export const PromoCodeSlice = createSlice({

    name: 'PromoCode',
    initialState,
    reducers: {
        addCode: (state, action) => {
            state.Code.push(action.payload);
        },
        ShippingAmount: (state, action) => {
            state.Shipping = action.payload;
        },
    },
});

export const { addCode, ShippingAmount } = PromoCodeSlice.actions;
export default PromoCodeSlice.reducer;