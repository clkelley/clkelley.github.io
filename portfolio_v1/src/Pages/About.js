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
import { spacing } from '@material-ui/system';
import { Document, Page, pdfjs} from 'react-pdf';
import resume from '../Files/Resume.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const classwork_chips = [
    "Vector Calculus for Engineers",
    "Data Science 101",
    "Electricity and Magnetism",
    "Intro to Solid Mechanics",
    "Mathematical Foundations of Computing",
    "Computer Systems from the Ground Up",
    "Cross-Platform Mobile Development",
    "Design and Analysis of Algorithms",
    "Computers, Ethics, and Public Policy",
    "Web Applications",
    "iOS Application Development",
    "Introduction to Computer Graphics and Imaging",
    "Artificial Intelligence: Principles and Techniques",
    "Introduction to Mechatronics",
    ];

const design_classwork_chips = [
  "Learn to Intervene, Wisely",
  "Human-Computer Interaction Seminar",
  "Design and Manufacturing",
  "Design for Silver and Bronze",
  "Human-Computer Interaction Design Studio",
  "Computer-Aided Product Creation",
  "Designing Serious Games",
  "Introduction to Social Psychology",
  "Social Computing",
  "Graduate Design Research Techniques"
];

const other_classwork_chips =[
  "Empathy",
  "Physics - Mechanics",
  "Ordinary Differential Calculus for Engineers",
  "Writing 1: Imagining Technology: The Rhetoric of Humans and Machines",
  "The American West",
  "Programming Abstractions",
  "Chemical Principles Accelerated",
  "Physics - Light and Heat",
  "Writing 2: Language Gone Viral: The Rhetoric of Social Media",
  "Intro to Probability for Computer Scientists",
  "Fiction Writing",
  "Principles of Computer Systems",
  "Introduction to Human-Computer Interaction Design",
  "Intro to Making: What is EE",
  "Object-Oriented Systems Design",
  "Electrical Engineering Instruction",
  "Mechanics of Materials",
  "Introduction to Psychology",
  "Ten Things: An Archaeology of Design",
  "Social Dance 1",
  "Italian Cooking",
  "Software Project",
  "Introduction to Financial Decision-Making",
  "Data Visualization",
  "The Modern Algorithmic Toolbox",
  "Video Game Development in C++ and Unreal",
];

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    flexGrow: 1,
    marginTop: "1rem",
  },
  gridList: {
    display: 'flex',
    direction:"column",
    justifyContent: "flex-end",
    paddingLeft: '1rem'
  },
  pageTile: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "1rem",
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
  },
  chipStyle:{
    margin: "0.25rem",
  },
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

      <Grid item  md={4} sm={12} className={classes.pageTile}>
        <Typography variant="h4" gutterBottom>
          about me
        </Typography>
        <Typography variant="body2" paragraph={true} align="left">
          Hi! I'm a Master's Student at Stanford University studying Computer Science with a concentration in Human-Computer Interaction. I've loved making things for as long as I can remember.
        </Typography>
        <Typography variant="body2" paragraph={true} align="left">
          I have a passion for how people interact with technology in the physical world. I do work in mechanical and electrical engineering building robots and wiring circuits, but I mostly write software and design interfaces to solve problems.
        </Typography>
        <Typography variant="body2" paragraph={true} align="left">
          This website (built in React using Material UI) is full of projects I've developed and work experience from my undergraduate years also at Stanford. I'd be delighted to answer any questions - my email is listed at the top of my resume. Happy exploring!
        </Typography>
        <Typography variant="h6" gutterBottom>
          not currently seeking opportunities
        </Typography>
        <Button onClick={handleResumeClickOpen}>
          Open Resume
        </Button>
        <Button href={resume} download>
          Download Resume <GetApp />
        </Button>
      </Grid>
      <Grid item md={4} sm={12} className={classes.pageTile}>
        <Paper>
        <img className={classes.imageItem} src="/images/fullbody_portrait.JPG" alt="Image of Clara in white dress and red stole in front of Hoover tower" />
        </Paper>
      </Grid>
      <Grid item container md={4} sm={12} direction="column" className={classes.pageTile, classes.gridList} styles={{alignItems: "flex-start"}}>
        <Typography variant="h6" gutterBottom>
        classwork in design
        </Typography>
        <Grid item container>
        {design_classwork_chips.map(title => (
        <Chip
          variant="outlined"
          size="small"
          key={title}
          label={title}
          className={classes.chipStyle}/>
        ))}
        </Grid>
        <Typography variant="h6" gutterBottom>
        classwork in engineering
        </Typography>
        <Grid item container>
        {classwork_chips.map(title => (
        <Chip
          variant="outlined"
          size="small"
          key={title}
          label={title}
          className={classes.chipStyle}/>
        ))}
        </Grid>

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
