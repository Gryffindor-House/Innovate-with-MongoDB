import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import {
  ChakraProvider,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import theme from './config/fonts/font';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ChakraProvider theme={theme} bg={'black'}>
        <App />
      </ChakraProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
