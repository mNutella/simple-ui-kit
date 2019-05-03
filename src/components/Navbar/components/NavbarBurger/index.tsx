import * as React from "react";
import { useState } from "react";
import styled from "../../../../theme/styled-components";
import { media } from "../../../../utilities/mixins";

/**
 * Default properties.
 *
 * @type {Object} navbar burger
 */

type Props = {
  active?: boolean;
  onClick?: () => void;
}

/**
 * A navbar burger container
 *
 * @type {Component}
 */

const StyledNavbarBurger = styled.a<{ active: boolean }>`
  color: ${(props) => props.theme.colors.first};
  cursor: ${(props) => props.theme.navbar.navbarburger_cursor};
  display: ${(props) => props.theme.navbar.navbarburger_display};
  height: ${(props) => props.theme.navbar.navbarburger_height}rem;
  position: ${(props) => props.theme.navbar.navbarburger_position};
  width: ${(props) => props.theme.navbar.navbarburger_width}rem;

  span {
    background-color: ${(props) => props.theme.navbar.navbarburger_span_bg_color};
    display: ${(props) => props.theme.navbar.navbarburger_span_display};
    width: ${(props) => props.theme.navbar.navbarburger_span_width}px;
    height: ${(props) => props.theme.navbar.navbarburger_span_height}px;
    border-radius: ${(props) => props.theme.radius.rounded};
    right: ${(props) => props.theme.navbar.navbarburger_span_right}px;
    position: ${(props) => props.theme.navbar.navbarburger_span_position};
    transform-origin: ${(props) => props.theme.navbar.navbarburger_span_transform_origin};
    transition-duration: ${(props) => props.theme.navbar.navbarburger_span_transform_duration}ms;
    transition-property: ${(props) => props.theme.navbar.navbarburger_span_transition_property};
    transition-timing-function: ${(props) => props.theme.navbar.navbarburger_span_transition_timing_function};

    &:nth-child(1) {
      top: ${(props) => props.theme.navbar.navbarburger_span_child_first};
      ${(props) => props.active ? 'transform: translateY(7px) rotate(45deg); width: 30px;' : ''}
    }

    &:nth-child(2) {
      top: ${(props) => props.theme.navbar.navbarburger_span_child_second};
      ${(props) => props.active ? 'opacity: 0;' : 'width: 25px;'}
    }

    &:nth-child(3) {
      top: ${(props) => props.theme.navbar.navbarburger_span_child_third};
      ${(props) => props.active ? 'transform: translateY(-5px) rotate(-45deg); width: 30px;' : 'width: 20px;'}
    }
  }

  &:hover {
    opacity: ${(props) => props.theme.navbar.navbarburger_hover_opacity};
  }

  margin-left: ${(props) => props.theme.navbar.navbarburger_margin_left};
  
  ${media.desktop`
    display: ${(props) => props.theme.navbar.navbarburger_desktop_display};
  `}
`

/**
 * A navbar burger.
 *
 * @type {Component}
 */

export const NavbarBurger: React.FC<Props> = ({
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