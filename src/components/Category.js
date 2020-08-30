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

function titleToURL(title) {
  return title.toLowerCase().replace(/ /g, "-");
}

const Category = ({ title, clues }) => (
  <Container>
    <ClueCell text={title}></ClueCell>
    {clues.map((clue, index) => {
      const value = (index + 1) * 100;
      return (
        <Link to={"/" + titleToURL(title) + "/" + value} key={index}>
          <ClueCell text={"$" + value}></ClueCell>
        </Link>
      );
    })}
  </Container>
);

export default Category;
