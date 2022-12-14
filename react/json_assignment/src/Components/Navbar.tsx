import React from 'react';
import { AppBar, makeStyles, Toolbar,Link } from '@mui/material';
import { NavLink } from 'react-router-dom';



const Navbar = () => {
    
    return (
        <AppBar  position="static">
            <Toolbar >
               <Link> <NavLink to="/"  > React JS Crud</NavLink></Link>
               <Link>  <NavLink to="all" > All Users</NavLink></Link>
               <Link>  <NavLink to="add" > Add Users</NavLink></Link>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;