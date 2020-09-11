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
  text-align: center;
`;

const ScoreLabel = styled.div`
  padding: 5px 5px;
  background-color: #102278;
  color: ${(props) => (props.score >= 0 ? "white" : "red")};
  font-weight: 700;
  font-size: 2em;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  border: 8px solid rgba(0, 0, 0, 0.75);
`;

const Name = styled.div`
  padding: 5px 5px;
  background-color: #102278;
  color: white;
  border: 8px solid rgba(0, 0, 0, 0.75);
  border-top: 0px;
`;

const DisplayPicture = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ScoreEditor = styled.div`
  margin-top: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 12px 4px;
`;

const InputModes = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

class ContestantCell extends React.Component {
  constructor(props) {
    super(props);
    this.state = { wager: 0, selectedOption: "lastClue" };
  }

  handleScoreIncrease = () => {
    const value =
      this.state.selectedOption === "lastClue"
        ? this.props.currentClueValue
        : this.state.wager;
    this.props.updateScore(this.props.index, value);
  };

  handleScoreDecrease = () => {
    const value =
      this.state.selectedOption === "lastClue"
        ? this.props.currentClueValue
        : this.state.wager;
    this.props.updateScore(this.props.index, -1 * value);
  };

  updateWager = (wager) => {
    this.setState({ wager });
  };

  handleOptionChange = (e) => {
    this.setState({ selectedOption: e.target.value });
  };

  render() {
    const { contestant } = this.props;
    const score = contestant.score ?? 0;
    return (
      <Container>
        {/* <DisplayPicture src={contestant.imgLink}></DisplayPicture> */}
        <ScoreLabel score={score}>{formatMoney(score)}</ScoreLabel>
        <Name>{contestant.name}</Name>
        <ScoreEditor>
          <InputModes>
            <label>
              <input
                type="radio"
                value="lastClue"
                onChange={this.handleOptionChange}
                checked={this.state.selectedOption === "lastClue"}
              />
              Last clue value
            </label>
            <label>
              <input
                type="radio"
                value="wager"
                onChange={this.handleOptionChange}
                checked={this.state.selectedOption === "wager"}
              />
              <input
                style={{ display: "inline-block" }}
                placeholder="Wager Amount"
                type="number"
                onChange={(e) => this.updateWager(e.target.value)}
                disabled={!(this.state.selectedOption === "wager")}
              />
            </label>
          </InputModes>

          <div>
            <IconButton
              icon="times-circle"
              iconcolor="red"
              size="lg"
              onClick={this.handleScoreDecrease}
            />
            <IconButton
              icon="check-circle"
              iconcolor="green"
              size="lg"
              onClick={this.handleScoreIncrease}
            />
          </div>
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
