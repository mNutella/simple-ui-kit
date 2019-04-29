import * as React from "react";
import styled from "../../theme/styled-components";

interface IProps {
  items: string[];
  size?: 'small' | 'medium' | 'large';
}

const StyledContainer = styled.nav<{size?: 'small' | 'medium' | 'large'}>`
  width: fit-content;
  padding-right: ${(props) => props.theme.space[4]}rem;
  padding-left: ${(props) => props.theme.space[4]}rem;
  background-color: ${(props) => props.theme.colors.bg_second};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: ${(props) => props.theme.radius.rounded};
  white-space: nowrap;

  ${(props) => props.size === 'small' && `
    font-size: ${props.theme.fontSizes[6]}rem;
    li + li::before {
      font-size: ${props.theme.fontSizes[6] * 1.5}rem;
    }
  `}

  ${(props) => props.size === 'medium' && `
    font-size: ${props.theme.fontSizes[5]}rem;
    li + li::before {
      font-size: ${props.theme.fontSizes[5] * 1.5}rem;
    }
  `}

  ${(props) => props.size === 'large' && `
    font-size: ${props.theme.fontSizes[4]}rem;
    li + li::before {
      font-size: ${props.theme.fontSizes[4] * 1.5}rem;
    }
  `}

  a {
    color: ${(props) => props.theme.colors.first};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${(props) => props.theme.space[6]}rem;
    text-transform: uppercase;
    letter-spacing: 4px;
    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.colors.second};
    }
  }

  li {
    display: flex;
    align-items: center;

    & + li::before {
      color: ${(props) => props.theme.colors.third};
      content: "\0002f";
    }

    &:last-child {
      cursor: default;
      pointer-events: none;
      a {color: ${(props) => props.theme.colors.second};}
    }
  }

  ul,
  ol {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: flex-start;

    svg {
      &:first-child {
        margin-right: 0.5em;
      }

      &:last-child {
        margin-left: 0.5em;
      }
    }
  }
`;

export const Breadcrumb: React.FC<IProps> = ({
  items,
  size
}) => {
  return (
    <StyledContainer size={size}>
      <ul>
        {items.map((name, index) => 
          <li key={`${name}_${index}`}><a>{name}</a></li>
          )}
      </ul>
    </StyledContainer>
  )
}