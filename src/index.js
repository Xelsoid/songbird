import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.PureComponent {
  render() {
    return (
      <h1>Hello birds!</h1>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('rootContainer'));
