// PaymentMethodSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Method: [],
};

export const PaymentMethodSlice = createSlice({
    name: 'PaymentMethod',
    initialState,
    reducers: {
        CheckMethod: (state, action) => {

            const method = action.payload;

            if (!state.Method.includes(method)) {
                state.Method.push(method);
            }
        },
    },
});

export const { CheckMethod } = PaymentMethodSlice.actions;
export default PaymentMethodSlice.reducer;