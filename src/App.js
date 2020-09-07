import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
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
import { changeStage } from "./redux/actions";
import { getCurrentStage } from "./redux/selectors";
import { UPLOAD_FILES } from "./stageTypes";

library.add(faPlusCircle, faMinusCircle, faCheckCircle, faTimesCircle);

const JeopardyApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ActiveGame = (
  <JeopardyApp className="App">
    <Board />
    <Contestants />
  </JeopardyApp>
);

const UploadFiles = (
  <div>
    <button>Upload single jeopardy</button>
    <button>Upload double jeopardy</button>
    <button>Upload final jeopardy</button>
  </div>
);

const App = ({ currentStage }) => {
  return currentStage === UPLOAD_FILES ? UploadFiles : ActiveGame;
};

function mapStateToProps(state) {
  return {
    currentStage: getCurrentStage(state),
  };
}

export default connect(mapStateToProps, { changeStage })(App);
