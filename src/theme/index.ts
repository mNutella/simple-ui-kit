interface ISize {
  width: number;
  height: number;
}

export interface ITheme {
  /**
   * Fonts according to design spec, can be accessed using `fontFamily="key"` in component props
   */
  fonts: {
    [key: string]: string;
  };

  /**
   * Font-sizes according to design spec, can be accessed using `fontSize={index}` in component props
   */
  fontSizes: number[];

  /**
   * Colours according to design spec, can be accessed using `color={index}`/`color={index[]}` and `bg={index[]}`/`bg={index[]}` in component props
   */
  colors: {
    [key: string]: {};
  };

  /**
   * Border-radii according to design spec, can be accessed using `borderRadius={index}` in component props
   */
  radii: string[];

  /**
   * spacing according to design spec, can be accessed using the `m(t|r|b|l)` and `p(t|r|b|l)` props with the corresponding index
   */
  space: string[];

  textStyles?: {
    [key: string]: {};
  };

  colorStyles?: {
    [key: string]: {};
  };

  buttons: {
    [key: string]: {};
  };

  size: {
    [key: string]: ISize;
  };

  indents: string[];

  radius: {
    [key: string]: {};
  };

  speed: {
    [key: string]: number | string;
  };

  navbar: {
    [key: string]: number | string;
  },

  icon: {
    [key: string]: number | string;
  }
}

const theme: ITheme = {
  fonts: {
    sans: 'Rubik, sans-serif',
    mono: '"Roboto Mono", sans-serif',
    robo: 'Roboto',
  },
  fontSizes: [3, 2.5, 2, 1.5, 1.25, 1, 0.75],
  colors: {
    first: "#492919",
    second: "#B42E0B",
    bg: "",
    primary: "#00d1b2",
    info: "#209cee",
    danger: "#ff3860",
  },
  radii: ["3px", "4px", "5px", "6px"],
  space: ["4px", "6px", "8px", "10px", "14px"],
  buttons: {
  },
  size: {
    mobile: { width: 320, height: 588 },
    tablet: { width: 769, height: 1024 },
    desktop: { width: 960, height: 768 },
    widescreen: { width: 1152, height: 800 },
    fullhd: { width: 1344, height: 900 },
  },
  indents: ["64px"],
  radius: {
    def: '4px',
    small: '2px',
    large: '6px',
    rounded: '290486px',
  },
  speed: {
    def: '86ms',
  },
  navbar: {
    z: 30,
    fixed_z: 30,
    item_img_max_height: '1.75rem',
    height: '3.25rem',
    tab_active_border_bottom_width: '3px',
    tab_active_border_bottom_style: 'solid',
    shadow_size: '0 2px 0 0',
    radius: '4px',
    padding_v: '1rem',
    padding_h: '2rem',
  },
  icon: {
    dimensions: '1.5rem',
    dimensions_small: '1rem',
    dimensions_medium: '2rem',
    dimensions_large: '3rem',
  }
}
export default theme;