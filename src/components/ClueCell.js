import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { toggleOverlay, setActiveClue } from "../redux/actions";
import { formatMoney } from "../util";

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
  font-weight: 700;
  color: yellow;
`;

class ClueCell extends React.Component {
  constructor(props) {
    super(props);
    this.state = { viewed: false };
  }

  handleClick = () => {
    if (!this.state.viewed) {
      this.props.setActiveClue(this.props.clue);
      this.props.toggleOverlay(true);
      this.setState({ viewed: true });
    }
  };

  render() {
    const { clue } = this.props;
    return (
      <Clue onClick={this.handleClick} viewed={this.state.viewed}>
        {
          // Display the value of the clue if not previously viewed
          this.state.viewed ? (
            ""
          ) : (
            <ClueLabel>{formatMoney(clue.value)}</ClueLabel>
          )
        }
      </Clue>
    );
  }
}
export default connect(null, { toggleOverlay, setActiveClue })(ClueCell);
