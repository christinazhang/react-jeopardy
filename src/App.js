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

const JeopardyApp = styled.div`
  background-color: #102278;
  height: 100vh;
`;

function App() {
  return (
    <JeopardyApp className="App">
      <Board />
    </JeopardyApp>
  );
}

export default App;
