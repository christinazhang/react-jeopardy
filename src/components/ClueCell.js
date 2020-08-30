import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Clue = styled.div`
  flex: 1 0 auto;

  background-color: #102278;
  border: 1px solid #fff;
  padding: 8px;
  height: 100px;
  display: flex;
  align-items: center;
  font-size: 2em;

  &:hover {
    background-color: #253ca8;
  }

  transition: all 0.2s;
`;

const ClueLabel = styled.span`
  width: 100%;
  text-align: center;
  color: #fff;
`;

const ClueCell = ({ to, text }) => (
  <Clue>
    <ClueLabel>{text}</ClueLabel>
  </Clue>
);

export default ClueCell;
