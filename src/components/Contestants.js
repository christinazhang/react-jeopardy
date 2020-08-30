import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getAllContestants } from "../redux/selectors";
import ContestantCell from "./ContestantCell";

const ContestantsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: 24px 0px;
`;

const Contestants = ({ contestants }) => (
  <ContestantsContainer>
    {contestants.map((contestant, index) => (
      <ContestantCell
        key={index}
        index={index}
        contestant={contestant}
      ></ContestantCell>
    ))}
  </ContestantsContainer>
);

function mapStateToProps(state) {
  return {
    contestants: getAllContestants(state),
  };
}

export default connect(mapStateToProps, {})(Contestants);
