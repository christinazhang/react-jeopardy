import React from "react";
import styled from "styled-components";
import "./App.css";
import Board from "./components/Board";
import Contestants from "./components/Contestants";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlusCircle,
  faMinusCircle,
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

library.add(faPlusCircle, faMinusCircle, faCheckCircle, faTimesCircle);

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
