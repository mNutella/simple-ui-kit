import * as React from "react";
import { useState } from "react";
import styled from "../../../../theme/styled-components";
import { media } from "../../../../utilities/mixins";

interface IProps {
  active?: boolean;
  onClick?: () => void;
}

const StyledNavbarBurger = styled.a<{ active: boolean }>`
  color: ${(props) => props.theme.colors.first};
  cursor: pointer;
  display: block;
  height: ${(props) => props.theme.navbar.height};
  position: relative;
  width: ${(props) => props.theme.navbar.height};

  span {
    background-color: currentColor;
    display: block;
    width: 30px;
    height: 4px;
    border-radius: ${(props) => props.theme.radius.rounded};
    right: 16px;
    position: absolute;
    transform-origin: center;
    transition-duration: ${(props) => props.theme.speed.def};
    transition-property: background-color, opacity, transform;
    transition-timing-function: ease-out;

    &:nth-child(1) {
      top: calc(50% - 7px);
      ${(props) => props.active ? 'transform: translateY(7px) rotate(45deg); width: 30px;' : ''}
    }
    &:nth-child(2) {
      top: calc(50% - 1px);
      ${(props) => props.active ? 'opacity: 0;' : 'width: 25px;'}
    }
    &:nth-child(3) {
      top: calc(50% + 5px);
      ${(props) => props.active ? 'transform: translateY(-5px) rotate(-45deg); width: 30px;' : 'width: 20px;'}
    }
  }

  &:hover {
    opacity: 0.5;
  }

  margin-left: auto;
  
  ${media.desktop`
    display: none;
  `}
`

export const NavbarBurger: React.FC<IProps> = ({
  active = false
}) => {
  const [open, setOpen] = useState(active);
  return (
    <StyledNavbarBurger
      active={open}
      onClick={() => setOpen(!open)}
    >
      <span></span>
      <span></span>
      <span></span>
    </StyledNavbarBurger>
  )
}