import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

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

export default function Header() {
  return (
    <>
      <ElevationScroll>
        <AppBar position='fixed' color='secondary'>
          <Toolar>Arc Development</Toolar>
        </AppBar>
      </ElevationScroll>
    </>
  );
}
