import React, {useState} from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  Grid,
  GridList,
  GridListTile,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

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

  const [hover, setHover] = useState(false);

  const history = useHistory();

  const featuredTiles = tileData.filter(tile => tile.featured == true).sort((a, b) => parseInt(b.date) - parseInt(a.date));

  const handleChipClick = (chipName) => {
    history.push("work/"+chipName);
  }

  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        {hover ? "physical/digital" : "digital/physical"  } interaction engineer
      </Typography>
      <Grid container>
        <Grid sm={12} md={8} item>
          {/*key={tileData[8].img}
          image={tileData[8].img}
          title={tileData[8].title}
          date={tileData[8].date}
          attributes={tileData[8].attributes}
          credit={tileData[8].credit}
          description={tileData[8].description}
          index={tileData[8].index}*/}
          <ProjectCard
            key={featuredTiles[0].index}
            tile={featuredTiles[0]}
            chipCallback={handleChipClick}
            />
        </Grid>
        <Grid sm={12} md={4} item>
        </Grid>
        <Grid sm={12} md={4} item>
        </Grid>
        <Grid sm={12} md={8} item>
          <ProjectCard
            key={featuredTiles[1].index}
            tile={featuredTiles[1]}
            chipCallback={handleChipClick}
            />
        </Grid>
        <Grid sm={12} md={8} item>
          <ProjectCard
            key={featuredTiles[2].index}
            tile={featuredTiles[2]}
            chipCallback={handleChipClick}
            />
        </Grid>
        <Grid sm={12} md={4} item>
        </Grid>
        <Grid sm={12} md={4} item>
        </Grid>
        <Grid sm={12} md={8} item>
          <ProjectCard
            key={featuredTiles[3].index}
            tile={featuredTiles[3]}
            chipCallback={handleChipClick}
            />
        </Grid>
      </Grid>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
