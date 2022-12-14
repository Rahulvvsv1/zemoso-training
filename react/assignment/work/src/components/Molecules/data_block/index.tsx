import React from "react";
import { Text1} from "../../Atoms/Text1/index";
import { Text2 } from "../../Atoms/Text2/Index";
import { Icon1 } from "../../Atoms/Icons";
import "./index.css"
import {Box} from "@mui/material"
// import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
// import {ThemeProvider} from "@mui/material"
// import {theme} from "../theme"
interface DataBlockProps{
    number:string,
    text1:string,
    text2:string
    
}

export const Block:React.FC<DataBlockProps> = ({number,text1,text2}) => {
    return (
        // <ThemeProvider theme={theme}>
        <Box 
            sx={{
                display:"flex",
                flexDirection:"column",
                width: "204px",
                height: "168px",
                alignItems:"flex-start",
                justifyContent:"space-between"
            }}
            bgcolor="#201F24" 
            padding="20px"

        >
            <Icon1 number={number}></Icon1>
            <Text1 text={text1}></Text1>
            <Text2 text={text2}></Text2>
        </Box>
            /* </ThemeProvider> */
    )
}








