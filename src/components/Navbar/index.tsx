import styled from "../../theme/styled-components";
import * as Utils from "./mixins";
import { NavbarBrand, NavbarContainer, NavbarItem, NavbarMenu } from "./components";
import Container from "../../layout/Container";
import { media, mediaMax, overflow_touch } from "../../utilities/mixins";

/**
 * Default properties.
 *
 * @type {Object} navbar
 */

type Props = {
  color?: string;
  shadow?: boolean;
  transparent?: boolean;
  spaced?: boolean;
  fixed?: 'top' | 'bottom';
}

/**
 * A navbar.
 *
 * @type {Component}
 */

const Navbar = styled.nav<Props>`
  background-color: ${(props) => props.color || 'transparent'};
  min-height: ${(props) => props.theme.navbar.min_height}rem;
  position: ${(props) => props.theme.navbar.position};
  z-index: ${(props) => props.theme.navbar.z_index};

  & > ${Container} {
    align-items: ${(props) => props.theme.navbar.container_align_items};
    display: ${(props) => props.theme.navbar.container_display};
    min-height: ${(props) => props.theme.navbar.container_min_height}rem;
    width: ${(props) => props.theme.navbar.container_width}%;
  }

  ${(props) => props.shadow && `
    box-shadow: ${props.theme.navbar.shadow_box_shadow} ${props.theme.colors.first};
  `}

  ${(props) => (props.fixed == 'bottom' || props.fixed  == 'top') && `
    ${Utils.navbar_fixed}
  `}

  ${(props) => props.fixed == 'bottom' && `
    bottom: ${props.theme.navbar.fixed_bottom_bottom};
    
    ${props.shadow && `
      box-shadow: ${props.theme.navbar.fixed_bottom_shadow_box_shadow} ${props.theme.colors.first};
    `}
  `}

  ${(props) => props.fixed == 'top' && `
    top: ${props.theme.navbar.fixed_top_top};
  `}

  ${(props) => mediaMax.desktop`
    & > ${Container} {
      display: ${props.theme.navbar.max_desktop_container_display};
    }

    ${(props.fixed == 'bottom' || props.fixed  == 'top') && `
      ${Utils.navbar_fixed}
    `}

    ${props.fixed == 'bottom' && `
      bottom: ${props.theme.navbar.max_desktop_fixed_bottom_bottom};

      ${props.shadow && `
        box-shadow: ${props.theme.navbar.max_desktop_fixed_bottom_box_shadow} ${props.theme.colors.first};
      `}
    `}

    ${props.fixed == 'top' && `
      top: ${props.theme.navbar.max_desktop_fixed_top_top};

      ${NavbarMenu} {
        ${overflow_touch}

        max-height: calc(100vh - ${props.theme.navbar.height});
        overflow: ${props.theme.navbar.max_desktop_fixed_top_overflow};
      }
    `}
  `}

  ${Utils.navStartEndMenuShared}

  ${(props) => media.desktop`
    min-height: ${props.theme.navbar.desktop_min_height}rem;

    ${props.spaced && `
      padding: ${props.theme.navbar.desktop_spaced_padding_v} ${props.theme.navbar.desktop_spaced_padding_h};

      ${NavbarContainer} {
        align-items: ${props.theme.navbar.desktop_navbarcontainer_align_items};
      }

      a ${NavbarItem} {
        border-radius: ${props.theme.radius.def};
      }
    `}
    
    & > ${Container},
    ${Container} > & {
      ${NavbarBrand} {
        margin-left: ${(props) => props.theme.navbar.container_navbarbrand_margin_left}rem;
      }

      ${NavbarMenu} {
        margin-right: ${(props) => props.theme.navbar.container_navbarmenu_margin_right}rem;
      }
    }
  `}
`;

export * from "./components";
export default Navbar;