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
    justifyContent: "center",
  },
  pageTile: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "10rem"
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
      </Grid>
      <Grid item container md={4} sm={12} direction="column" className={classes.pageTile, classes.gridList}>
        <Typography variant="h6" gutterBottom>
          seeking opportunities for fall 2021
        </Typography>
        <Button onClick={handleResumeClickOpen}>
          Open Resume
        </Button>
        <Button href={resume} download>
          Download Resume <GetApp />
        </Button>
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
