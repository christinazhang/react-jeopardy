import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Board from "./components/Board";

function App() {
  return (
    <div className="App">
      <Board />
    </div>
  );
}

export default App;
