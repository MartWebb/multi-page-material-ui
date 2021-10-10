import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Header from './components/Header';
import Drawer from './components/Drawer';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	container: {
		display: "flex"
	}
});



function App() {
	const classes = useStyles();
  	const [open, setOpen] = useState(false)
	const [anchor, setAnchor] = useState('left')
    const handleAccount = () => {
        setOpen(true);
        setAnchor('bottom');
    }

	const handleDrawer = () => {
	setOpen(true);
	setAnchor('left');
	}
	return (
		<div className={classes.container}>
			<Header handleDrawer={handleDrawer} open={open} handleAccount={handleAccount} anchor={anchor}/>
			<Drawer handleDrawer={handleDrawer} open={open} setOpen={setOpen} handleAccount={handleAccount} anchor={anchor}/>
			<Switch>    
				<Route exact path="/" render={props => <Home {...props}/>} />
				<Route path="/blog" render={props => <Blog {...props}/>} />
				<Route path="/contact" render={props => <Contact {...props}/>} />
			</Switch>
		</div>
	);
}

export default App;
