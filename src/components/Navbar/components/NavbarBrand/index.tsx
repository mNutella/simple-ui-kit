import styled from "../../../../theme/styled-components";
import { NavbarItem } from "../NavbarItem";
import { brandTabsShared } from "../../mixins";

/**
 * A navbar brand.
 *
 * @type {Component}
 */

export const NavbarBrand = styled.div`
  ${brandTabsShared}

  a ${NavbarItem} {
    &:hover {
      background-color: ${(props) => props.theme.colors.transparent};
    }
  }
`