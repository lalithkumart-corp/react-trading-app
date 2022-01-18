import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    themeName: 'light'
}

export const themeSlice = createSlice({
    name: 'themeChanger',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
      updateTheme: (state, action) => {
        state.themeName = state.themeName=='light'?'dark':'light';
      },
    }
});

export const { updateTheme } = themeSlice.actions;

export default themeSlice.reducer;
