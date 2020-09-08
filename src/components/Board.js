import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Category from "./Category";
import Overlay from "./Overlay";
import { toggleOverlay } from "../redux/actions";
import { getCurrentCategories, getCurrentStage } from "../redux/selectors";
import { SINGLE_JEOPARDY, DOUBLE_JEOPARDY } from "../stageTypes";
import DoubleJeopardyButton from "./DoubleJeopardyButton";
import FinalJeopardyButton from "./FinalJeopardyButton";

const BoardContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #102278;
`;

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const EmptyBoardButtonContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  color: #fff;
`;

// Checks if all clues on the board have been viewed
const isBoardEmpty = (categories) => {
  return !categories.find((category) =>
    category.clues.find((clue) => !clue.viewed)
  );
};

const getNextStageButton = (currentStage) => {
  switch (currentStage) {
    case SINGLE_JEOPARDY:
      return <DoubleJeopardyButton />;
    case DOUBLE_JEOPARDY:
      return <FinalJeopardyButton />;
    default:
      return <div></div>;
  }
};

const Board = ({ showOverlay, categories, currentStage }) => (
  <BoardContainer>
    {showOverlay && <Overlay />}
    <CategoriesContainer>
      {categories.map((category, index) => (
        <Category
          key={index}
          categoryIndex={index}
          title={category.title}
          clues={category.clues}
        ></Category>
      ))}
    </CategoriesContainer>

    {!showOverlay && isBoardEmpty(categories) && (
      <EmptyBoardButtonContainer>
        {getNextStageButton(currentStage)}
      </EmptyBoardButtonContainer>
    )}
  </BoardContainer>
);

function mapStateToProps(state) {
  return {
    showOverlay: state.overlay.showOverlay,
    currentStage: getCurrentStage(state),
    categories: getCurrentCategories(state),
  };
}

export default connect(mapStateToProps, { toggleOverlay })(Board);
