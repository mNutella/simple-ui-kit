import styled from "../../../../theme/styled-components";
import { media, mediaMax } from "../../../../utilities/mixins";
import { navStartEndMenuShared } from "../../mixins";

export const NavbarMenu = styled.nav<{active?: boolean}>`
  display: none;
  ${(props) => mediaMax.desktop`
    background-color: ${props.theme.colors.second};
    box-shadow: 0 8px 16px ${props.theme.colors.first};
    padding: 0.5rem 0;
    ${props.active && `
      display: block;
    `}
  `}
  ${navStartEndMenuShared}
  ${media.desktop`
    flex-grow: 1;
    flex-shrink: 0;
  `}
`