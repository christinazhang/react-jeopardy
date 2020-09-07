import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { toggleOverlay, setActiveClue, setClueViewed } from "../redux/actions";
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
  getClueValue() {
    const { stage, clueIndex } = this.props;
    const multiplier = stage === SINGLE_JEOPARDY ? 1 : 2;
    return (clueIndex + 1) * 200 * multiplier;
  }

  handleClick = () => {
    const { clue, clueIndex, categoryIndex } = this.props;
    if (!this.props.clue.viewed) {
      this.props.setActiveClue(clue, this.getClueValue());
      this.props.setClueViewed(categoryIndex, clueIndex);
      this.props.toggleOverlay(true);
    }
  };

  render() {
    let viewed = this.props.clue.viewed;
    return (
      <Clue onClick={this.handleClick} viewed={viewed}>
        {
          // Display the value of the clue if not previously viewed
          !viewed && <ClueLabel>{formatMoney(this.getClueValue())}</ClueLabel>
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

export default connect(mapStateToProps, {
  toggleOverlay,
  setActiveClue,
  setClueViewed,
})(ClueCell);
