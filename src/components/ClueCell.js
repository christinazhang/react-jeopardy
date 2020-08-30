import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { toggleOverlay, setOverlayText, viewClue } from "../redux/actions";

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
    background-color: ${(props) => (props.viewed ? "#102278" : "#253ca8")};
    cursor: ${(props) => (props.viewed ? "default" : "pointer")};
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
    if (!this.props.viewed) {
      this.props.setOverlayText(this.props.text);
      this.props.toggleOverlay(true);
      this.props.viewClue(this.props.clueIndex, this.props.categoryIndex);
    }
  };

  render() {
    const { value, viewed } = this.props;
    return (
      <Clue onClick={this.handleClick} viewed={viewed}>
        {
          // Display the value of the clue if not previously viewed
          viewed ? "" : <ClueLabel>{value}</ClueLabel>
        }
      </Clue>
    );
  }
}
export default connect(null, { toggleOverlay, setOverlayText, viewClue })(
  ClueCell
);
