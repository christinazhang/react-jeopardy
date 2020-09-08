import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { changeStage, setActiveClue, toggleOverlay } from "../redux/actions";
import { FINAL_JEOPARDY } from "../stageTypes";

class FinalJeopardyButton extends React.Component {
  handleClick = () => {
    this.props.changeStage(FINAL_JEOPARDY);
    this.props.setActiveClue({ ...this.props.finalJeopardyClue });
    this.props.toggleOverlay(true);
  };
  render() {
    return <button onClick={this.handleClick}>Final Jeopardy</button>;
  }
}

function mapStateToProps(state) {
  return {
    finalJeopardyClue: state.game.finalJeopardyClue,
  };
}
export default connect(mapStateToProps, {
  changeStage,
  setActiveClue,
  toggleOverlay,
})(FinalJeopardyButton);
