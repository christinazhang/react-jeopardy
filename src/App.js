import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Dropzone from "react-dropzone";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlusCircle,
  faMinusCircle,
  faCheckCircle,
  faTimesCircle,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import Board from "./components/Board";
import Contestants from "./components/Contestants";
import { changeStage, uploadConfig } from "./redux/actions";
import { getCurrentStage } from "./redux/selectors";
import { UPLOAD_FILES, SINGLE_JEOPARDY } from "./stageTypes";
import GlobalFonts from "./fonts/fonts";

library.add(
  faPlusCircle,
  faMinusCircle,
  faCheckCircle,
  faTimesCircle,
  faChevronCircleRight
);

const JeopardyApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const DropzoneContainer = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const DropArea = styled.div`
  padding: 72px;
  border: 3px dashed #ccc;
  color: #666;
  text-align: center;
`;

const ActiveGame = (
  <JeopardyApp>
    <Board />
    <Contestants />
  </JeopardyApp>
);

const handleDrop = (acceptedFiles, changeStage, uploadConfig) =>
  acceptedFiles.forEach((file) => {
    const reader = new FileReader();

    reader.onabort = () => console.log("file reading was aborted");
    reader.onerror = () => console.log("file reading has failed");
    reader.onload = () => {
      // TODO: File validation
      const config = JSON.parse(reader.result);
      uploadConfig(config);
      changeStage(SINGLE_JEOPARDY);
    };
    reader.readAsText(file);
  });

const UploadFiles = (changeStage, uploadConfig) => (
  <DropzoneContainer>
    <Dropzone
      onDrop={(acceptedFiles) =>
        handleDrop(acceptedFiles, changeStage, uploadConfig)
      }
    >
      {({ getRootProps, getInputProps }) => (
        <DropArea {...getRootProps()}>
          <input {...getInputProps()} />
          <p>Drag and drop config file here, or click to select file</p>
        </DropArea>
      )}
    </Dropzone>
  </DropzoneContainer>
);

const App = ({ currentStage, changeStage, uploadConfig }) => {
  return (
    <div>
      <GlobalFonts />
      {currentStage === UPLOAD_FILES
        ? UploadFiles(changeStage, uploadConfig)
        : ActiveGame}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    currentStage: getCurrentStage(state),
  };
}

export default connect(mapStateToProps, { changeStage, uploadConfig })(App);
