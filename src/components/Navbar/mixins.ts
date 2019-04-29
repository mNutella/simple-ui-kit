import { css } from "../../theme/styled-components";
import { media } from "../../utilities/mixins";

/**
 * A sub style of the navbar item
 *
 * @type {Styles}
 */

export const navbar_fixed = css`
  left: 0;
  position: fixed;
  right: 0;
  z-index: 30;
`

/**
 * A sub style of the navbar brand
 *
 * @type {Styles}
 */

export const brandTabsShared = css`
  align-items: stretch;
  display: flex;
  flex-shrink: 0;
  min-height: 3.25rem;
`

/**
 * A sub style of the nav
 *
 * @type {Styles}
 */

export const navStartEndMenuShared = css`
  ${media.desktop`
    align-items: stretch;
    display: flex;
  `}
`