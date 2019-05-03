import * as React from "react";
import styled from "../../theme/styled-components";

/**
 * Default properties.
 *
 * @type {Object} breadcrumb
 */

type Props = {
  items: string[];
  size?: 'small' | 'medium' | 'large';
}

/**
 * A breadcrumb container.
 *
 * @type {Component}
 */

const StyledContainer = styled.nav<{size?: 'small' | 'medium' | 'large'}>`
  width: ${(props) => props.theme.breadcrumb.width};
  padding-right: ${(props) => props.theme.space[4]}rem;
  padding-left: ${(props) => props.theme.space[4]}rem;
  background-color: ${(props) => props.theme.colors.bg_second};
  box-shadow: ${(props) => props.theme.breadcrumb.box_shadow};
  border-radius: ${(props) => props.theme.radius.rounded};
  white-space: ${(props) => props.theme.breadcrumb.white_space};

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
    display: ${(props) => props.theme.breadcrumb.a_display};
    align-items: ${(props) => props.theme.breadcrumb.a_align_items};
    justify-content: ${(props) => props.theme.breadcrumb.a_justify_content};
    padding: ${(props) => props.theme.space[6]}rem;
    text-transform: ${(props) => props.theme.breadcrumb.a_text_transform};
    letter-spacing: ${(props) => props.theme.breadcrumb.a_letter_spacing}px;

    &:hover {
      cursor: ${(props) => props.theme.breadcrumb.a_hover_cursor};
      color: ${(props) => props.theme.colors.second};
    }
  }

  li {
    display: ${(props) => props.theme.breadcrumb.li_display};
    align-items: ${(props) => props.theme.breadcrumb.li_align_items};

    & + li::before {
      color: ${(props) => props.theme.colors.third};
      content: '\0002f';
    }

    &:last-child {
      cursor: ${(props) => props.theme.breadcrumb.li_last_child_cursor};
      pointer-events: ${(props) => props.theme.breadcrumb.li_last_pointer_events};

      a {color: ${(props) => props.theme.colors.second};}
    }
  }

  ul,
  ol {
    display: ${(props) => props.theme.breadcrumb.ul_ol_display};
    align-items: ${(props) => props.theme.breadcrumb.ul_ol_align_items};
    flex-wrap: ${(props) => props.theme.breadcrumb.ul_ol_flex_wrap};
    justify-content: ${(props) => props.theme.breadcrumb.ul_ol_justify_content};

    svg {
      &:first-child {
        margin-right: ${(props) => props.theme.breadcrumb.ul_ol_svg_first_child_margin_right}em;
      }

      &:last-child {
        margin-left: ${(props) => props.theme.breadcrumb.ul_ol_svg_first_child_margin_left}em;
      }
    }
  }
`;

/**
 * A breadcrumb.
 *
 * @type {Component}
 */

const Breadcrumb: React.FC<Props> = ({
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

export default Breadcrumb;