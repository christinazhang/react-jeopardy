import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { updateScore } from "../redux/actions";
import { formatMoney } from "../util";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 8px;
`;

const ScoreLabel = styled.div`
  padding: 24px 12px;
  background-color: #102278;
  color: ${(props) => (props.score >= 0 ? "white" : "red")};
  font-weight: 700;
  font-size: 2em;
`;

const Name = styled.div`
  padding: 48px 12px;
  background-color: #102278;
  color: white;
`;

const DisplayPicture = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

class ContestantCell extends React.Component {
  handleScoreIncrease = () => {
    this.props.updateScore(this.props.index, this.props.currentClueValue);
  };
  handleScoreDecrease = () => {
    this.props.updateScore(this.props.index, -1 * this.props.currentClueValue);
  };

  render() {
    const { contestant } = this.props;
    return (
      <Container>
        <DisplayPicture src={contestant.imgLink}></DisplayPicture>
        <ScoreLabel score={contestant.score}>
          {formatMoney(contestant.score)}
        </ScoreLabel>
        <Name>{contestant.name}</Name>
        <button onClick={this.handleScoreIncrease}>Increase</button>
        <button onClick={this.handleScoreDecrease}>Decrease</button>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentClueValue: state.overlay.activeClue.value,
  };
}

export default connect(mapStateToProps, { updateScore })(ContestantCell);
