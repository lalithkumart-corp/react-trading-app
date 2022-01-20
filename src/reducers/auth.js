import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    isAuthenticated: true
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.authToken = action.authToken;
            state.userId = action.userId;
            state.roleId = action.roleId;
        },
        logout: (state, action ) => {
            state.isAuthenticated = false;
            state.authToken = null;
            state.userId = null;
            state.roleId = null;
        }
    }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
