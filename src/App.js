import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
// import logo from './logo.svg';
import './App.css';
import Home from './containers/Home/Home.js';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



const AI = () => (<div> AI Page</div>)
const Philosophy = () => (<div> Philosophy Page</div>)
const Science = () => (<div> Science Page</div>)
const Health = () => (<div> Health Page</div>)


const BaseLayout = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    
    <div>
      <Route path="/" exact component={Home}/>
      <Route path="/ai" component={AI}/>
      <Route path="/philosophy" component={Philosophy} />
      <Route path="/science" component={Science} />
      <Route path="/health" component={Health} />
    </div>
  )
}


const App = () => {

  return (
    <BrowserRouter>
      <BaseLayout />
    </BrowserRouter>
  )
}
  

export default App;
