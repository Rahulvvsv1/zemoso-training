import React from "react"
import { Box } from "@mui/material"
import Toolbar from '@mui/material/Toolbar';

import {DataBlockFull} from "../data_full_block/index"
import {Image} from "../Congrats_card/index"
interface Props{
        appear:string
}
export const DataCong:React.FC<Props> = ({appear}) => {
    return(
        <Box
      
        component="main"
        sx = {{
        display:"flex",
        flexGrow: 1, 
        bgcolor: '#040407', 
        p: 3,
        height:'1080px',
        alignItems:"flex-start",
        justifyContent:'flex-start'
       }}
        >
        <Toolbar />
        {(appear == "Congrats") ? <DataBlockFull></DataBlockFull>:<Image name="homepage.svg"></Image>}
    

       </Box>
    )
}