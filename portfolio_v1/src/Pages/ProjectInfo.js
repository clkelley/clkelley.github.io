import React, {useState} from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  Typography,
  Hidden,
  Link,
  Button,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Chip,
} from "@material-ui/core";
import {
  KeyboardArrowRight,
  Close,
  ZoomIn
} from '@material-ui/icons';

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
  },
  titleBar: {
    background:
      'rgba(0,0,0,0.0)'
  },
  cardImage: {
    flexGrow: 1,
    backgroundSize: "cover",
  },
  chipStyle:{
    margin: "0.25rem",
  },
});

function ProjectInfo(props) {
  const { classes } = props;
  console.log(tileData);

  const [imageOpen, setImageOpen] = React.useState(false);
  const [curImage, setCurImage] = React.useState("");

  function handleImageClickOpen(imageSource) {
    setImageOpen(true);
    setCurImage(imageSource);
  }

  function handleImageClose() {
    setImageOpen(false);
  }

  const thisTile = tileData.find(tile => tile.index == props.match.params.index);
  //

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
          <GridListTileBar
              title=""
              titlePosition="top"
              actionIcon={
                <IconButton styles={{color:"black"}} onClick={() => handleImageClickOpen(thisTile.img)}>
                  <ZoomIn />
                </IconButton>
              }
              actionPosition="right"
              className={classes.titleBar}
          />
          </GridListTile>
        </GridList>
        </Grid>
        <Grid sm={12} md={6} item>
          <Typography variant="body2" align="left">
            {thisTile.description}
          </Typography>
          <Typography align="right" margin="1rem">
          {thisTile.website && <Button size="small" href={thisTile.website ? thisTile.website : "#"}>
            Website <KeyboardArrowRight />
          </Button>}
          </Typography>
        </Grid>
        <Grid item xs={12}>
        {thisTile.attributes.map(title => (
        <Chip
          variant="outlined"
          size="small"
          key={title}
          label={title}
          className={classes.chipStyle}
          component="a"
          href={"/work/"+title} 
          clickable/>
        ))}
        </Grid>
      </Grid>
      <Dialog open={imageOpen} onClose={handleImageClose}>
        {/*<GridList>
        <GridListTile key={curImage} cols={2} rows={2}>*/}
        <img src={curImage} width='100%' className={classes.cardImage}/>
        <GridListTileBar
            titlePosition="top"
            actionIcon={
              <IconButton edge="start" color="inherit" onClick={handleImageClose} aria-label="Close">
                <Close />
              </IconButton>
            }
            actionPosition="right"
            className={classes.titleBar}
        />
        {/*</GridListTile>
        </GridList>*/}
      </Dialog>
    </div>
  );
}

ProjectInfo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProjectInfo);
