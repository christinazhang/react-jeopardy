import React from "react";
import styled from "styled-components";
import ClueCell from "./ClueCell";

const CategoryTitleContainer = styled.div`
  flex: 1 0 auto;
  border-bottom: 8px solid rgba(0, 0, 0, 0.75);
  color: #fff;
  background-color: #102278;
  padding: 8px 12px;
  height: 100px;
  display: flex;
  align-items: center;
  font-size: 2em;
`;

const Container = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  width: 250px;
  border: 8px solid rgba(0, 0, 0, 0.75);
  border-right: 0px;
  &:last-child {
    border-right: 8px solid rgba(0, 0, 0, 0.75);
  }
`;

const CategoryTitleLabel = styled.span`
  width: 100%;
  text-align: center;
  font-family: "Swiss 911 Compressed";
  color: #fff;
  text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.7);
`;

const CategoryTitle = ({ title }) => (
  <CategoryTitleContainer>
    <CategoryTitleLabel>{title.toUpperCase()}</CategoryTitleLabel>
  </CategoryTitleContainer>
);

const Category = ({ title, clues, categoryIndex }) => (
  <Container>
    <CategoryTitle title={title} />
    {clues.map((clue, index) => {
      return (
        <ClueCell
          key={index}
          clueIndex={index}
          categoryIndex={categoryIndex}
          clue={clue}
        ></ClueCell>
      );
    })}
  </Container>
);

export default Category;
