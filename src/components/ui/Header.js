import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';

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
}));

export default function Header() {
  const classes = useStyles();
  return (
    <>
      <ElevationScroll>
        <AppBar position='fixed'>
          <Toolar disableGutters>
            <img src={logo} alt='Company Logo' className={classes.logo} />
          </Toolar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}
