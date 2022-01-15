import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import  ReactDOM  from 'react-dom'
import { BrowserRouter as Router} from 'react-router-dom'
import {theme} from './costomizeTheme'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <Router>
      <App />
    </Router>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
