import * as React from "react";
import styled, { keyframes } from "../../theme/styled-components";

/**
 * Default properties.
 *
 * @type {Object} icon
 */

type Props = {
  size?: number;
  color?: string;
}

/**
 * The animation of spinner rotating.
 *
 * @type {Keyframes} spinner
 */

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

/**
 * The animation of bubble scaling.
 *
 * @type {Keyframes} bubble
 */

const bounce = keyframes`
  0%, 100% {
    transform: scale(0);
  }

  50% {
    transform: scale(1);
  }
`;

/**
 * A bubble.
 *
 * @type {Component}
 */

const StyledBubble = styled.div<{size?: number, color?: string}>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  position: ${(props) => props.theme.progressBar.bubble_position};
  top: ${(props) => props.theme.progressBar.bubble_top};
  border-radius: ${(props) => props.theme.radius.rounded};
  background-color: ${(props) => props.color ? props.color : props.theme.colors.second};
`;

/**
 * A spinner.
 *
 * @type {Component}
 */

const StyledSpinner = styled.div<{size?: number}>`
  position: ${(props) => props.theme.progressBar.spinner_position};
  width: ${(props) => props.size}px;
  height: ${(props) => props.size ? props.size * 2 : 25}px;
  margin: ${(props) => props.theme.progressBar.spinner_margin};

  ${StyledBubble} {
    &:last-child {
      top: ${(props) => props.theme.progressBar.spinner_bubble_top};
      bottom: ${(props) => props.theme.progressBar.spinner_bubble_bottom};
    }
  }
`;

/**
 * A progress container.
 *
 * @type {Component}
 */

const StyledContainer = styled.div`
  margin-top: ${(props) => props.theme.progressBar.container_margin_top};
  margin-bottom: ${(props) => props.theme.progressBar.container_margin_bottom};

  ${StyledSpinner} {
    animation: ${rotate} ${(props) => props.theme.progressBar.container_spinner_animation};

    ${StyledBubble}:first-child {
      animation: ${bounce} ${(props) => props.theme.progressBar.container_spinner_bubble_first_animation};
    }

    ${StyledBubble}:last-child {
      animation: ${bounce} ${(props) => props.theme.progressBar.container_spinner_bubble_last_animation};
      animation-delay: ${(props) => props.theme.progressBar.container_spinner_bubble_last_delay};
    }
  }
`;

/**
 * A progress.
 *
 * @type {Component}
 */

const ProgressBar: React.FC<Props> = ({
  size = 25,
}) => {
  return (
    <StyledContainer>
      <StyledSpinner size={size}>
        <StyledBubble size={size} />
        <StyledBubble size={size} />
      </StyledSpinner>
    </StyledContainer>
  )
}

export default ProgressBar;