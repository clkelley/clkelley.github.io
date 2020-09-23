import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  Grid,
  Typography,
  Hidden,
  Paper
} from "@material-ui/core";
import ProjectCard from "../Components/ProjectCard.js"

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
  }
});

const tileData = [
  {
    img: "/images/lightbeat in progress.png",
    title: "LED Shirt / Prom Dress",
    author: "jill111",
    date: "2013",
    attributes: ["Physical", "Digital", "iOS", "Android", "Embedded"],
    featured: true
  },
  {
    img: "/images/angel_cutout.png",
    title: "Mechanical Wings (Costume)",
    attributes: ["Physical", "Mechanical Design", "Art"],
    date: "2016"
  },
  {
    img: "/images/sprite_iphone.png",
    title: "Sprite",
    date: "2018",
    attributes: ["Digital","Team", "React", "Firebase", "iOS", "Android", "UX", "UI", "Mobile Application","Design Thinking", "User Research", "Prototyping", "User Testing"],
    featured: true
  },
  {
    img: "/images/rendezvous_browser.png",
    title: "Rendezvous",
    date: "2020",
    attributes: ["Digital","Team", "React", "Firebase", "UX", "Web Application"],
  },
  {
    img: "/images/glassdoor_redesign.png",
    title: "Redesign: Glassdoor Mobile",
    date: "2019",
    attributes: ["Digital","Team", "React", "Firebase", "iOS", "Android", "UX", "UI", "Prototyping"],
  },
  {
    img: "/images/bow_stand.png",
    title: "Bow Stand",
    date: "2018",
    attributes: ["Physical", "Manufacturing", "Prototyping", "Design Thinking"],
  },
  {
    img: "/images/waffle_iron_no_text.png",
    title: "Origami Waffle Iron",
    date: "2019",
    attributes: ["Physical", "Manufacturing", "Prototyping", "Design Thinking", "CAD", "CNC"],
  },
  {
    img: "/images/silkscreening_john.png",
    title: "Silkscreen T-Shirts",
    attributes: ["Physical", "Graphic Design", "Art"],
    date: "2018",
  },
  {
    img: "/images/x2_in_use.png",
    title: "Skydio Software Engineering",
    attributes: ["Digital", "Android", "Open Source", "Full Stack Development", "Internship"],
    credit: " Image courtesy of Skydio ",
    date: "2019",
  },
  {
    img: "/images/s2_lifestyle.jpg",
    title: "Skydio User Research",
    attributes: ["Digital", "Physical", "UX", "User Research", "Design Thinking", "Internship"],
    credit: " Image courtesy of Skydio ",
    date: "2020",
  },
];

function Work(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container className={classes.grid}>
      {tileData.map(tile => (
        <ProjectCard key={tile.img} image={tile.img} title={tile.title} date={tile.date} attributes={tile.attributes} credit={tile.credit}/>
      ))}
      </Grid>
    </div>
  );
}

Work.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Work);
