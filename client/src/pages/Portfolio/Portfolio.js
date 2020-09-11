import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import axios from 'axios'
import { CardHeader } from "@material-ui/core";
import './Portfolio.css'


const useStyles = makeStyles((theme) => ({
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
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
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
    title: "eSPACE",
    source: "https://i.imgur.com/f0dpZJG.png",
    url: "https://hayleyrob.github.io/eSPACE/",
    description:
      "An e-learning app for Space Exploration built with Space-X and SpaceNews API's",
    gitrepo: "https://github.com/hayleyrob/eSPACE",
    cardId: 1,
  },
  {
    title: "Reactfolio",
    source: "https://i.imgur.com/vXKkxk8.png",
    url: "http://pacific-forest-54922.herokuapp.com",
    description:
      "A CMS for React.js that enables users to customize React components",
    gitrepo: "https://github.com/JonahHouse/React-folio",
    cardId: 2,
  },
  {
    title: "Fitness-Tracker",
    source: "https://i.imgur.com/MrgEP18.png",
    url: "https://guarded-tor-39894.herokuapp.com/",
    description:
      "Keep track of your workouts and fitness with this MongoDB, Express and Node.js app",
    gitrepo: "https://github.com/hayleyrob/WorkoutTracker",
    cardId: 3,
  }

];


const Portfolio = () => {
  const classes = useStyles()
  

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent} id="portfolioHero">
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="white"
              gutterBottom
            >
              Portfolio
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="white"
              paragraph
            >
              I created the apps below during my time at UCI's Full-Stack Bootcamp. Apps range from being created with Javascript to a MERN application  where I combined my skills in front-end, server-side and database programming. 
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" href="https://www.linkedin.com/in/hayleyerobinson/" target="_blank">
                    LinkedIn 
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary" href="https://github.com/hayleyrob/" target="_blank">
                    Github
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map(card => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={card.source}
                      title={card.title}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.title}
                      </Typography>
                      <Typography>
                        {card.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button variant="contained" color="primary" size="small" href={card.url} target="_blank">
                        View App
                      </Button>
                      <Button variant="outlined" color="primary" size="small" href={card.gitrepo} target="_blank">
                        Git Repo
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>

              ))}
           
            </Grid>
        </Container>
            {/* ))
            } */}
          
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Hayley Robinson's Portfolio
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Built with MongoDB, Express, React and Node.js!
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
export default Portfolio