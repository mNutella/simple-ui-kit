import styled  from "../../theme/styled-components";
import { media, mediaMax } from "../../utilities/mixins";

/**
 * Default properties.
 *
 * @type {Object} container
 */

type Props = {
  fluid?: boolean;
  breakpoint?: 'widescreen' | 'fullhd';
}

/**
 * A container.
 *
 * @type {Component}
 */

// If the 'fluid' work incorrect, then need to add into a first 'media.desktop' function of 'fluid' properties. 
const Container = styled.div<Props>`
  margin: ${(props) => props.theme.container.margin};
  position: ${(props) => props.theme.container.position};

  ${(props) => media.desktop`
    max-width: ${props.theme.size.desktop.width}px;
    width: ${props.theme.size.desktop.width}px;
  `}

  ${(props) => media.widescreen`
    max-width: ${props.theme.size.widescreen.width}px;
    width: ${props.theme.size.widescreen.width}px;
  `}

  ${(props) => media.fullhd`
    max-width: ${props.theme.size.fullhd.width}px;
    width: ${props.theme.size.fullhd.width}px;
  `}

  ${({breakpoint}) => mediaMax.widescreen`
    ${(props) => (breakpoint == "widescreen") && `
      max-width: ${props.theme.size.widescreen.width}px;
      width: ${props.theme.container.widescreen_width};
    `}
  `}

  ${({breakpoint}) => mediaMax.fullhd`
    ${(props) => (breakpoint == "fullhd") && `
      max-width: ${props.theme.size.fullhd.width}px;
      width: ${props.theme.container.fullhd_width};
    `}
  `}

  ${({fluid}) => media.desktop`
    ${(props) => fluid && `
      margin: ${props.theme.container.desktop_margin};
      max-width: ${props.theme.container.desktop_max_width};
      width: ${props.theme.container.desktop_width};
    `}
  `}
`;

export default Container;