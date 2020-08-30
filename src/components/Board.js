import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Category from "./Category";
import Overlay from "./Overlay";
import { toggleOverlay } from "../redux/actions";

const BoardContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Board = ({ showOverlay, categories }) => (
  <BoardContainer>
    {showOverlay ? <Overlay /> : ""}
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
    categories: state.clues.categories,
  };
}

export default connect(mapStateToProps, { toggleOverlay })(Board);
