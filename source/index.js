import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";

const qualities = ['Bored', 'Hungry', 'Restless', 'Unmotivated', 'Upset', ]

function iterator (arr) {
  let random = Math.floor(Math.random * arr.length)
  return arr[random]
}

const mountNode = document.getElementById("app");
ReactDOM.render(<App name={qualities[1]} />, mountNode);