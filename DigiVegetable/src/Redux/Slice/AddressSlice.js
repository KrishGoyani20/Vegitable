
// addressSlice.js
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    DataAddress: [],
    selectedAddress: null,
    place: [],
    address: [],
};

export const addressSlice = createSlice({

    name: 'addressStore',
    initialState,
    reducers: {
        addAddress: (state, action) => {
            state.DataAddress.push(action.payload);
        },
        selectAddress: (state, action) => {
            state.selectedAddress = action.payload;
        },
        setPlace: (state, action) => {
            state.place = action.payload.place;
            state.address = action.payload.address;
        },
    },
});

export const { setPlace, selectAddress, addAddress } = addressSlice.actions;
export default addressSlice.reducer;


