import React from "react";

interface Props{
    name:string
}
export const Image:React.FC<Props> = ({name}) => {
    return (
        <img src={process.env.PUBLIC_URL+"/media/images/"+name} alt="image not found" />
    )
}