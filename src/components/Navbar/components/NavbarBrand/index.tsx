import styled from "../../../../theme/styled-components";
import { NavbarItem } from "../NavbarItem";
import { brandTabsShared } from "../../mixins";

export const NavbarBrand = styled.div`
  ${brandTabsShared}
  a${NavbarItem} {
    &:hover {
      background-color: transparent;
    }
  }
`