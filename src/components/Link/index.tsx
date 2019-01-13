import * as React from "react";
import styled from "../../theme/styled-components";

interface IProps {
  name: string;
}

const StyledLink = styled.a`
  line-height: 1.5;
  padding: .5rem .75rem;
  position: relative;
`;

export const Link: React.FC<IProps> = ({name: string}) => {
  return(
    <StyledLink>
      {name}
    </StyledLink>
  )
}