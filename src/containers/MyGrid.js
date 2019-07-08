import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';



const MyGrid = (props) => {

    <Grid container spacing={3}>
        <Grid item xs={12}>
            <Typography variant="h5">
                {props.title}
            </Typography>
        </Grid>

        <Grid item xs={12}>
            <Paper className={classes.paper}>
            <Typography variant="h6">{props.text}</Typography>
            </Paper>
        </Grid>
    </Grid>

}