import styled from "../../../../theme/styled-components";
import { media } from "../../../../utilities/mixins";
import { navStartEndMenuShared } from "../../mixins";

interface IProps {
  position: 'start' | 'end' | 'center';
}

export const NavbarContainer = styled.div<IProps>`
  ${navStartEndMenuShared}
  ${(props) => media.desktop`
    ${props.position == 'start' && `
      justify-content: flex-start;
      margin-right: auto;
    `}
    ${props.position == 'center' && `
      justify-content: center;
      margin-left: auto;
      margin-right: auto;
    `}
    ${props.position == 'end' && `
      justify-content: flex-end;
      margin-left: auto;
    `}
  `}
`