import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  Grid,
  GridList,
  GridListTile,
  Typography,
  Paper,
  Slide,
  Button,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Chip,
} from "@material-ui/core";
import {
  Close,
  GetApp
} from '@material-ui/icons';
import { Document, Page, pdfjs} from 'react-pdf';
import resume from '../Files/Resume.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    flexGrow: 1,
    marginTop: "1rem"
  },
  gridList: {
    display: 'flex',
    direction:"column",
    justifyContent: "flex-end",
  },
  pageTile: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "1rem"
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
  appBar: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  pdfPage: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "scroll",
    flexGrow: 1
  }
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function About(props) {
  const { classes } = props;
  const [resumeOpen, setResumeOpen] = React.useState(false);

  function handleResumeClickOpen() {
    setResumeOpen(true);
  }

  function handleResumeClose() {
    setResumeOpen(false);
  }

  return (
    <div>
      <Grid container className={classes.root}>
      <Grid item md={4} sm={12} className={classes.pageTile}>
        <Paper>
        <img className={classes.imageItem} src="/images/fullbody_portrait.JPG" alt="Image of Clara in white dress and red stole in front of Hoover tower" />
        </Paper>
      </Grid>
      <Grid item  md={4} sm={12} className={classes.pageTile}>
        <Typography variant="h4" gutterBottom>
          about me
        </Typography>
        <Typography variant="body2" paragraph="true" align="left">
          Hi! I'm a Master's Student at Stanford University studying Computer Science with a concentration in Human-Computer Interaction. I've loved making things for as long as I can remember.
        </Typography>
        <Typography variant="body2" paragraph="true" align="left">
          I have a passion for how people interact with technology in the physical world. I do work in mechanical and electrical engineering building robots and wiring circuits, but I mostly write software and design interfaces for people to interact with their screens.
        </Typography>
        <Typography variant="body2" paragraph="true" align="left">
          This website (built in React using Material UI) is full of projects I've developed and work experience from my undergraduate years also at Stanford. I'd be delighted to answer any questions - my email is listed at the top of my resume. Happy exploring!
        </Typography>
      </Grid>
      <Grid item container md={4} sm={12} direction="column" className={classes.pageTile, classes.gridList} styles={{alignItems: "flex-start"}}>
        <Button onClick={handleResumeClickOpen}>
          Open Resume
        </Button>
        <Button href={resume} download>
          Download Resume <GetApp />
        </Button>
        <Typography variant="h6" gutterBottom>
          seeking opportunities for fall 2021
        </Typography>
      </Grid>
      </Grid>
      <Dialog fullScreen open={resumeOpen} onClose={handleResumeClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.appBar}>
            <IconButton edge="start" color="inherit" onClick={handleResumeClose} aria-label="Close">
              <Close />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Resume
            </Typography>
            <IconButton color="inherit" href={resume} download>
              <GetApp />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Toolbar>
        </Toolbar>
        <Grid container className={classes.pdfPage}>
          <Document file={resume} >
            <Page pageNumber={1} scale={0.75}/>
          </Document>
        </Grid>

      </Dialog>
    </div>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
