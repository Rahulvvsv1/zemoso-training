import React from "react";
import { Box, Drawer } from "@mui/material";
import {Toolbar} from "@mui/material"
import { Icon1 } from "../../Atoms/Icons";
import {ListItems} from "../List_items/index"

export const DrawerItem:React.FC = () => {
  
    const drawerWidth = 240;
    return (
      <Box  
          sx={{

            display:"flex",
            flexDirection:"row"

          }}    
      >
          <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              backgroundColor:"#222124"
            },
            
          }}
          variant="permanent"
          anchor="left"
          
        >
          <Toolbar />
          <Box sx={{display:"flex",flexDirection:"Column",justifyContent:"center",alignItems:"center"}}>

          <Icon1 name="icon_name.svg"></Icon1>
          <ListItems array= {['Home', 'Cash Acceleration']} />
          </Box>
         

        </Drawer>
      </Box>
    )
}