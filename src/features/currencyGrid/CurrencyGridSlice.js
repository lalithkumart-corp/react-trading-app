import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    trades: []
}

export const CurrencyGridSlice = createSlice({
    name: 'currencyGrid',
    initialState,
    reducers: {
        newTrades: (state, action) => {
            state.trades = action.payload;
        }
    }
});

export const {newTrades} = CurrencyGridSlice.actions;
