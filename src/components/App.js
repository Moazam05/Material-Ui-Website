import React, { Component } from 'react';
import Header from './ui/Header';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './ui/Theme';

class App extends Component {
  render() {
    return (
      <>
        <ThemeProvider theme={theme}>
          <Header />
          Hello
        </ThemeProvider>
      </>
    );
  }
}

export default App;
