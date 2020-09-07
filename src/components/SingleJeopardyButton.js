import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { changeStage } from "../redux/actions";
import { SINGLE_JEOPARDY } from "../stageTypes";

class SingleJeopardyButton extends React.Component {
  handleClick = () => this.props.changeStage(SINGLE_JEOPARDY);
  render() {
    return <button onClick={this.handleClick}>Single Jeopardy</button>;
  }
}

export default connect(null, { changeStage })(SingleJeopardyButton);
