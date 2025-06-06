import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userDetails: [],
    loginUser: null,
    api: [],
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        createUser: (state, action) => {
            state.userDetails = action.payload;
            state.loginUser = action.payload;
            console.log('Redux save data :::', state.userDetails);
        },
        clearUser: (state) => {
            state.userDetails = [];
        },
        UserLogIn: (state, action) => {
            state.userId = action.payload?.id;
            state.loginUser = action.payload;
            console.log('Redux login data :::', state.loginUser);
        },
        UserLogOut: (state) => {
            console.log('User logged out successfully.', state.loginUser);
            state.userId = null;
            state.loginUser = null;

        },
        UserApiData: (state, action) => {
            state.api = action.payload;
            console.log('User API Data saved to Redux:', action.payload);
        }
    },
});

export const { createUser, clearUser, UserLogIn, UserLogOut, UserApiData } = authSlice.actions;
export default authSlice.reducer;

