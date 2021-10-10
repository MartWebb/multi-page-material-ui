import React, { useState } from 'react';
import { Drawer as MUIDrawer, ListItem, List, ListItemIcon,ListItemText, AppBar, Toolbar, IconButton,Typography, Button} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { withRouter } from "react-router-dom";
import { AccountCircle, Menu } from '@material-ui/icons';

let navList = '';
const useStyles = makeStyles({
    drawer: {
        width: "190px"
    }
});

function Drawer(props) {
  	const { history } = props;
	const classes = useStyles();

	const itemsList = [
		{
			text: "Home",
			icon: <InboxIcon />,
			onClick: () => history.push("/")
		},
		{
			text: "Blog",
			icon: <MailIcon />,
			onClick: () => history.push("/blog")
		},
		{
			text: "Contact",
			icon: <MailIcon />,
			onClick: () => history.push("/contact")
		}
	  ];

	const bottomItemsList = [
		{
			text: <Button color="inherit">Login</Button>,
			icon: <InboxIcon />,
			onClick: () => history.push("/")
		},
		{
			text: "smell",
			icon: <MailIcon />,
			onClick: () => history.push("/blog")
		},
		{
			text: "Jump",
			icon: <MailIcon />,
			onClick: () => history.push("/contact")
		}
	];
         
	return (
		<React.Fragment>
			<MUIDrawer open={props.open} anchor={props.anchor} onClose={() => props.setOpen(false)} className={classes.drawer}>
				<List>
					{ props.anchor === "left" ? navList = [...itemsList] : navList = [...bottomItemsList],
						navList.map((item, index) => {
						const { text, icon, onClick } = item;
						return (
						<ListItem button key={text} onClick={onClick}>
							{icon && <ListItemIcon>{icon}</ListItemIcon>}
							<ListItemText primary={text} />
						</ListItem>
						);
					})}
				</List>
			</MUIDrawer>
		</React.Fragment>
	);
}

export default withRouter(Drawer);