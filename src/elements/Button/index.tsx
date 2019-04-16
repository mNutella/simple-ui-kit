import * as React from "react";
import { useState, useEffect } from "react";
import styled from "../../theme/styled-components";
import { ProgressBar } from "../ProgressBar";

/**
 * Default properties.
 *
 * @type {Object} button
 */

type Props = {
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  reversed?: boolean;
  active?: boolean;
  activeColor?: string;
  outlined?: boolean;
  circle?: boolean
  children?: React.ReactNode;
  minW?: number;
  onClick?: () => void;
  onMouseDown?: (event: React.MouseEvent<HTMLDivElement, MouseEvent> | MouseEvent) => void;
}

/**
 * A button container.
 *
 * @type {Component}
 */

const StyledContainer = styled.div<Props>`
  width: ${(props) => props.theme.button.width};
  border-radius: ${(props) => props.theme.radius.def};
  padding: ${(props) => props.theme.space[6]}rem ${(props) => props.theme.space[3]}rem;
  padding-right: ${(props) => props.theme.space[3] - 0.2}rem;
  color: ${(props) => props.theme.colors.second};
  background-color: ${(props) => props.theme.colors.bg_second};
  box-shadow: ${(props) => props.theme.button.box_shadow};
  cursor: ${(props) => props.theme.button.cursor};
  text-align: ${(props) => props.theme.button.text_align};
  white-space: ${(props) => props.theme.button.white_space};
  font-weight: ${(props) => props.theme.button.font_weight};
  text-transform: ${(props) => props.theme.button.text_transform};
  letter-spacing: ${(props) => props.theme.button.letter_spacing}px;
  transition: ${(props) => props.theme.button.transition};

  ${(props) => props.minW && `
    min-width: ${props.theme.button.min_width}px;
  `}

  ${(props) => props.circle && `
    padding: none;
    border-radius: ${props.theme.radius.rounded};
  `}

  ${(props) => props.size === 'small' && `
    font-size: ${props.theme.fontSizes[6]}rem;
  `}

  ${(props) => props.size === 'medium' && `
    font-size: ${props.theme.fontSizes[5]}rem;
  `}

  ${(props) => props.size === 'large' && `
    font-size: ${props.theme.fontSizes[4]}rem;
  `}

  &:hover {
    color: ${(props) => props.theme.colors.first};
    transform: scale(1.1);
  }

  ${(props) => props.outlined && `
    color: ${props.theme.colors.bg_second};
    background-color: transparent;
    border: 4px solid ${props.theme.colors.bg_second};

    &:hover {
      color: ${props.theme.colors.first};
      background-color: ${props.theme.colors.bg_second};
    }
  `}

  ${(props) => props.reversed && `
    color: ${props.theme.colors.bg_second};
    background-color: transparent;

    &:hover {
      color: ${props.theme.colors.bg_second};
    }
  `}

  ${(props) => props.active && `
    pointer-events: ${props.theme.button.outlined_pointer_events};
    color: ${props.activeColor};

    &:hover {
      color: ${props.activeColor};
    }
  `}

  ${(props) => props.loading && `
    justify-content: ${props.theme.button.justify_content};
    pointer-events: ${props.theme.button.loading_pointer_events};
    color: ${props.theme.button.loading_color};

    a {display: ${props.theme.button.loading_display};};

    svg {
      display: ${props.theme.button.loading_display};
      width: ${props.theme.button.loading_width}em;
      height: ${props.theme.button.loading_height}em;
    }
  `}
`;

/**
 * A button.
 *
 * @type {Component}
 */

export const Button: React.FC<Props> = ({
  size,
  minW,
  disabled = false,
  loading = false,
  active = false,
  activeColor = '#FF9F07',
  reversed = false,
  outlined = false,
  circle = false,
  onClick,
  onMouseDown,
  children
}) => {
  const convertedSize = useSizeConverter(size);

  return (
    <StyledContainer 
      size={size}
      minW={minW}
      disabled={disabled}
      loading={loading}
      reversed={reversed}
      active={active}
      activeColor={activeColor}
      outlined={outlined}
      circle={circle}
      onClick={onClick}
      onMouseDown={onMouseDown}>
      <a>{children}</a>
      {loading ? <ProgressBar size={convertedSize} /> : null}
    </StyledContainer>
  )
}

/**
 * Convert the button size to progress-bar size
 *
 * @type {Function}
 * @return {Number}
 */

const useSizeConverter = (sizeStr: string | undefined) => {
  const [size, setSize] = useState(16);

  useEffect(() => {
    if (sizeStr === 'small') {
      setSize(5)
    } else if (sizeStr === 'medium') {
      setSize(9)
    } else if (sizeStr === 'large') {
      setSize(13)
    }
  }, [size])

  return size;
}