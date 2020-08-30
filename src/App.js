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
import Contestants from "./components/Contestants";

const JeopardyApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {
  return (
    <JeopardyApp className="App">
      <Board />
      <Contestants />
    </JeopardyApp>
  );
}

export default App;
