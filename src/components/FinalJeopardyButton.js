import React from "react";
import { connect } from "react-redux";
import { changeStage, setActiveClue, toggleOverlay } from "../redux/actions";
import { FINAL_JEOPARDY } from "../stageTypes";
import IconButton from "./IconButton";

class FinalJeopardyButton extends React.Component {
  handleClick = () => {
    this.props.changeStage(FINAL_JEOPARDY);
    this.props.setActiveClue({ ...this.props.finalJeopardyClue });
    this.props.toggleOverlay(true);
  };
  render() {
    return (
      <IconButton
        onClick={this.handleClick}
        icon="chevron-circle-right"
        iconColor="#fff"
        text="Final Jeopardy!"
        textColor="#fff"
      />
    );
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
