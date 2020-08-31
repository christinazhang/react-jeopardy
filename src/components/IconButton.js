import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Button = styled.div``;

const Icon = styled(FontAwesomeIcon)`
  color: ${(props) => props.color};
  padding: 12px;
  &:hover {
    cursor: pointer;
  }
`;

class IconButton extends React.Component {
  render() {
    return <Icon {...this.props} />;
  }
}

export default IconButton;
