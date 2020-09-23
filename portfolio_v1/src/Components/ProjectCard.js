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

const useStyles = makeStyles({
  root: {
    display: 'flex',
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
});

function ProjectCard() {
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
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
          className={classes.cardImage}
          />
        </Grid>
        <Grid item xs={6} className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              LED Prom Dress
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" align="right">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
            <CardContent>
              <Chip variant="outlined" size="small" label="Basic" />
            </CardContent>
            <CardActions className={classes.cardButtons}>
              <Button size="small">
                More <KeyboardArrowRight />
              </Button>
            </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
}

export default ProjectCard;
