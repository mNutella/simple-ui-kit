import * as React from "react";
import styled, { css } from "../../../../theme/styled-components";
import { media } from "../../../../utilities/mixins";

/**
 * Default properties.
 *
 * @type {Object} navbar item
 */

interface IProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  value?: string;
  expanded?: boolean;
  tab?: boolean;
  active?: boolean;
}

/**
 * A sub style of the navbar item
 *
 * @type {Styles}
 */

const baseStyles = css`
  color: ${(props) => props.theme.colors.second};
  display: ${(props) => props.theme.navbar.navbaritem_ils_display};
  line-height: ${(props) => props.theme.navbar.navbaritem_ils_line_height};
  padding: ${(props) => props.theme.navbar.navbaritem_ils_padding_v}rem ${(props) => props.theme.navbar.navbaritem_ils_padding_h}rem;
  position: ${(props) => props.theme.navbar.navbaritem_ils_position};

  ${media.desktop`
    align-items: ${(props) => props.theme.navbar.navbaritem_ils_desktop_align_items};
    display: ${(props) => props.theme.navbar.navbaritem_ils_desktop_align_display};
  `}
`

/**
 * A sub style of the navbar item
 *
 * @type {Styles}
 */

const interactionStyles = css<IProps>`
  cursor: ${(props) => props.theme.navbar.navbaritem_nlps_cursor};

  &:hover {
    color: ${(props) => props.theme.colors.first};

    svg {
      fill: ${(props) => props.theme.colors.first};
    }
  }

  ${(props) => props.active && `
    color: ${props.theme.colors.first};

    svg {
      fill: ${props.theme.colors.first};
    }
  `}
`

/**
 * A navbar item
 *
 * @type {Component}
 */

export const NavbarItem = styled.a<IProps>`
  display: ${(props) => props.theme.navbar.navbaritem_display};
  flex-grow: ${(props) => props.theme.navbar.navbaritem_flex_grow};
  flex-shrink: ${(props) => props.theme.navbar.navbaritem_flex_shrink};

  ${baseStyles}

  ${interactionStyles}

  img {
    max-height: ${props => props.theme.navbar.navbaritem_img_max_height}rem;
  }

  ${(props) => props.expanded && `
    flex-grow: ${props.theme.navbar.navbaritem_expanded_flex_grow};
    flex-shrink: ${props.theme.navbar.navbaritem_expanded_flex_shrink};
  `}

  ${(props) => props.tab && `
    border-bottom: ${props.theme.navbar.navbaritem_tab_border_bottom};
    min-height: ${props.theme.navbar.navbaritem_tab_min_height}rem;
    padding-bottom: ${props.theme.navbar.navbaritem_tab_padding_bottom};

    &:hover {
      background-color: ${props.theme.colors.first};
      border-bottom-color: ${props.theme.colors.first};
      color: ${props.theme.colors.second};

      svg {
        fill: ${props.theme.colors.second};
      }
    }

    ${props.active && `
      background-color: ${props.theme.colors.first};
      border-bottom-color: ${props.theme.colors.first};
      border-bottom-style: ${props.theme.navbar.navbaritem_tab_active_border_bottom_style};
      border-bottom-width: ${props.theme.navbar.navbaritem_tab_active_border_bottom_width}px;
      color: ${props.theme.colors.second};
      padding-bottom: ${props.theme.navbar.navbaritem_tab_active_padding_bottom};

      svg {
        fill: ${props.theme.colors.first};
      }
    `}
  `}

  ${media.desktop`
    display: ${(props) => props.theme.navbar.navbaritem_desktop_display};
  `}
`;