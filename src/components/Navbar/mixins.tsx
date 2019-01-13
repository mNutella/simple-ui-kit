import { css } from "../../theme/styled-components";
import { media } from "../../utilities/mixins";

export const navbar_fixed = css`
  left: 0;
  position: fixed;
  right: 0;
  z-index: ${props => props.theme.navbar.fixed_z};
`

export const brandTabsShared = css`
  align-items: stretch;
  display: flex;
  flex-shrink: 0;
  min-height: ${props => props.theme.navbar.height};
`

export const navStartEndMenuShared = css`
  ${media.desktop`
    align-items: stretch;
    display: flex;
  `}
`