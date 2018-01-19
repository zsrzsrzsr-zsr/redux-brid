import React, { Component } from 'react'
import Main from '../components/Main'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import cyan from 'material-ui/colors/cyan';
import red from 'material-ui/colors/red';
import pink from 'material-ui/colors/pink';

const theme = createMuiTheme({
  palette: {
    primary: cyan,
    secondary: pink,
    error: red
  }
})
class App extends Component {
  render () {
    return (
      <MuiThemeProvider theme={theme}>
        <Main />
      </MuiThemeProvider>
    )
  }
}

export default App
