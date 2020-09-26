import React, {Component, useState} from 'react';
import logo from '../logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink
} from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Hidden,
  Link
} from "@material-ui/core";
import {
  Menu as MenuIcon
} from "@material-ui/icons";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Work from "../Pages/Work";
import ProjectInfo from "../Pages/ProjectInfo"
import { createBrowserHistory } from "history";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navButton: {
    margin: theme.spacing(2),
  },
  title: {
    textDecoration: 'none',
    color: 'black',
    flexGrow: 1,
    [theme.breakpoints.up('xs')]: {
      textAlign: 'left',
    },
    [theme.breakpoints.down('xs')]: {
      textAlign: 'right',
    }
  },
}));

const history = createBrowserHistory();


function MobileDrawer({open, onClose, onItemClick}) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    menuOpen: false,
  });

  return (
    <Drawer variant='temporary' open={open} onClose={onClose} classes={classes}>
      <List>
          <ListItem
            button
            component={RouterLink}
            to="/"
            onClick={onItemClick("Home")}
          >
            <ListItemText>Explore</ListItemText>
          </ListItem>
          <ListItem
            button
            component={RouterLink}
            to="/work"
            onClick={onItemClick("Work")}
          >
            <ListItemText>Work</ListItemText>
          </ListItem>
          <ListItem
            button
            component={RouterLink}
            to="/about"
            onClick={onItemClick("About")}
          >
            <ListItemText>About</ListItemText>
          </ListItem>
      </List>
    </Drawer>
  );
}

function WebAppBar(){
    const classes = useStyles();
    const [drawer, setDrawer] = useState(false);

    const toggleDrawer = () => {
    setDrawer(!drawer);
    };

    const onItemClick = title => () => {
    console.log(title);
    setDrawer(!drawer);
    };

    return (
      <React.Fragment>
      <Router history={history}>
      <AppBar position="fixed">
        <Toolbar>
          <Hidden smUp>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          </Hidden>
          <Typography variant="h6" color="black" underline="none" className={classes.title} >
            <RouterLink to="/" className={classes.title}>
            Clara Kelley
            </RouterLink>
          </Typography>
          <Hidden xsDown>
          <Button color="inherit" className={classes.navButton} component={RouterLink} to="/">Explore</Button>
          <Button color="inherit" className={classes.navButton} component={RouterLink} to="/work">Work</Button>
          <Button color="inherit" className={classes.navButton} component={RouterLink} to="/about">About</Button>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Toolbar>
      </Toolbar>
      <MobileDrawer
        open={drawer}
        onClose={toggleDrawer}
        onItemClick={onItemClick}
      />
      <main className={classes.content}>
        <Route exact path="/" component={Home} />
        <Route path="/work/:filter" component={Work} />
        <Route exact path="/work" component={Work} />
        <Route path="/about" component={About} />
        <Route path="/project/:index" component={ProjectInfo} />
      </main>
      </Router>
      </React.Fragment>
    );
}

export default WebAppBar;
