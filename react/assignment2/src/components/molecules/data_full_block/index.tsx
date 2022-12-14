import React from "react";
import { Block } from "../data_block";
import { ThemeProvider} from "@mui/material";
// import "./index.css"
import { Box } from "@mui/system";
import {theme} from "../theme"





export const DataBlockFull:React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box 
            sx={{
            borderRadius : "16px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            bgcolor:"primary.main", 
            width:' 700px',
            height: '259px',
            padding:"25px",
            // background:{them}
        
        
        }}
            
            >
                <Block name= "cal.svg" text1="term cap" text2="12 months"></Block>
                <Block name="down.svg" text1="Available Credit" text2="$880.0K"></Block>
                <Block name="div.svg" text1="Max Intrest Rate" text2="12.00%"></Block>
            </Box>
           </ThemeProvider>
    )
}





