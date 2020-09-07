import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { updateScore } from "../redux/actions";
import { formatMoney } from "../util";
import IconButton from "./IconButton";

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

const WagerEditor = styled.div`
  border-top: 1px solid #aaa;
  padding: 12px 4px;
`;
const SimpleScoreEditor = styled.div`
  padding: 12px 4px;
`;

const ScoreEditor = styled.div`
  margin-top: 8px;
  border: 1px solid #aaa;
  border-radius: 8px;
`;

class ContestantCell extends React.Component {
  constructor(props) {
    super(props);
    this.state = { wager: 0 };
  }

  handleScoreIncrease = () => {
    this.props.updateScore(this.props.index, this.props.currentClueValue);
  };
  handleScoreDecrease = () => {
    this.props.updateScore(this.props.index, -1 * this.props.currentClueValue);
  };

  updateWager = (wager) => {
    this.setState({ wager });
  };

  handleCorrectWager = () => {
    this.props.updateScore(this.props.index, this.state.wager);
  };

  handleIncorrectWager = () => {
    this.props.updateScore(this.props.index, -1 * this.state.wager);
  };

  render() {
    const { contestant } = this.props;
    const score = contestant.score ?? 0;
    return (
      <Container>
        <DisplayPicture src={contestant.imgLink}></DisplayPicture>
        <ScoreLabel score={score}>{formatMoney(score)}</ScoreLabel>
        <Name>{contestant.name}</Name>
        <ScoreEditor>
          <SimpleScoreEditor>
            <div>Regular Clue:</div>
            <IconButton
              icon="times-circle"
              color="red"
              size="lg"
              onClick={this.handleScoreDecrease}
            />
            <IconButton
              icon="check-circle"
              color="green"
              size="lg"
              onClick={this.handleScoreIncrease}
            />
          </SimpleScoreEditor>
          <WagerEditor>
            Wager Clue:
            <input
              style={{ display: "block", margin: "0 auto" }}
              placeholder="Wager Amount"
              type="number"
              onChange={(e) => this.updateWager(e.target.value)}
            />
            <IconButton
              icon="times-circle"
              color="red"
              size="lg"
              onClick={this.handleIncorrectWager}
            />
            <IconButton
              icon="check-circle"
              color="green"
              size="lg"
              onClick={this.handleCorrectWager}
            />
          </WagerEditor>
        </ScoreEditor>
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
