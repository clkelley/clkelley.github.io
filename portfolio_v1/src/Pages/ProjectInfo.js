import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  Grid,
  GridList,
  GridListTile,
  Typography,
} from "@material-ui/core";

import tileData from "../Components/WorkConstants.js"

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450
  },
  subheader: {
    width: "100%"
  }
});

function ProjectInfo(props) {
  const { classes } = props;
  console.log(tileData);

  const thisTile = tileData.find(tile => tile.index == props.match.params.index);

  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom>
        {thisTile.title}
      </Typography>
      <Grid container>
        <Grid sm={12} md={6} item>
        <GridList>
          <GridListTile key={thisTile.index}>
          <img src={thisTile.img} alt={"test"} />
          </GridListTile>
        </GridList>
        </Grid>
        <Grid sm={12} md={6} item>
          <Typography variant="body2">
            {thisTile.description}
          </Typography>

        </Grid>
      </Grid>
    </div>
  );
}

ProjectInfo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProjectInfo);
