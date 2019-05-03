import * as React from "react";
import styled from "../../theme/styled-components";
import { overlay } from "../../utilities/mixins";

/**
 * Default properties.
 *
 * @type {Object} icon
 */

type Props = {
  src?: string;
  alt?: string;
  rounded?: boolean;
  ration?: 'square' | '1by1' | '4by3' | '3by2' | '16by9' | '2by1' | '5by4' | '5by3' | '3by1' | '4by5' | '3by4' | '2by3' | '3by5' | '9by16' | '1by2' | '1by3' | string;
  size?: 16 | 24 | 32 | 48 | 64 | 96 | 128 | number;
  preload?: boolean;
  loaded?: boolean;
  onLoad?: () => void;
}

/**
 * A styled image container.
 *
 * @type {Component}
 */

export const StyledContainer = styled.figure<Props>`
  display: ${(props) => props.theme.image.display};
  position: ${(props) => props.theme.image.position};

  img {
    display: ${(props) => props.theme.image.img_display};
    height: ${(props) => props.theme.image.img_height};
    width: ${(props) => props.theme.image.img_width}%;
    z-index: ${(props) => props.theme.image.img_z_index};
    
    ${(props) => props.rounded && `
      border-radius: ${props.theme.radius.large};
    `}
      
    ${(props) => props.preload && `
      position: ${props.theme.image.img_preload_position};
      z-index: ${props.theme.image.img_preload_z_index};
      opacity: ${props.theme.image.img_preload_opacity};
      filter: ${props.theme.image.img_preload_filter};
      transition: ${props.theme.image.img_preload_transition};
    `}

    ${(props) => props.loaded && `
      ${props.preload && `
        opacity: ${props.theme.image.img_loaded_opacity};
      `}
    `}
  }

  ${(props) => props.ration && `
    img {
      ${overlay()};
      height: ${props.theme.image.img_ration_height}%;
      width: ${props.theme.image.img_ration_width}%;
    }
  `}

  ${(props) => (props.ration == 'square' || props.ration == '1by1') && `
    padding-top: ${props.theme.image.img_ration_1by1_pt}%;
  `}

  ${(props) => props.ration == '5by4' && `
    padding-top: ${props.theme.image.img_ration_5by4_pt}%;
  `}

  ${(props) => props.ration == '4by3' && `
    padding-top: ${props.theme.image.img_ration_4by3_pt}%;
  `}

  ${(props) => props.ration == '3by2' && `
    padding-top: ${props.theme.image.img_ration_3by2_pt}%;
  `}

  ${(props) => props.ration == '5by3' && `
    padding-top: ${props.theme.image.img_ration_5by3_pt}%;
  `}

  ${(props) => props.ration == '16by9' && `
    padding-top: ${props.theme.image.img_ration_16by9_pt}%;
  `}

  ${(props) => props.ration == '2by1' && `
    padding-top: ${props.theme.image.img_ration_2by1_pt}%;
  `}

  ${(props) => props.ration == '3by1' && `
    padding-top: ${props.theme.image.img_ration_3by1_pt}%;
  `}

  ${(props) => props.ration == '4by5' && `
    padding-top: ${props.theme.image.img_ration_4by5_pt}%;
  `}

  ${(props) => props.ration == '3by4' && `
    padding-top: ${props.theme.image.img_ration_3by4_pt}%;
  `}

  ${(props) => props.ration == '2by3' && `
    padding-top: ${props.theme.image.img_ration_2by3_pt}%;
  `}

  ${(props) => props.ration == '3by5' && `
    padding-top: ${props.theme.image.img_ration_3by5_pt}%;
  `}

  ${(props) => props.ration == '9by16' && `
    padding-top: ${props.theme.image.img_ration_9by16_pt}%;
  `}

  ${(props) => props.ration == '1by2' && `
    padding-top: ${props.theme.image.img_ration_1by2_pt}%;
  `}

  ${(props) => props.ration == '1by3' && `
    padding-top: ${props.theme.image.img_ration_1by3_pt}%;
  `}

  ${(props) => props.size && `
    height: ${props.size}px;
    width: ${props.size}px;
  `}
`

/**
 * A image.
 *
 * @type {Component}
 */

const Image: React.FC<Props> = (props) => {
  return (
    <StyledContainer {...props}>
      <img src={props.src} alt={props.alt} />
    </StyledContainer>
  )
}

export default Image;