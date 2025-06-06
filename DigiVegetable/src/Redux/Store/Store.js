import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../Slice/AuthSlice';
import counterReducer from '../Slice/CounterSlice'
import addressReducer from '../Slice/AddressSlice'
import PromoCodeReducer from "../Slice/PromoCodeSlice";
import PaymentMethodReducer from "../Slice/PaymentMethodSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        cartData: counterReducer,
        addressStore: addressReducer,
        PromoCode: PromoCodeReducer,
        PaymentMethod: PaymentMethodReducer,
    },
})