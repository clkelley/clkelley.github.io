import React, {useState} from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  Grid,
  Typography,
  Hidden,
  Paper,
  Chip
} from "@material-ui/core";
import ProjectCard from "../Components/ProjectCard.js"
import tileData from "../Components/WorkConstants.js"

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  grid: {
    flexGrow: 1,
  },
  subheader: {
    width: "100%"
  },
  filterBar:{

  },
  chipStyle:{
    margin: "0.25rem",
  },
});

function Work(props) {
  const { classes } = props;

  const [chiplist, setChipList] = useState([]);
  const [filteredWorks, setFilteredWorks] = useState(tileData);

  const handleChipClick = (chipName) => {
    if(chiplist.includes(chipName)){
      setChipList((chiplist) => chiplist.filter((chip) => chip !== chipName));
      //setFilteredWorks((tileData) => tileData.filter((tile) => chiplist.foreach((chip) => tile.attributes.includes(chip)));
      var newFiltered = []
      tileData.forEach((tile) => {
        var match = true;
        chiplist.forEach((chip) =>{
          if (chip !== chipName && !tile.attributes.includes(chip)){
            match = false;
          }
        });
        if (match) {
          newFiltered.push(tile);
        }
      });
      setFilteredWorks(newFiltered);
    } else {
      setChipList([...chiplist, chipName]);
      setFilteredWorks((tileData) => tileData.filter((tile) => tile.attributes.includes(chipName)));
    }
    console.log(chiplist);
  }

  return (
    <div className={classes.root}>
      <Grid className={classes.filterBar}>
      {chiplist.map(title => (
      <Chip
        variant="outlined"
        size="small"
        key={title}
        label={title}
        className={classes.chipStyle}
        onDelete={() => handleChipClick(title)}/>
      ))}
      </Grid>
      <Grid container className={classes.grid}>
      {filteredWorks.map(tile => (
        <ProjectCard
          key={tile.img}
          image={tile.img}
          title={tile.title}
          date={tile.date}
          attributes={tile.attributes}
          credit={tile.credit}
          description={tile.description}
          chipCallback={handleChipClick}/>
      ))}
      </Grid>
    </div>
  );
}

Work.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Work);
