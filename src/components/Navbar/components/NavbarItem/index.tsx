import * as React from "react";
import styled, { css } from "../../../../theme/styled-components";
import { media } from "../../../../utilities/mixins";
import { Icon } from "../../../../elements/Icon";

interface IProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  value?: string;
  expanded?: boolean;
  tab?: boolean;
  active?: boolean;
}

const itemLinkShared = css`
  color: ${props => props.theme.colors.second};
  display: block;
  line-height: 1.5;
  padding: 0.5rem 0.75rem;
  position: relative;
  ${Icon} {
    &:only-child {
      margin-left: -0.25rem;
      margin-right: -0.25rem;
    }
  }
  ${media.desktop`
    align-items: center;
    display: flex;
  `}
`

const NavbarLinkPartialStyles = css<IProps>`
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.second};
  }
  ${props => props.active && `
    color: ${props.theme.colors.first};
  `}
`

// const RNavbarItem: React.FC<IProps> = (props) => {
//   return <a {...props}>{props.children}</a>
// }

export const NavbarItem = styled.a<IProps>`
  display: block;
  flex-grow: 0;
  flex-shrink: 0
  ${itemLinkShared}
  a& {
    ${NavbarLinkPartialStyles}
  }
  img {
    max-height: ${props => props.theme.navbar.item_img_max_height};
  }
  &${({ expanded }) => expanded && `
    flex-grow: 1;
    flex-shrink: 1;
  `}{}
  &${props => props.tab && `
    border-bottom: 1px solid transparent;
    min-height: ${props.theme.navbar.height};
    padding-bottom: calc(0.5rem - 1px);
    &:hover {
      background-color: ${props.theme.colors.first};
      border-bottom-color: ${props.theme.colors.first};
    }
    &.is-active {
      background-color: ${props.theme.colors.first};
      border-bottom-color: ${props.theme.colors.first};
      border-bottom-style: ${props.theme.navbar.tab_active_border_bottom_style};
      border-bottom-width: ${props.theme.navbar.tab_active_border_bottom_width};
      color: ${props.theme.colors.first};
      padding-bottom: calc(0.5rem - ${props.theme.navbar.tab_active_border_bottom_width});
    }
  `}{}
  ${media.desktop`
    display: flex;
  `}
`;