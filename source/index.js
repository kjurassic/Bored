import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";
import 'semantic-ui-css/semantic.min.css'


const mountNode = document.getElementById("app");
ReactDOM.render(<App name='Kyle'/>, mountNode);