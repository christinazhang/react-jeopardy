import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { toggleOverlay, setOverlayText } from "../redux/actions";

const Clue = styled.div`
  flex: 1 0 auto;

  background-color: #102278;
  border: 1px solid #fff;
  padding: 8px;
  height: 100px;
  display: flex;
  align-items: center;
  font-size: 2em;

  &:hover {
    background-color: #253ca8;
    cursor: pointer;
  }

  transition: all 0.2s;
`;

const ClueLabel = styled.span`
  width: 100%;
  text-align: center;
  color: #fff;
`;

class ClueCell extends React.Component {
  handleClick = () => {
    this.props.setOverlayText(this.props.text);
    this.props.toggleOverlay(true);
  };

  render() {
    return (
      <Clue onClick={this.handleClick}>
        <ClueLabel>{this.props.value}</ClueLabel>
      </Clue>
    );
  }
}
export default connect(null, { toggleOverlay, setOverlayText })(ClueCell);
