import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  Grid,
  GridList,
  GridListTile,
  Typography,
  Paper,
} from "@material-ui/core";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    flexGrow: 1
  },
  gridList: {
    width: 500,
    height: 450
  },
  pageTile: {
    flexGrow: 1,
  },
  imageItem: {
    width: '100%',
    resizeMode: "contain",
  },
  subheader: {
    width: "100%"
  },
  control: {
    padding: theme.spacing(2),
  },
});


function About(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container>
      <Grid item xs className={classes.pageTile}>
      <Paper >
      <img className={classes.imageItem} src="/images/fullbody_portrait.JPG" alt="Image of Clara in white dress and red stole in front of Hoover tower" />
      </Paper>
      </Grid>
      <Grid item xs className={classes.pageTile}>
      <Typography variant="h3" gutterBottom>
        about me
      </Typography>
      </Grid>
      <Grid item xs className={classes.pageTile}>
      <Paper>
      </Paper>
      </Grid>
      </Grid>
    </div>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
