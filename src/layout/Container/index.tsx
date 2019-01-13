import styled  from "../../theme/styled-components";
import { media, mediaMax } from "../../utilities/mixins";

interface IProps {
  fluid?: boolean;
  breakpoint?: 'widescreen' | 'fullhd';
}

// If the 'fluid' work incorrect, need to add into a first 'media.desktop' function of 'fluid' properties. 
export const Container = styled.div<IProps>`
  margin: 0 auto;
  position: relative;
  background-color: aqua;
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
      width: auto;
    `}
  `}
  ${({breakpoint}) => mediaMax.fullhd`
    ${(props) => (breakpoint == "fullhd") && `
      max-width: ${props.theme.size.fullhd.width}px;
      width: auto;
    `}
  `}
  ${({fluid}) => media.desktop`
    ${(props) => fluid && `
      margin-left: ${props.theme.indents[0]};
      margin-right: ${props.theme.indents[0]};
      max-width: none;
      width: auto;
    `}
  `}
`;