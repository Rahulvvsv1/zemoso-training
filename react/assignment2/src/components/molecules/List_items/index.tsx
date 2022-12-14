import React from "react";
import { useContext } from "react";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import {Text1} from "../../Atoms/Text1/index"
import {Icon1} from "../../Atoms/Icons/index"
import context from "../../organisms/Page/data"



interface Props  {
    array:string[]
}




export const ListItems:React.FC<Props> = ({array}) => {
  let [appear,setAppear] = useContext(context)
  let changer = (e:any,text:string):void => {
          if(text ==  "Home"){
            setAppear("appea");
            console.log(text,"heere")
          }
          else {
            setAppear("Congrats")
          console.log(text,"heere")
        }
  }
    return(
        <List>
        {array.map((text, index) => (
          <ListItem key={text} >
            <ListItemButton>
              <ListItemIcon sx={{padding:"5px",margin:"0px"}}>
                {index % 2 === 0 ? <Icon1 name= "home.svg" /> : <Icon1 name="coin.svg" />}
              </ListItemIcon>
                <Text1 vars="body1" text={text} funct={changer} />  
              
              
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    )
}

// 