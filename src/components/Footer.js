import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	appBar: {
		top: 'auto',
		bottom: 0,
		width: `100%`,
		marginLeft: drawerWidth,
		backgroundColor: "#36454F",
		color: "#fff"
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
		marginLeft: 10,
	},
	footer: {
		marginLeft: 20,
		fontSize: 17,
		textAlign: 'center'
	},
}));

function Footer() {
	const classes = useStyles();
	return (
		<AppBar position='fixed' className={classes.appBar}>
			<Typography variant='h6' className={classes.footer}>
				© Copyright 2021
			</Typography>
		</AppBar>
	);
}

export default Footer;