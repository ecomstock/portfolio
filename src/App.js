import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
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

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
            Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
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
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
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
        description : "Responsive interface with at-a-glance info to optimize outdoor workouts",
        stack : "React / Material-UI / CSS-in-JS",
        image : "",
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
        name : "West Linn Community Chorus website",
        description : "Complete overhaul and redeployment of website in November, 2019",
        stack : "jQuery / Bootstrap",
        image : "",
        link : "westlinnchorus.org",
        repo : "",
    },
    {
        name : "retireroo",
        description : "Financial model that calculates projected retirement age in addition to account balances",
        stack : "React / Material-UI / CSS-in-JS",
        image : "",
        link : "",
        repo : "",
    },
    {
        name : "Tokyo Travel Friend", // Let's Talk Tokyo
        description : "Survey app that provides detailed, actionable advice for planning a trip to Tokyo (coming soon)",
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
        <AppBar position="relative">
            <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                    what's next, eric?
                </Typography>
            </Toolbar>
        </AppBar>
        <main>
            <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
                {cards.map(card => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                    <CardMedia
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random"
                        title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {card.name}
                        </Typography>
                        <Typography gutterBottom>
                            {card.description}
                        </Typography>
                        <Typography variant="p" color="secondary">
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
            <Typography variant="h6" align="center" gutterBottom>
            Footer
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Something here to give the footer a purpose!
            </Typography>
            <Copyright />
        </footer>
        {/* End footer */}
        </React.Fragment>
    );
}