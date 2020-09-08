import React from "react";
import { connect } from "react-redux";
import { changeStage } from "../redux/actions";
import { DOUBLE_JEOPARDY } from "../stageTypes";
import IconButton from "./IconButton";

class DoubleJeopardyButton extends React.Component {
  handleClick = () => this.props.changeStage(DOUBLE_JEOPARDY);
  render() {
    return (
      <IconButton
        onClick={this.handleClick}
        icon="chevron-circle-right"
        iconcolor="#fff"
        text="Double Jeopardy!"
        textcolor="#fff"
      />
    );
  }
}

export default connect(null, { changeStage })(DoubleJeopardyButton);
