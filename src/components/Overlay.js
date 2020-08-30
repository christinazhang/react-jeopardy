import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { toggleOverlay } from "../redux/actions";

const OverlayContainer = styled.div`
  position: absolute;
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

const Clue = styled.div`
  font-size: 3em;
  font-weight: 700;
  padding: 72px;
`;

class Overlay extends React.Component {
  handleClick = () => {
    this.props.toggleOverlay(false);
  };

  render() {
    return (
      <OverlayContainer onClick={this.handleClick}>
        <OverlayContent>
          <Clue>{this.props.overlayText.toUpperCase()}</Clue>
          (Click anywhere to close)
        </OverlayContent>
      </OverlayContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    overlayText: state.overlay.activeClue.text,
  };
}

export default connect(mapStateToProps, { toggleOverlay })(Overlay);
