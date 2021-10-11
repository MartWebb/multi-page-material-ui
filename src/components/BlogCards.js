import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Pagination from '@material-ui/lab/Pagination';


const useStyles = makeStyles((theme) => ({
    hero: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit')`,
		height: "610px",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		position: "relative",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		color: "#fff",
		fontSize: "4rem",
		[theme.breakpoints.down("sm")] : {
			height: 300,
			fontSize:"3em"
		}
    },
    blogsContainer: {
        paddingTop: theme.spacing(3)
	},
	blogTitle: {
		fontWeight: 800,
		paddingBottom: theme.spacing(3)
	},
	card: {
		maxWidth: "100%",
		minHeight:"500px"
	},
	media: {
		height: 240
	},
	cardActions: {
		display: "flex",
		margin: "0 10px",
		justifyContent: "space-between"
	},
		author: {
		display: "flex"
	},
	paginationContainer: {
		display: "flex",
		justifyContent: "center"
	}
}));

function BlogCards() {
	const classes = useStyles();
	return (
		<div>
			<Box  className={classes.hero}>
				<Box>Blog</Box>
			</Box>

			<Container maxWidth="lg" className={classes.blogsContainer}>
				<Typography variant="h4" className={classes.blogTitle}>
					Articles
				</Typography>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6} md={4}>
						<Card className={classes.card}>
							<CardActionArea>
								<CardMedia
								className={classes.media}
								image="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
								title=""
								/>
								<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									React useContext
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
								Context provides a way to pass data through the component tree without having to pass props down manually at every level.
								</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions className={classes.cardActions}>
								<Box className={classes.author}>
									<Avatar src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit" />
									<Box ml={2}>
										<Typography variant="subtitle2" component="p">
											Caroline Carlto
										</Typography>
										<Typography variant="subtitle2" color="textSecondary" component="p">
											March 01, 2019
										</Typography>
									</Box>
								</Box>
								<Box>
									<BookmarkBorderIcon />
								</Box>
								</CardActions>
						</Card>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Card className={classes.card}>
							<CardActionArea>
								<CardMedia
									className={classes.media}
									image="https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
									title=""
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										React Router Dom
									</Typography>
									<Typography variant="body2" color="textSecondary" component="p">
										React Router DOM enables you to implement dynamic routing in a web app.
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions className={classes.cardActions}>
								<Box className={classes.author}>
									<Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80" />
									<Box ml={2}>
										<Typography variant="subtitle2" component="p">
											Stacey Stout
										</Typography>
										<Typography variant="subtitle2" color="textSecondary" component="p">
											December 12, 2020
										</Typography>
									</Box>
								</Box>
								<Box>
									<BookmarkBorderIcon />
								</Box>
							</CardActions>
						</Card>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Card className={classes.card}>
							<CardActionArea>
								<CardMedia
									className={classes.media}
									image="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
									title=""
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										React useEffect
									</Typography>
									<Typography variant="body2" color="textSecondary" component="p">
										By using this Hook, you tell React that your component needs to do something after render.
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions className={classes.cardActions}>
								<Box className={classes.author}>
									<Avatar src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
									<Box ml={2}>
										<Typography variant="subtitle2" component="p">
											Amy Andy
										</Typography>
										<Typography variant="subtitle2" color="textSecondary" component="p">
											January 14, 2018
										</Typography>
									</Box>
								</Box>
								<Box>
									<BookmarkBorderIcon />
								</Box>
							</CardActions>
						</Card>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Card className={classes.card}>
							<CardActionArea>
								<CardMedia
									className={classes.media}
									image="https://images.pexels.com/photos/325111/pexels-photo-325111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
									title=""
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										React useState
									</Typography>
									<Typography variant="body2" color="textSecondary" component="p">
										useState is a Hook that allows you to have state variables in functional components. 
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions className={classes.cardActions}>
								<Box className={classes.author}>
									<Avatar src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit" />
									<Box ml={2}>
										<Typography variant="subtitle2" component="p">
											Ray Lemont
										</Typography>
										<Typography variant="subtitle2" color="textSecondary" component="p">
											June 11, 2021
										</Typography>
									</Box>
								</Box>
								<Box>
									<BookmarkBorderIcon />
								</Box>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
				<Box my={4} className={classes.paginationContainer}>
					<Pagination count={10} />
				</Box>
			</Container>
		</div>
	);
}

export default BlogCards;