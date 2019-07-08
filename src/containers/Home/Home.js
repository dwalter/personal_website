import React from 'react';
import { Route, Link } from 'react-router-dom'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
    flex: 1,
    },
    toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
    },
    toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      
    },
    typography: {
        paddingTop: 24,
        textAlignVertical: 'center',
    },
    profilePhoto: {
        flex: 1,
        width: "100%",
        height: null,
    }
  }));


const sections = [
    'AI',
    'Philosophy',
    'Science',
    'Health',
];


const Home = (props) => {

    const classes = useStyles();

    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }


    return(
        

        <Container>

        {/* <Paper className={classes.root}> */}
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h4" className={classes.typography}>
                        David Walter
                    </Typography>            
                </Grid>
                <Grid item xs={12}>
                    <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                        {sections.map(section => (
                            <Link
                            to={section.toLowerCase()}
                            // color="inherit"
                            // noWrap
                            // key={section}
                            // variant="body2"
                            // href="#"
                            // className={classes.toolbarLink}
                            >
                            {section}
                            </Link>
                        ))}
                    </Toolbar>
                </Grid>
            </Grid>
        {/* </Paper> */}


        <Typography variant="h5" className={classes.typography}>
            About
        </Typography>

        <Paper className={classes.paper}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <img
                        className={classes.profilePhoto} 
                        src={require("../../profile_photo.jpeg")} 
                        alt="me in nature">
                    </img>
                </Grid>
                <Grid item xs={9}>
                    <Typography variant="body1">I'm interested in AI, Philosophy and Science, and much more. From MIT I have a Masters in Computer Science and a Double Major in CS and Philosophy. </Typography>
                </Grid>
            </Grid>
        </Paper>


        <Typography variant="h5" className={classes.typography}>
            Blog
        </Typography>

        <Grid container spacing={3}>
            <Grid item xs={6}>
                <Paper className={classes.paper}>
                    <Typography variant="h6">Blog 1 Preview</Typography>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>
                    <Typography variant="h6">Blog 2 Preview</Typography>
                </Paper>
            </Grid>
        </Grid>






        <Typography variant="h5" className={classes.typography}>
            Projects
        </Typography>

        <Grid container spacing={3}>
            <Grid item xs={6}>
                <Paper className={classes.paper}>
                    <Typography variant="h6">Project 1 Preview</Typography>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>
                    <Typography variant="h6">Project 2 Preview</Typography>
                </Paper>
            </Grid>
        </Grid>

        

        

        </Container>


        
    );
}

export default Home