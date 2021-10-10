import React, {useState} from "react";
import {AppBar, Toolbar, IconButton,Typography, Button} from "@material-ui/core";
import { AccountCircle, Menu } from '@material-ui/icons';

function Header(props) {

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Home
                    </Typography>
                    <Button color="inherit">Login</Button>
                    <Button color="inherit">Register</Button>
                    <IconButton 
                        onClick={props.handleAccount} 
                        color="inherit" 
                        aria-label="account"
                    >
                    <AccountCircle  />
                    </IconButton>
                    <IconButton
                        size="medium"
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={props.handleDrawer}
                    >
                    <Menu />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header;