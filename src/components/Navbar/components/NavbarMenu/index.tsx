import styled from "../../../../theme/styled-components";
import { media, mediaMax } from "../../../../utilities/mixins";
import { navStartEndMenuShared } from "../../mixins";

/**
 * A navbar menu
 *
 * @type {component}
 */

export const NavbarMenu = styled.div<{active?: boolean}>`
  display: ${(props) => props.theme.navbar.navbarmenu_display};

  ${(props) => mediaMax.desktop`
    background-color: ${props.theme.colors.second};
    box-shadow: ${props.theme.navbar.navbarmenu_max_desktop_box_shadow} ${props.theme.colors.first};
    padding: ${props.theme.navbar.navbarmenu_max_desktop_padding_v}rem ${props.theme.navbar.navbarmenu_max_desktop_padding_h};

    ${props.active && `
      display: ${props.theme.navbar.navbarmenu_max_desktop_active_display};
    `}
  `}

  ${navStartEndMenuShared}
  
  ${media.desktop`
    flex-grow: ${(props) => props.theme.navbar.navbarmenu_desktop_flex_grow};
    flex-shrink: ${(props) => props.theme.navbar.navbarmenu_desktop_flex_shrink};
  `}
`