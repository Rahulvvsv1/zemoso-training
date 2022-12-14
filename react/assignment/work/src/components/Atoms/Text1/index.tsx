import React from "react";
import logo from "../../../media/icons/i_sym.svg"
import "./index.css"
import {Typography} from "@mui/material"
interface Props{
    text : string;
}

export const Text1:React.FC<Props> = ({text}) => {
    return <Typography variant ="h6" component ="p">{text}<span><img src={logo} alt=""  /></span></Typography>
}

