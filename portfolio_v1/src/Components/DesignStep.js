import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Chip
} from '@material-ui/core'
import {
  KeyboardArrowRight
} from '@material-ui/icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin: '5em'
  },
  mainGrid: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'row'
  },
  gridItemMedia: {
    position: 'relative',
  },
  cardButtons: {
    display: 'flex',
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end"
  },
  cardImage: {
    flexGrow: 1,
    backgroundSize: "cover",
  },
  cardContent: {
    display: 'flex',
    flexDirection: "column",
    flexGrow: 1,
    justifyContent: "space-between",
    alignItems: "flex-end",
    padding: "1rem",
  },
  chipStyle:{
    margin: "0.25rem",
  },
  overlay:{
    position: 'absolute',
    bottom: '10px',
    left: '10px',
    color: 'black',
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
  }

}));

function DesignStep(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <Grid container className={classes.mainGrid}>

        <Grid item xs={12} sm={6} className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {props.uxtile.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" align="right">
              {props.uxtile.summary}
            </Typography>
            <CardActions className={classes.cardButtons}>
            </CardActions>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.gridItemMedia}>
          <CardMedia
          component="img"
          alt={""}
          width="100%"
          height="100%"
          image={"/images/" + props.imageFolder + "/" + props.uxtile.photo}
          className={classes.cardImage}
          />
        </Grid>
      </Grid>
    </Card>
  );
}

export default DesignStep;
