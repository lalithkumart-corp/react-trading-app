import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { CurrencyGrid } from './features/currencyGrid/CurrencyGrid';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import GsThemeSelector from './components/themeSelector';
import NavBar from './components/navbar/navbar';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import { useSelector } from 'react-redux';
import { GsLayout } from './components/GsLayout';
import GlobalStyle from './gsGlobalStyles.js';

const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: 'rgb(224, 227, 231)', //whitish
      tabColor: '#fcfcfd', // whitish
      selectedTabBg: '#aba9ff', // for gsTabs
      selectedTabColor: '#3f51b5' // for gsTabs
    },
    secondary: {
      main: '#f50057', //red
    },
    background: {
      default: 'rgb(10, 25, 41)', //violetish
      // paper: '#273052',
    },
    text: {
      primary: 'rgb(224, 227, 231)', //whitish 
    },
    gsPrimary: {
      main: "#a6e7a6", // greenish
    },
    // tableHeader: {
    //   main: "#39d571"
    // }
  },
  typography: {
    button: {
      fontSize: '1rem'
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "#11094c",
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: '#11094c'
        }
      }
    },
    // MuiTableCell: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: 'green'
    //     }
    //   }
    // }
  },
})

const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#202023',
      tabColor: '#202023', // whitish
      selectedTabBg: '#007fff', // for gsTabs
      selectedTabColor: '#ffffff', // for gsTabs
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#c3c4d0',
      // paper: '#727379',
    },
    text: {
      primary: '#000000', // rgba(37,34,34,0.87)
    },
    gsPrimary: {
      main: "#a6e7a6"
    },
    // tableHeader: {
    //   main: "#39d571"
    // }
  },
  typography: {
    button: {
      fontSize: '1rem',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "#007FFF",
          color: "#ffffff"
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: '#ffffff'   
        }
      }
    },
    // MuiTableHead: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: 'green'
    //     }
    //   }
    // }
  },
})

const getThemeByName = (themeName) => {
  if(themeName == 'dark') return darkTheme;
  else return lightTheme;
}

// export const ThemeContext = React.createContext(getThemeByName('darkTheme'));


function App() {
  // let myTheme = useSelector((state) => {
  //     if(state.gsTheme.themeName == "dark")
  //       return darkTheme;
  //     else
  //       return lightTheme;
  //   });
  
  // const [themeName, _setThemeName] = useState(myThemeName);

  let myThemeName = useSelector((state) => state.gsTheme.themeName);
  const theme = getThemeByName(myThemeName);

  // { ThemeProvider }
  return (
    <div className="App">
      
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyle />
          <GsLayout />
        </ThemeProvider>
    </div>
  );
}

export default App;
