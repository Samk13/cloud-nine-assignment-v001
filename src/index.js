import React from "react";
import ReactDOM from "react-dom";
import App from '../src/Components/app'


import "./styles.css";

function Root() {
  return (
    <div className="App">
     <App />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Root />, rootElement);
