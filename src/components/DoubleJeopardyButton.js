import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { changeStage } from "../redux/actions";
import { DOUBLE_JEOPARDY } from "../stageTypes";

class DoubleJeopardyButton extends React.Component {
  handleClick = () => this.props.changeStage(DOUBLE_JEOPARDY);
  render() {
    return <button onClick={this.handleClick}>Double Jeopardy</button>;
  }
}

export default connect(null, { changeStage })(DoubleJeopardyButton);
