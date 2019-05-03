import styled from "../../theme/styled-components";
import theme from "../../theme";

/**
 * Default properties.
 *
 * @type {Object} text
 */

type Props = {
  color?: keyof typeof theme.colors;
  subtext?: boolean;
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  weight?: 'lighter' | 'normal' | 'bold';
}

/**
 * A text.
 *
 * @type {Component}
 */

const Text = styled.p<Props>`
  font-family: ${(props) => props.theme.fonts.montserrate};
  color: ${(props) => props.color ? 
    props.theme.colors[props.color] : 
    props.theme.colors.first};
  font-size: ${(props) => props.theme.fontSizes[(props.size || 1) - 1]}rem;
  line-height: ${(props) => props.theme.text.line_height};
  font-weight: ${(props) => props.weight || 'lighter'};
  letter-spacing: ${(props) => props.theme.text.letter_spacing};

  ${(props) => props.subtext && `
    font-size: ${props.theme.fontSizes[(props.size || 1) - 1] / 1.5}rem;
  `}
`;

export default Text;