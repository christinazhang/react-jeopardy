import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import ClueCell from "./ClueCell";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
`;

const CategoryTitleContainer = styled.div`
  flex: 1 0 auto;
  color: #fff;
  background-color: #102278;
  border: 1px solid #fff;
  padding: 8px;
  height: 100px;
  display: flex;
  align-items: center;
  font-size: 2em;
`;

const CategoryTitleLabel = styled.span`
  width: 100%;
  text-align: center;
  font-weight: 700;
  color: #fff;
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
          text={clue.text}
          value={"$" + clue.value}
          viewed={clue.viewed}
        ></ClueCell>
      );
    })}
  </Container>
);

export default Category;

// <Link to={"/" + categoryIndex + "/" + index} key={index}>
//         </Link>
