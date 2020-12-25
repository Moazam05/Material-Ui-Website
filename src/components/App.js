import React, { Component } from 'react';
import Header from './ui/Header';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        {[...new Array(120)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
          )
          .join('\n')}
      </>
    );
  }
}

export default App;