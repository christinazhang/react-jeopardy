import React from "react";
import { connect } from "react-redux";
import { changeStage } from "../redux/actions";
import { SINGLE_JEOPARDY } from "../stageTypes";
import IconButton from "./IconButton";

class SingleJeopardyButton extends React.Component {
  handleClick = () => this.props.changeStage(SINGLE_JEOPARDY);
  render() {
    return (
      <IconButton
        onClick={this.handleClick}
        icon="chevron-circle-right"
        iconcolor="#fff"
        text="Jeopardy!"
        textcolor="#fff"
      />
    );
  }
}

export default connect(null, { changeStage })(SingleJeopardyButton);
