import React, { Component } from "react";

import "./index.css"
import {Typography} from "@mui/material"
interface Props{
    vars:"h1"|"h2"|"body1",
    
    text : any;
    funct : ( e:React.MouseEvent<HTMLSpanElement, MouseEvent>,text:string) =>  void|null;
}

export const Text1:React.FC<Props> = ({vars,text,funct}) => {
    return <Typography variant={vars} sx={{fontFamily:"Gilroy"}} onClick={(e)=>{funct(e,text)}}>{text}</Typography>
}

