import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';

import logo from '../../assets/logo.svg';

function ElevationScroll(props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '',
  },

  logo: {
    height: '4em',
  },

  tabsContainer: {
    marginLeft: 'auto',
  },

  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
  },

  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight: '25px',
    height: '35px',
  },
}));

export default function Header() {
  const classes = useStyles();

  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  return (
    <>
      <ElevationScroll>
        <AppBar position='fixed'>
          <Toolar disableGutters>
            <img src={logo} alt='Company Logo' className={classes.logo} />
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabsContainer}
              //   indicatorColor='secondary'
            >
              <Tab className={classes.tab} label='Home' />
              <Tab className={classes.tab} label='Services' />
              <Tab className={classes.tab} label='The Revolution' />
              <Tab className={classes.tab} label='About Us' />
              <Tab className={classes.tab} label='Contact Us' />
            </Tabs>
            <Button
              variant='contained'
              color='secondary'
              className={classes.button}
            >
              Free Estimate
            </Button>
          </Toolar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}
