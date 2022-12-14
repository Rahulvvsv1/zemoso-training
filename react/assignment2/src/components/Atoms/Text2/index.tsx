import React from "react";
import "./index.css";
import {Typography} from "@mui/material"


interface Props{
    vars:"h1"|"h2"|"body1",
  
    text : string;
}

export const Text2:React.FC<Props> = ({vars,text}) => {
    return <Typography variant={vars}    component="p" >{text}</Typography    >
}