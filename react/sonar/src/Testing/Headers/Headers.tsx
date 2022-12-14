import React from "react";
interface Props{
    title:string
}
export const Header:React.FC<Props> = ({title}) => {
    return(
        <>
        <h1>{title}</h1>
        <h1>Hey there how are you doing</h1>
        <h1 title="Header">Hey there</h1>
        <h1  data-testid="test">Data Test id</h1>
        </>
    )
}