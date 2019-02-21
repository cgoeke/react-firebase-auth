import React from 'react';
import { GithubCircle } from 'mdi-material-ui';
import { AppBar, Link, Typography, withStyles } from '@material-ui/core';

const styles = () => ({
  link: {
    alignItems: 'center',
    alignSelf: 'center',
    color: 'inherit',
    display: 'flex',
    justifyContent: 'center',
    margin: '8px'
  }
});

const Footer = ({ classes }) => (
  <AppBar component="footer" position="static">
    <Link className={classes.link} href="https://github.com/cgoeke" underline="none">
      <span><GithubCircle /></span> 
      <Typography color="inherit">GitHub</Typography>
    </Link>
  </AppBar>
);

export default withStyles(styles)(Footer);