import styled from "../../../../theme/styled-components";
import NavbarItem from "../NavbarItem";
import { brandTabsShared } from "../../mixins";

/**
 * A navbar brand.
 *
 * @type {Component}
 */

const NavbarBrand = styled.div`
  ${brandTabsShared}

  a ${NavbarItem} {
    &:hover {
      background-color: ${(props) => props.theme.colors.transparent};
    }
  }
`;

export default NavbarBrand;