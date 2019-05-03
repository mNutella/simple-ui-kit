import styled from "../../theme/styled-components";
import theme from "../../theme";

/**
 * Default properties.
 *
 * @type {Object} heading
 */

type Props = {
  color?: keyof typeof theme.colors;
  subtitle?: boolean;
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  weight?: 'lighter' | 'normal' | 'bold';
}

/**
 * A heading.
 *
 * @type {Component}
 */

const Heading = styled.h1<Props>`
  color: ${(props) => props.color ? 
    props.theme.colors[props.color] : 
    props.theme.colors.first};
  font-size: ${(props) => props.theme.fontSizes[(props.size || 1) - 1]}rem;
  line-height: ${(props) => props.theme.heading.line_height};
  text-transform: ${(props) => props.theme.heading.text_transform};
  font-weight: ${(props) => props.weight || 'lighter'};
  font-style: ${(props) => props.theme.heading.font_style};
  letter-spacing: ${(props) => props.theme.heading.letter_spacing};

  ${(props) => props.subtitle && `
    font-size: ${props.theme.fontSizes[(props.size || 1) - 1] / 1.5}rem;
  `}
`;

export default Heading;