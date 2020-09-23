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
import ProjectCard from "../Components/ProjectCard.js"

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

function Home(props) {
  const { classes } = props;
  console.log(tileData);

  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom>
        digital/physical interaction designer
      </Typography>
      <Grid container>
        <Grid sm={12} md={8} item>
          <ProjectCard
            key={tileData[8].img}
            image={tileData[8].img}
            title={tileData[8].title}
            date={tileData[8].date}
            attributes={tileData[8].attributes}
            credit={tileData[8].credit}
            description={tileData[8].description}/>
        </Grid>
        <Grid sm={12} md={4} item>
        </Grid>
        <Grid sm={12} md={4} item>
        </Grid>
        <Grid sm={12} md={8} item>
          <ProjectCard
            key={tileData[2].img}
            image={tileData[2].img}
            title={tileData[2].title}
            date={tileData[2].date}
            attributes={tileData[2].attributes}
            credit={tileData[2].credit}
            description={tileData[2].description}/>
        </Grid>
        <Grid sm={12} md={8} item>
          <ProjectCard
            key={tileData[9].img}
            image={tileData[9].img}
            title={tileData[9].title}
            date={tileData[9].date}
            attributes={tileData[9].attributes}
            credit={tileData[9].credit}
            description={tileData[9].description}/>
        </Grid>
        <Grid sm={12} md={4} item>
        </Grid>
      </Grid>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
