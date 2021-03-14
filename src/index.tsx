
import React from 'react';
import Home from './pages/Home';
import { ThemeProvider } from "styled-components/native";
import theme from './styles/theme';
 
 const App = () => {
   return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>  
   );
 };
 
 export default App;
 