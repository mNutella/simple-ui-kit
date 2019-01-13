// import * as React from "react";
import styled from "../../theme/styled-components";
import { Container } from "../Container";
import { Navbar } from "../../components/Navbar";
import { media } from "../../utilities/mixins";

interface IProps {
  small?:boolean;
  medium?:boolean;
  large?:boolean;
  halfHeight?:boolean;
  fullHeight?:boolean;
  color?: string; 
}

export const HeroBody = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  padding: 3rem 1.5rem;
`

export const Hero = styled.section<IProps>`
  background-color: ${(props) => props.color || "aqua"};
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${Navbar} {
    background: none;
  }
  ${(props) => props.small && `
    ${HeroBody} {
      padding-bottom: 1.5rem;
      padding-top: 1.5rem;
    }
  `}
  ${(props) => props.medium && `
    ${media.tablet`
      ${HeroBody} {
        padding-bottom: 9rem;
        padding-top: 9rem;
      }
    `}
  `}
  ${(props) => props.large && `
    ${media.tablet`
      ${HeroBody} {
        padding-bottom: 18rem;
        padding-top: 18rem;
      }
    `}
  `}
  ${(props) => (props.halfHeight || props.fullHeight) && `
    ${HeroBody} {
      align-items: center;
      display: flex;
    }
    ${HeroBody} > ${Container} {
      flex-grow: 1;
      flex-shrink: 1;
    }
  `}
  ${(props) => props.halfHeight && `
    min-height: 50vh;
  `}
  ${(props) => props.fullHeight && `
    min-height: 100vh;
  `}
`;

// Containers
export const HeroHead = styled.div`
  background-color: black;
  flex-grow: 0;
  flex-shrink: 0;
`;

export const HeroFoot = styled.div`
  background-color: aqua;
  flex-grow: 0;
  flex-shrink: 0;
`;