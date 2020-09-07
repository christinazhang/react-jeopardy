import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Category from "./Category";
import Overlay from "./Overlay";
import { toggleOverlay } from "../redux/actions";
// import { categories } from "../constants";
import { getCurrentCategories } from "../redux/selectors";

const BoardContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  position: relative;
  flex-direction: row;
  justify-content: center;
  background-color: #102278;
`;

const Board = ({ showOverlay, categories }) => (
  <BoardContainer>
    {showOverlay && <Overlay />}
    {categories.map((category, index) => (
      <Category
        key={index}
        categoryIndex={index}
        title={category.title}
        clues={category.clues}
      ></Category>
    ))}
  </BoardContainer>
);

function mapStateToProps(state) {
  return {
    showOverlay: state.overlay.showOverlay,
    categories: getCurrentCategories(state),
  };
}

export default connect(mapStateToProps, { toggleOverlay })(Board);
