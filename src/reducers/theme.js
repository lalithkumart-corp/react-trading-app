import { createSlice } from '@reduxjs/toolkit';
// import { createTheme } from '@mui/material/styles';

// const darkTheme = createTheme({
//   palette: {
//     type: 'dark',
//     primary: {
//       main: '#3f51b5',
//     },
//     secondary: {
//       main: '#f50057',
//     },
//     background: {
//       default: '#091154',
//       paper: '#273052',
//     },
//     text: {
//       primary: 'rgba(228,216,216,0.87)',
//     },
//     gsPrimary: {
//       main: "#a6e7a6"
//     },
//     tableHeader: {
//       main: "#39d571"
//     }
//   },
//   typography: {
//     button: {
//       fontSize: '1rem',
//     },
//   },
// })

// const lightTheme = createTheme({
//   palette: {
//     type: 'light',
//     primary: {
//       main: '#202023',
//     },
//     secondary: {
//       main: '#f50057',
//     },
//     background: {
//       default: '#c3c4d0',
//       paper: '#727379',
//     },
//     text: {
//       primary: 'rgba(37,34,34,0.87)',
//     },
//     gsPrimary: {
//       main: "#a6e7a6"
//     },
//     tableHeader: {
//       main: "#39d571"
//     }
//   },
//   typography: {
//     button: {
//       fontSize: '1rem',
//     },
//   },
// })


let initialState = {
    themeName: 'dark',
    // theme: lightTheme
}

export const themeSlice = createSlice({
    name: 'gsTheme',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
      updateTheme: (state, action) => {
        state.themeName = state.themeName=='light'?'dark':'light';
        
        // state.theme = state.themeName=='light'?lightTheme:darkTheme;
      },
    }
});

export const { updateTheme } = themeSlice.actions;

export default themeSlice.reducer;
