import React from "react";
import logo1  from "../../../media/icons/cal.svg"
import logo2 from "../../../media/icons/div.svg"
import logo3 from "../../../media/icons/down.svg"


interface Props{
    number:string
}

export const Icon1:React.FC<Props> = ({number}) => {

  
    return (
        <img src={process.env.PUBLIC_URL+"/media/icons/"+number} alt="Icon not found"  />
        )

}





