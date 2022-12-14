import React from 'react';
import { useState,useContext} from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import Context from "./data"
import {DrawerItem} from "../../molecules/Drawer/index"
import {DataCong} from "../../molecules/Data_and_Congrats/index"
let base:string =  '/Icons/icon_name.svg'
let Block:any






export default function Page() {
  let Block:any;
  let [appear,setAppear] = useState<string>("Congrats")  
  return (
    <Context.Provider value={[appear,setAppear]}>

    <Box sx={{ display: 'flex' ,bgcolor:"black"}}>
      <CssBaseline />
      <DrawerItem />
      <DataCong appear={appear}></DataCong>
    </Box>
    </Context.Provider>
  );
}