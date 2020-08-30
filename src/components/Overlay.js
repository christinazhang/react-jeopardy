import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { toggleOverlay } from "../redux/actions";

const OverlayContainer = styled.div`
  position: fixed;
  background-color: #333;
  height: 100%;
  width: 100%;
  transition: all 0.2s;
  color: #fff;
`;

class Overlay extends React.Component {
  handleClick = () => {
    this.props.toggleOverlay(false);
  };

  render() {
    return (
      <OverlayContainer>
        <div>{this.props.overlayText}</div>
        <button onClick={this.handleClick}>Close</button>
      </OverlayContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    overlayText: state.overlay.text,
  };
}

export default connect(mapStateToProps, { toggleOverlay })(Overlay);
