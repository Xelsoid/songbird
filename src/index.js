import React from "react";
import ReactDOM from "react-dom";
import Application from "@components/Application";

import "./styles/reset.css";
import "./styles/styles.scss";

class App extends React.PureComponent {
  render() {
    return <Application />;
  }
}

ReactDOM.render(<App />, document.getElementById("rootContainer"));
