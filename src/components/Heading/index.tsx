import styled from "../../theme/styled-components";

interface IProps {
  subtitle?: boolean;
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  weight?: 'lighter' | 'normal' | 'bold';
}

export const Heading = styled.h1<IProps>`
  color: ${(props) => props.theme.colors.first};
  font-size: ${(props) => props.theme.fontSizes[(props.size || 1) - 1]}rem;
  line-height: normal;
  text-transform: lowercase;
  font-weight: ${(props) => props.weight || 'lighter'};

  ${(props) => props.subtitle && `
    font-size: ${props.theme.fontSizes[(props.size || 1) - 1] / 1.5}rem;
  `}
`;