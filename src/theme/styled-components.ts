import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

import { Theme } from ".";

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<Theme>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;
export const GlobalStyle = createGlobalStyle`
body {
  @import url('https://fonts.googleapis.com/css?family=Fira+Sans');
  font-family: ${(props) => props.theme.fonts.fira_sans};

  background-color: #F9FBFD;
}
* {
  outline: none;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
}
`;