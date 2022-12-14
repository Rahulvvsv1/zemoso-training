import React from "react";
import "./index.css";
import {Typography} from "@mui/material"


interface Props{
    text : string;
}

export const Text2:React.FC<Props> = ({text}) => {
    return <Typography variant="h6" component="p" fontSize="15px" >{text}</Typography    >
}