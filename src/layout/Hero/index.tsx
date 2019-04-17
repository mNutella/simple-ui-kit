import styled from "../../theme/styled-components";
import { Container } from "../Container";
import { Navbar } from "../../components/Navbar";
import { media } from "../../utilities/mixins";

/**
 * Default properties.
 *
 * @type {Object} hero
 */

type Props = {
  small?:boolean;
  medium?:boolean;
  large?:boolean;
  halfHeight?:boolean;
  fullHeight?:boolean;
  color?: string; 
}

/**
 * A top container of hero
 *
 * @type {Component}
 */

export const HeroHead = styled.div`
  background-color: black;
  flex-grow: 0;
  flex-shrink: 0;
`;

/**
 * A middle container of hero
 *
 * @type {Component}
 */

export const HeroBody = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  padding: 3rem 1.5rem;
`

/**
 * A bottom container of hero
 *
 * @type {Component}
 */

export const HeroFoot = styled.div`
  background-color: aqua;
  flex-grow: 0;
  flex-shrink: 0;
`;

/**
 * A hero
 *
 * @type {Component}
 */

export const Hero = styled.section<Props>`
  background-color: ${(props) => props.color || "aqua"};
  align-items: ${(props) => props.theme.hero.align_items};
  display: ${(props) => props.theme.hero.display};
  flex-direction: ${(props) => props.theme.hero.flex_direction};
  justify-content: ${(props) => props.theme.hero.justify_content};

  ${Navbar} {
    background: ${(props) => props.theme.hero.navbar_background};
  }

  ${(props) => props.small && `
    ${HeroBody} {
      padding-bottom: ${props.theme.hero.small_herobody_pb}rem;
      padding-top: ${props.theme.hero.small_herobody_pt}rem;
    }
  `}

  ${(props) => props.medium && `
    ${media.tablet`
      ${HeroBody} {
        padding-bottom: ${props.theme.hero.medium_tablet_herobody_pb}rem;
        padding-top: ${props.theme.hero.medium_tablet_herobody_pt}rem;
      }
    `}
  `}

  ${(props) => props.large && `
    ${media.tablet`
      ${HeroBody} {
        padding-bottom: ${props.theme.hero.large_tablet_herobody_pb}rem;
        padding-top: ${props.theme.hero.large_tablet_herobody_pt}rem;
      }
    `}
  `}

  ${(props) => (props.halfHeight || props.fullHeight) && `
    ${HeroBody} {
      align-items: ${props.theme.hero.halfHeight_fullHeight_herobody_align_items};
      display: ${props.theme.hero.halfHeight_fullHeight_herobody_display};
    }

    ${HeroBody} > ${Container} {
      flex-grow: ${props.theme.hero.halfHeight_fullHeight_herobody_container_flex_grow};
      flex-shrink: ${props.theme.hero.halfHeight_fullHeight_herobody_container_flex_shrink};
    }
  `}

  ${(props) => props.halfHeight && `
    min-height: ${props.theme.hero.halfHeight_min_height}vh;
  `}

  ${(props) => props.fullHeight && `
    min-height: ${props.theme.hero.fullHeight_min_height}vh;
  `}
`;