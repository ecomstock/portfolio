import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import sunbuddyLogo from "./sunbuddy.png";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            {new Date().getFullYear()}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    title: {
        flex: 1,
        fontFamily: "Lato",
        fontWeight: 900,
    },
    nav: {
        fontFamily: "Lato",
        fontWeight: 900,
    },
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        //paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    cardTitle: {
        fontWeight: 700,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

const cards = [
    {
        name : "FLY SORT",
        description : "Robust, sortable data app to help airline loyalty enthusiasts maximize redemptions",
        stack : "React / Material-UI / CSS-in-JS",
        image : "",
        link : "",
        repo : "",
    },
    {
        name : "sunbuddy",
        description : "At-a-glance weather and sun info to optimize outdoor workouts",
        stack : "React / Material-UI / CSS-in-JS",
        image : sunbuddyLogo,
        link : "",
        repo : "",
    },
    {
        name : "FITera",
        description : "Numerous pages during my role as the front-end dev for a fitnesss and nutrition e-com",
        stack : "jQuery / Bootstrap / PHP",
        image : "",
        link : "fitera.com",
        repo : "",
    },
    {
        name : "West Linn Community Chorus",
        description : "Complete overhaul and redeployment of website in November, 2019",
        stack : "jQuery / Bootstrap",
        image : "",
        link : "westlinnchorus.org",
        repo : "",
    },
    {
        name : "retireroo",
        description : "Financial modeling app to project retirement age and account balances over time",
        stack : "React / Material-UI / CSS-in-JS",
        image : "",
        link : "",
        repo : "",
    },
    {
        name : "Tokyo Travel Friend", // Let's Talk Tokyo
        description : "Survey app with detailed, actionable advice for planning a trip to Tokyo (coming soon)",
        stack : "React / Material-UI / CSS-in-JS",
        image : "",
        link : "",
        repo : "",
    },
];

export default function App() {
    const classes = useStyles();

    return (
        <React.Fragment>
        <CssBaseline />
        {/* <AppBar position="relative">
            <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                    what's next, eric?
                </Typography>
            </Toolbar>
        </AppBar> */}
        <main>
            <Container className={classes.cardGrid} maxWidth="md">
            <Toolbar disableGutters={true}>
                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                    WHAT'S NEXT, ERIC?
                </Typography>
                    <Typography component="h2" variant="button" color="inherit" noWrap className={classes.nav}>github</Typography>
                    <Typography component="h2" variant="button" color="inherit" noWrap className={classes.nav}>contact</Typography>
            </Toolbar>
            {/* End hero unit */}
            <Grid container spacing={3}>
                {cards.map(card => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                    <CardMedia
                        className={classes.cardMedia}
                        //image="https://source.unsplash.com/random"
                        image={card.image}
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="subtitle1" component="h3" className={classes.cardTitle}>
                            {card.name}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            {card.description}
                        </Typography>
                        <Typography variant="caption" color="secondary">
                            {card.stack}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Link
                        </Button>
                        <Button size="small" color="primary">
                            Repo
                        </Button>
                    </CardActions>
                    </Card>
                </Grid>
                ))}
            </Grid>
            </Container>
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
            {/* <Typography variant="h6" align="center" gutterBottom>
            Footer
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Something here to give the footer a purpose!
            </Typography> */}
            <Copyright />
        </footer>
        {/* End footer */}
        </React.Fragment>
    );
}