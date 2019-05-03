import styled from "../../theme/styled-components";
import { media } from "../../utilities/mixins";

/**
 * Default properties.
 *
 * @type {Object} tile
 */

interface IProps {
  kind?: 'ancestor' | 'parent' | 'child';
  vertical?: boolean;
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

/**
 * A tile
 *
 * @type {Component}
 */

// Maybe the 'media.tablet' will be need move to down of the component 
const Tile = styled.div<IProps>`
  align-items: ${(props) => props.theme.tile.align_items};
  display: ${(props) => props.theme.tile.display};
  flex-basis: ${(props) => props.theme.tile.flex_basis};
  flex-grow: ${(props) => props.theme.tile.flex_grow};
  flex-shrink: ${(props) => props.theme.tile.flex_shrink};
  min-height: ${(props) => props.theme.tile.min_height};

  ${(props) => media.tablet`
    ${(props.kind != 'child') && `
      display: ${props.theme.tile.tablet_child_display};
    `}

    ${props.size && `
      flex: ${props.theme.tile.tablet_size_flex};
      width: ${((props.size) / 12) * 100}%;
    `}
  `}

  ${(props) => props.kind == 'ancestor' && `
    margin-left: ${props.theme.tile.ancestor_margin_left}rem;
    margin-right: ${props.theme.tile.ancestor_margin_right}rem;
    margin-top: ${props.theme.tile.ancestor_margin_top}rem;
    &:last-child {
      margin-bottom: ${props.theme.tile.ancestor_last_child}rem;
    }
    &:not(:last-child) {
      margin-bottom: ${props.theme.tile.ancestor_not_last_child}rem;
    }
  `}

  ${(props) => props.kind == 'child' && `
    margin: ${props.theme.tile.child_margin};
  `}

  ${(props) => props.kind == 'parent' && `
    padding: ${props.theme.tile.parent_padding}rem;
  `}

  ${(props) => props.vertical && `
    flex-direction: ${props.theme.tile.vertical_flex_direction};
    ${(props.kind == 'parent') && `
      & > &:not(:last-child) {
        margin-bottom: ${props.theme.tile.vertical_parent_not_last_child_margin_bottom};
      }
    `}
  `}
`;

export default Tile;