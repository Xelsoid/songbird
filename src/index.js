import React from 'react';
import ReactDOM from 'react-dom';
import Application from '@components/Application';

class App extends React.PureComponent {
  render() {
    return (
      <Application/>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('rootContainer'));
