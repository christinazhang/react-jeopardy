import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Icon = styled(FontAwesomeIcon)`
  color: ${(props) => props.iconcolor};
  margin-left: ${(props) => (props.text ? "8px" : "0px")};
`;

const IconButtonContainer = styled.div`
  display: inline-block;
  padding: 12px;
  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.2);
  }
  transition: all 0.2s;
`;

const IconText = styled.div`
  color: ${(props) => props.textcolor};
`;

class IconButton extends React.Component {
  render() {
    const { text, textcolor, size, icon, iconcolor, onClick } = this.props;
    return (
      <IconButtonContainer onClick={onClick}>
        {text ?? <IconText textcolor={textcolor}>{text}</IconText>}
        <Icon iconcolor={iconcolor} size={size} icon={icon} text={text} />
      </IconButtonContainer>
    );
  }
}

export default IconButton;
