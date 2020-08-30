import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { toggleOverlay } from "../redux/actions";

const OverlayContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  background-color: #102278;
  height: 100%;
  width: 100%;
  transition: all 0.2s;
  color: #fff;
`;

const OverlayContent = styled.div`
  width: 100%;
  text-align: center;
`;

class Overlay extends React.Component {
  handleClick = () => {
    this.props.toggleOverlay(false);
  };

  render() {
    return (
      <OverlayContainer>
        <OverlayContent>
          <div>{this.props.overlayText}</div>
          <button onClick={this.handleClick}>Close</button>
        </OverlayContent>
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
