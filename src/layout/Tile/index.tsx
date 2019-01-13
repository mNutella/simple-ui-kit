import styled from "../../theme/styled-components";
import { media } from "../../utilities/mixins";

interface IProps {
  kind?: 'ancestor' | 'parent' | 'child';
  vertical?: boolean;
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

// Maybe the 'media.tablet' will be need move down of component 
export const Tile = styled.div<IProps>`
  align-items: stretch;
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  min-height: min-content;

  ${(props) => media.tablet`
    ${(props.kind != 'child') && `
      display: flex;
    `}
    ${props.size && `
      flex: none;
      width: ${((props.size) / 12) * 100}%;
    `}
  `}

  ${(props) => props.kind == 'ancestor' && `
    margin-left: -0.75rem;
    margin-right: -0.75rem;
    margin-top: -0.75rem;
    &:last-child {
      margin-bottom: -0.75rem;
    }
    &:not(:last-child) {
      margin-bottom: 0.75rem;
    }
  `}

  ${(props) => props.kind == 'child' && `
    margin: 0 !important;
  `}

  ${(props) => props.kind == 'parent' && `
    padding: 0.75rem;
  `}

  ${(props) => props.vertical && `
    flex-direction: column;
    ${(props.kind == 'parent') && `
      & > &:not(:last-child) {
        margin-bottom: 1.5rem !important;
      }
    `}
  `}
`