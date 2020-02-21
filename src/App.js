import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            {new Date().getFullYear()}
        </Typography>
    );
}

const cardData = [
    {
        name : "POINTS OFFICE",
        description : "Robust, sortable data app to help travel points enthusiasts maximize redemptions",
        stack : "React / Material-UI / CSS-in-JS",
        image : "",
        link : "",
        repo : "",
    },
    {
        name : "SUNBUDDY",
        description : "At-a-glance weather and sun info to optimize outdoor workouts",
        stack : "React / Material-UI / CSS-in-JS",
        image : "",
        link : "",
        repo : "",
    },
    {
        name : "FITERA",
        description : "Numerous pages during my role as the front-end dev for a fitnesss and nutrition e-com",
        stack : "jQuery / Bootstrap / Sass / PHP",
        image : "",
        link : "http://fitera.com",
        repo : "",
    },
    {
        name : "WEST LINN COMMUNITY CHORUS",
        description : "Complete overhaul and site redeployment",
        stack : "jQuery / Bootstrap",
        image : "",
        link : "http://westlinnchorus.org",
        repo : "",
    },
    {
        name : "RETIREROO",
        description : "Financial modeling app to project retirement age and account balances over time",
        stack : "React / Material-UI / CSS-in-JS",
        image : "",
        link : "",
        repo : "",
    },
    {
        name : "SPECIAL WARDS", // Let's Talk Tokyo, Tokyo Travel Friend, Go Go Tokyo, Special Wards, Tokubetsuku
        description : "Survey app with detailed, actionable advice for planning a trip to Tokyo (coming soon)",
        stack : "React / Material-UI / CSS-in-JS",
        image : "",
        link : "",
        repo : "",
    },
];

const muiTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#1a73e8"
        },
        secondary: {
            main: "#1e8e3e"
        },
        // background: {
        //     default: "#ffffff"
        // },
        text: {
            primary: "#3c4043",
            secondary: "#5f6368"
        } 
    },
});

const theme = {
    ...muiTheme
}

const useStyles = makeStyles(theme => ({
    // root: {
    //     marginTop: theme.spacing(3)
    // },
    wes: {
        fontFamily: "Lato",
        fontWeight: 900,
    },
    header: {
        margin: theme.spacing(3, 0, 3, 0),
    },
    title: {
        flex: 1,
    },
    nav: {
        '&:hover,focus': {
            color: 'black',
        },
        cursor: 'pointer',
        margin: theme.spacing(0, 0, 0, 2),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        padding: theme.spacing(6),
    },
}));

export default function App() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="md" className={classes.root}>
                <Toolbar disableGutters={true} className={classes.header}>
                    <Typography
                        className={`${classes.wes} ${classes.title}`}
                        component="h1"
                        variant="h6"
                        color="inherit"
                        //noWrap
                    >
                        WHAT'S NEXT, ERIC?
                    </Typography>
                    <Typography
                        component="h2"
                        variant="button"
                        //noWrap
                        className={`${classes.wes} ${classes.header} ${classes.nav}`}
                        // onClick={() => handleNavClick('about')} 
                    >
                        <Link href="https://github.com/ecomstock" target="_blank" color="inherit" underline="none">
                            GITHUB
                        </Link>
                    </Typography>
                    <Typography
                        component="h2"
                        variant="button"
                        //noWrap
                        className={`${classes.wes} ${classes.header} ${classes.nav}`}
                        // onClick={() => handleNavClick('contact')} 
                    >
                        <Link href="mailto:ecomstock@gmail.com" target="_blank" color="inherit" underline="none">
                            CONTACT
                        </Link>
                    </Typography>
                </Toolbar>
                <main>
                    <Grid container spacing={3}>
                        {cardData.map(card => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card className={classes.card} elevation={4}>
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="subtitle1" component="h3" className={classes.wes}>
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
                                        <Link href={card.link} target="_blank">
                                            Site
                                        </Link>
                                    </Button>
                                    <Button size="small" color="primary">
                                        <Link href={card.repo} target="_blank">
                                            Repo
                                        </Link>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        ))}
                    </Grid>
                </main>
                <footer className={classes.footer}>
                    <Copyright />
                </footer>
            </Container>
        </ThemeProvider>
    );
}