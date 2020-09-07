import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { toggleOverlay, setActiveClue } from "../redux/actions";
import { getCurrentStage } from "../redux/selectors";
import { formatMoney } from "../util";
import { SINGLE_JEOPARDY } from "../stageTypes";

const Clue = styled.div`
  flex: 1 0 auto;

  background-color: #102278;
  padding: 8px;
  height: 100px;
  display: flex;
  align-items: center;
  font-size: 2em;

  &:hover {
    background-color: ${(props) => (props.viewed ? "#102278" : "#253ca8")};
    cursor: ${(props) => (props.viewed ? "default" : "pointer")};
  }

  transition: all 0.2s;
`;

const ClueLabel = styled.span`
  width: 100%;
  text-align: center;
  font-weight: 700;
  color: yellow;
`;

class ClueCell extends React.Component {
  constructor(props) {
    super(props);
    const multiplier = this.props.stage === SINGLE_JEOPARDY ? 1 : 2;
    const clueValue = (this.props.clueIndex + 1) * 200 * multiplier;
    this.state = { viewed: false, clueValue: clueValue };
  }

  handleClick = () => {
    if (!this.state.viewed) {
      this.props.setActiveClue(this.props.clue, this.state.clueValue);
      this.props.toggleOverlay(true);
      this.setState({ viewed: true });
    }
  };

  render() {
    return (
      <Clue onClick={this.handleClick} viewed={this.state.viewed}>
        {
          // Display the value of the clue if not previously viewed
          !this.state.viewed && (
            <ClueLabel>{formatMoney(this.state.clueValue)}</ClueLabel>
          )
        }
      </Clue>
    );
  }
}

function mapStateToProps(state) {
  return {
    stage: getCurrentStage(state),
  };
}

export default connect(mapStateToProps, { toggleOverlay, setActiveClue })(
  ClueCell
);
