import React from "react";


interface Props{
    name:string
}

export const Icon1:React.FC<Props> = ({name}) => {


    return (
    <img  src={process.env.PUBLIC_URL+"/media/Icons/"+name} alt="Icon not found"  />
    )

}





