import * as React from "react";
import { useState, useRef } from "react";
import styled from "../../theme/styled-components";

import { Icon } from "../../elements/Icon";
import { icons } from "../../elements/Icon";

/**
 * Default properties.
 *
 * @type {Object} input
 */

type Props = {
  placeholder?: string;
  icon?: keyof typeof icons;
  rounded?: boolean;
  maxLength?: number;
  onChange?: (e?: any) => void;
  onClick?: (e?: any) => void;
  onKeyDown?: (e?: any) => void;
}

/**
 * A container of input
 *
 * @type {Component}
 */

const StyledContainer = styled.div<{ focus: boolean, rounded: boolean }>`
  display: ${(props) => props.theme.input.container_display};
  align-items: ${(props) => props.theme.input.container_align_items};
  padding: ${(props) => props.theme.space[3]}rem;
  height: ${(props) => props.theme.input.container_height}rem;
  width: ${(props) => props.focus ? 50 : props.theme.input.container_width}%;
  border: ${(props) => props.theme.input.container_border} ${(props) => props.theme.colors.third};
  border-radius: ${(props) => props.rounded ? props.theme.radius.rounded : props.theme.radius.def};
  transition: ${(props) => props.theme.input.container_transition};

  ${(props) => props.focus && `
    box-shadow: ${props.theme.input.container_focus_box_shadow};
  `}
`

/**
 * A styled input
 *
 * @type {Component}
 */

const StyledInput = styled.input.attrs(({placeholder, maxLength}) => ({
  type: "text",
  maxlength: maxLength,
  placeholder: placeholder,
}))<{rounded: boolean, icon: boolean}>`
  text-transform: ${(props) => props.theme.input.text_transform};
  font-weight: ${(props) => props.theme.input.font_weight};
  line-height: ${(props) => props.theme.input.line_height};
  letter-spacing: ${(props) => props.theme.input.letter_spacing}px;
  width: ${(props) => props.icon ? 'calc(100% - 35px)' : '100%'};
  height: ${(props) => props.theme.input.height}%;
  text-align: ${(props) => props.theme.input.text_align};
  color: ${(props) => props.theme.colors.first};
  font-size: ${(props) => props.theme.fontSizes[5]}rem;
  background-color: ${(props) => props.theme.input.background_color};
  border: ${(props) => props.theme.input.border};
  border-radius: ${(props) => props.rounded ? props.theme.radius.rounded : props.theme.radius.def};

  :focus {
    outline: ${(props) => props.theme.input.focus_outline};
    ::parent {
      margin-top: ${(props) => props.theme.input.focus_parent_margin_top}px;
    }
  }

  ::placeholder {
    font-size: ${(props) => props.theme.fontSizes[6]}rem;
    color: ${(props) => props.theme.colors.second};
  }
`;

/**
 * A input
 *
 * @type {Component}
 */

export const Input: React.FC<Props> = ({
  placeholder,
  icon,
  rounded = false,
  maxLength = 250,
  onChange,
  onClick,
  onKeyDown
}) => {
  const input = useInput(false);

  return (
    <StyledContainer
      onClick={input.handleClick}
      focus={input.isFocus}
      rounded={rounded}>
      <StyledInput
        icon={icon ? true : false}
        placeholder={placeholder}
        rounded={rounded}
        maxLength={maxLength}
        onClick={onClick}
        onChange={onChange}
        onKeyDown={onKeyDown}
        {...input} />
      {icon ? 
        <Icon 
          name={icon}
          size={35}
          fill="white"/> 
        : null}
    </StyledContainer>
  )
}

/**
 * Hook for Input component
 *
 * @type {Function}
 * @return {Object}
 */

const useInput = (initVal: boolean) => {
  const [isFocus, setFocus] = useState(initVal);
  const inputEl = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    toFocus();
  }

  const handleBlur = () => {
    setFocus(false);
  }

  const handleClick = () => {
    toFocus()
  }

  const toFocus = () => {
    if (inputEl && inputEl.current) {
      inputEl.current.focus();
      setFocus(true);
    }
  }

  return {
    isFocus,
    ref: inputEl,
    handleClick,
    onFocus: handleFocus,
    onBlur: handleBlur,
  }
}