// import * as React from "react";
import styled from "../../theme/styled-components";

interface IProps {
  small?: boolean;
  medium?: boolean;
  large?: boolean;
}

// const RIcon: React.FC<IProps> = (props) => {
//   return <span {...props}></span>
// }

export const Icon = styled.span<IProps>`
  align-items: center;
  background-color: black;
  display: inline-flex;
  justify-content: center;
  height: ${props => props.theme.icon.dimensions};
  width: ${props => props.theme.icon.dimensions};
  /* Sizes */
  ${(props) => props.small && `
    height: ${props.theme.icon.dimensions_small};
    width: ${props.theme.icon.dimensions_small};
  `}
  ${(props) => props.medium && `
    height: ${props.theme.icon.dimensions_medium};
    width: ${props.theme.icon.dimensions_medium};
  `}
  ${(props) => props.large && `
    height: ${props.theme.icon.dimensions_large};
    width: ${props.theme.icon.dimensions_large};
  `}
`