import React from 'react';
import logo from './logo.svg';

import './App.css';
import WebAppBar from "./Components/WebAppBar.js";
import {
  MuiThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles';
import {grey, green} from '@material-ui/core/colors';


const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#ffffff',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    }
  },
  status: {
    danger: 'orange',
  },
  shadows: ["none", "none", "none", "none", "none"],
  typography: {
    fontFamily: [
      '"Montserrat"',
      '"Roboto"',
      '"Lato"',
      'Helvetica Neue',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    button: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
      letterSpacing: "0.02857em",
    },
    body2: {
      margin: "1rem"
    }

  },
  shape: {
    borderRadius: 0
  }
});

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
      <MuiThemeProvider theme={theme}>
      <WebAppBar />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
