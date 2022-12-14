import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import { DataBlockFull } from './components/Molecules/data_full_block';
import {theme} from './components/Molecules/theme'
import {ThemeProvider} from "@mui/material"

function App() {
  return (
    <>
    
    
     <ThemeProvider theme={theme}>
    <DataBlockFull/>
    </ThemeProvider>
    </>
      
    
  );
}

export default App;
