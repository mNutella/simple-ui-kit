// import * as React from "react";
import styled from "../../theme/styled-components";
import * as Utils from "./mixins";
import { NavbarItem } from "./components/NavbarItem";
import { NavbarMenu } from "./components/NavbarMenu";
import { NavbarContainer } from "./components/NavbarContainer";
import { NavbarBrand } from "./components/NavbarBrand";
import { Container } from "../../layout/Container";
import { media, mediaMax, overflow_touch } from "../../utilities/mixins";

interface IProps {
  color?: string;
  shadow?: boolean;
  transparent?: boolean;
  fixed?: 'top' | 'bottom';
}

// const RNavbar: React.FC<IProps> = (props) => {
//   return (
//     <nav role="navigation" aria-label="main navigation">
//       {/* {
//         props.items ?
//           props.isCenter ?
//             <Container>{props.items.map((link) => <Link name={link} />)}</Container> :
//             props.items.map((link) => <Link name={link} />) :
//           null
//       } */}
//     </nav>
//   )
// }

export const Navbar = styled.nav<IProps>`
  background-color: ${(props) => props.color || 'none'};
  min-height: ${(props) => props.theme.navbar.height};
  position: relative;
  z-index: ${(props) => props.theme.navbar.z};

  & > ${Container} {
    align-items: stretch;
    display: flex;
    min-height: ${(props) => props.theme.navbar.height};
    width: 100%;
  }

  ${(props) => props.shadow && `
    box-shadow: ${props.theme.navbar.shadow_size} ${props.theme.colors.first};
  `}

  ${(props) => (props.fixed == 'bottom' || props.fixed  == 'top') && `
    ${Utils.navbar_fixed}
  `}

  ${(props) => props.fixed == 'bottom' && `
    bottom: 0;
    ${props.shadow && `
      box-shadow: ${props.theme.navbar.shadow_size} ${props.theme.colors.first};
    `}
  `}

  ${(props) => props.fixed == 'top' && `
    top: 0;
  `}

  ${(props) => mediaMax.desktop`
    & > ${Container} {
      display: block;
    }
    ${(props.fixed == 'bottom' || props.fixed  == 'top') && `
      ${Utils.navbar_fixed}
    `}
    ${props.fixed == 'bottom' && `
      bottom: 0;
      ${props.shadow && `
        box-shadow: 0 -2px 3px ${props.theme.colors.first};
      `}
    `}
    ${props.fixed == 'top' && `
      top: 0;
    `}
    ${props.fixed == 'top' && `
      ${NavbarMenu} {
        ${overflow_touch}
        max-height: calc(100vh - ${props.theme.navbar.height});
        overflow: auto;
      }
    `}
  `}

  ${Utils.navStartEndMenuShared}

  ${(props) => media.desktop`
    min-height: ${props.theme.navbar.height};
    &.is-spaced {
      padding: ${`${props.theme.navbar.padding_v} ${props.theme.navbar.padding_h}`};
      ${NavbarContainer} {
        align-items: center;
      }
      a${NavbarItem} {
        border-radius: ${props.theme.radius.def};
      }
    }
    ${props.transparent && `
      a${NavbarItem} {
        &:hover,
        &.is-active {
          background-color: transparent !important;
        }
      }
    `}
    & > ${Container},
    ${Container} > & {
      ${NavbarBrand} {
        margin-left: -.75rem;
      }
      ${NavbarMenu} {
        margin-right: -.75rem;
      }
    }
    ${(props.fixed == 'bottom' || props.fixed  == 'top') && `
      ${Utils.navbar_fixed}
    `}
    ${props.fixed == 'bottom' && `
      bottom: 0;
      ${props.shadow && `
        box-shadow: 0 -2px 3px ${props.theme.colors.first};
      `}
    `}
    ${props.fixed == 'top' && `
      top: 0;
    `}
  `}
`;