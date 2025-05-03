import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../Slice/CounterSlice'
import addressReducer from '../Slice/AddressSlice'
import PromoCodeReducer from "../Slice/PromoCodeSlice";
import PaymentMethodReducer from "../Slice/PaymentMethodSlice";

export const store = configureStore({
    reducer: {
        cartData: counterReducer,
        addressStore: addressReducer,
        PromoCode: PromoCodeReducer,
        PaymentMethod: PaymentMethodReducer,
    },
})