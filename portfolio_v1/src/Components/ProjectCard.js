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
    position: 'relative',
  },
  mainGrid: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'row'
  },
  cardButtons: {
    display: 'flex',
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end"
  },
  cardImage: {
    flexGrow: 1,
    backgroundSize: "cover"
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

function ProjectCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <Grid container className={classes.mainGrid}>
        <Grid item xs={6}>
          <CardMedia
          component="img"
          alt="Contemplative Reptile"
          width="100%"
          height="100%"
          image={props.tile.img}
          title="Contemplative Reptile"
          className={classes.cardImage}
          />
          <Typography variant="caption" className={classes.overlay}>
            {props.tile.credit ? props.tile.credit : ""}
          </Typography>
        </Grid>
        <Grid item xs={6} className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {props.tile.title}
            </Typography>
            <Typography variant="h6" color="textSecondary" component="p" align="right">
              {props.tile.date}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" align="right">
              {props.tile.description}
            </Typography>
            <CardContent>
              {props.tile.attributes.map(title => (
              <Chip
                variant="outlined"
                size="small"
                key={title}
                label={title}
                className={classes.chipStyle}
                onClick={() => props.chipCallback(title)}/>
              ))}
            </CardContent>
            <CardActions className={classes.cardButtons}>
              <Button size="small" component={RouterLink} to={"/project/"+ props.tile.index}>
                More {props.tile.index} <KeyboardArrowRight />
              </Button>
            </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
}

export default ProjectCard;
