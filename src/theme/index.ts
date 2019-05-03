type Size = {
  width: number;
  height: number;
}

export type Theme = {
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
   * Spacing according to design spec, can be accessed using the `m(t|r|b|l)` and `p(t|r|b|l)` props with the corresponding index
   */

  space: number[];

  textStyles?: {
    [key: string]: {};
  };

  colorStyles?: {
    [key: string]: {};
  };

  size: {
    [key: string]: Size;
  };

  radius: {
    [key: string]: {};
  };


  /**
   * The easily access to style of components
   * 
   */

  navbar: {
    [key: string]: number | string;
  };

  breadcrumb: {
    [key: string]: number | string;
  };

  profiler: {
    [key: string]: number | string;
  };


  /**
   * The easily access to style of elements
   * 
   */

  heading: {
    [key: string]: number | string;
  };

  text: {
    [key: string]: number | string;
  };

  icon: {
    [key: string]: number | string;
  };

  button: {
    [key: string]: {};
  };

  image: {
    [key: string]: {};
  };

  progressBar: {
    [key: string]: {};
  };

  /**
   * The easily access to style of layouts
   * 
   */

  container: {
    [key: string]: {};
  };

  hero: {
    [key: string]: {};
  };

  tile: {
    [key: string]: {};
  };

  /**
   * The easily access to style of form
   * 
   */

  input: {
    [key: string]: {};
  };
}

const theme: Theme = {
  fonts: {
    fira_sans: 'Rubik, sans-serif',
    montserrate: 'Montserrat, sans-serif',
  },
  fontSizes: [3, 2.5, 2, 1.5, 1.25, 1, 0.75],
  colors: {
    first: '#EDE9F3',
    second: '#6F48A7',
    third: '#FF9F07',
    bg: '#100028',
    bg_second: '#271441',
    transparent: 'transparent',
  },
  space: [3, 2.5, 2, 1.5, 1.25, 1, 0.75],
  size: {
    mobile: { width: 320, height: 588 },
    tablet: { width: 769, height: 1024 },
    desktop: { width: 960, height: 768 },
    widescreen: { width: 1152, height: 800 },
    fullhd: { width: 1344, height: 900 },
  },
  radius: {
    def: '4px',
    small: '2px',
    large: '25px',
    rounded: '290486px',
  },

  // Components
  heading: {
    line_height: 'normal',
    text_transform: 'uppercase',
    font_style: 'normal',
    letter_spacing: '4px'
  },
  text: {
    line_height: '1.5',
    letter_spacing: '2px'
  },
  navbar: {
    min_height: 3.25,
    position: 'relative',
    z_index: 30,

    container_align_items: 'stretch',
    container_display: 'flex',
    container_min_height: 3.25,
    container_width: 100,
    container_navbarbrand_margin_left: -.75,
    container_navbarmenu_margin_right: -.75,

    shadow_box_shadow: '0 2px 0 0',

    fixed_bottom_bottom: 0,
    fixed_bottom_shadow_box_shadow: '0 2px 0 0',
    fixed_top_top: 0,

    max_desktop_container_display: 'block',
    max_desktop_fixed_bottom_bottom: 0,
    max_desktop_fixed_bottom_box_shadow: '0 -2px 3px',
    max_desktop_fixed_top_top: 0,
    max_desktop_fixed_top_overflow: 'auto',

    desktop_min_height: 3.25,
    desktop_spaced_padding_v: 1,
    desktop_spaced_padding_h: 2,
    desktop_navbarcontainer_align_items: 'center',

    navbaritem_ils_display: 'block',
    navbaritem_ils_line_height: 1.5,
    navbaritem_ils_padding_v: 0.5,
    navbaritem_ils_padding_h: 0.75,
    navbaritem_ils_position: 'relative',
    navbaritem_ils_desktop_align_items: 'center',
    navbaritem_ils_desktop_align_display: 'flex',
    navbaritem_nlps_cursor: 'pointer',
    navbaritem_display: 'block',
    navbaritem_flex_grow: 0,
    navbaritem_flex_shrink: 0,
    navbaritem_img_max_height: 1.75,
    navbaritem_expanded_flex_grow: 1,
    navbaritem_expanded_flex_shrink: 1,
    navbaritem_tab_border_bottom: '1px solid transparent',
    navbaritem_tab_min_height: 3.25,
    navbaritem_tab_padding_bottom: 'calc(0.5rem - 1px)',
    navbaritem_tab_active_border_bottom_style: 'solid',
    navbaritem_tab_active_border_bottom_width: 3,
    navbaritem_tab_active_padding_bottom: 'calc(0.5rem - 3px)',
    navbaritem_desktop_display: 'flex',

    navbarmenu_display: 'none',
    navbarmenu_max_desktop_box_shadow: '0 8px 16px',
    navbarmenu_max_desktop_padding_v: 0.5,
    navbarmenu_max_desktop_padding_h: 0,
    navbarmenu_max_desktop_active_display: 'block',
    navbarmenu_desktop_flex_grow: 1,
    navbarmenu_desktop_flex_shrink: 0,

    navbarburger_cursor: 'pointer',
    navbarburger_display: 'block',
    navbarburger_height: 3.25,
    navbarburger_position: 'relative',
    navbarburger_width: 3.25,
    navbarburger_span_bg_color: 'currentColor',
    navbarburger_span_display: 'block',
    navbarburger_span_width: 30,
    navbarburger_span_height: 4,
    navbarburger_span_right: 16,
    navbarburger_span_position: 'absolute',
    navbarburger_span_transform_origin: 'center',
    navbarburger_span_transform_duration: 86,
    navbarburger_span_transition_property: 'background-color, opacity, transform',
    navbarburger_span_transition_timing_function: 'ease-out',
    navbarburger_span_child_first: 'calc(50% - 7px)',
    navbarburger_span_child_second: 'calc(50% - 1px)',
    navbarburger_span_child_third: 'calc(50% + 5px)',
    navbarburger_hover_opacity: 0.5,
    navbarburger_margin_left: 'auto',
    navbarburger_desktop_display: 'none',

    navbar_fixed_left: 0,
    navbar_fixed_position: 'fixed',
    navbar_fixed_right: 0,
    navbar_fixed_z_index: 30,

    brand_tabs_shared_align_items: 'stretch',
    brand_tabs_shared_display: 'flex',
    brand_tabs_shared_flex_shrink: 0,
    brand_tabs_shared_min_height: 3.25,

    nav_start_end_menu_shared_desktop_align_items: 'stretch',
    nav_start_end_menu_shared_desktop_display: 'flex',
  },
  profiler: {
    border: '4px',
    border_style: 'solid'
  },
  breadcrumb: {
    width: 'fit-content',
    box_shadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
    white_space: 'nowrap',
    a_display: 'flex',
    a_align_items: 'center',
    a_justify_content: 'center',
    a_text_transform: 'uppercase',
    a_letter_spacing: 4,
    a_hover_cursor: 'pointer',
    li_display: 'flex',
    li_align_items: 'center',
    li_last_child_cursor: 'default',
    li_last_pointer_events: 'none',
    ul_ol_display: 'flex',
    ul_ol_align_items: 'flex-start',
    ul_ol_flex_wrap: 'wrap',
    ul_ol_justify_content: 'flex-start',
    ul_ol_svg_first_child_margin_right: 0.5,
    ul_ol_svg_first_child_margin_left: 0.5,
  },

  // Elements
  button: {
    width: 'fit-content',
    min_width: '150',
    box_shadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
    cursor: 'pointer',
    justify_content: 'center',
    text_align: 'center',
    font_weight: 100,
    text_transform: 'uppercase',
    letter_spacing: 4,
    transition: 'transform .2s',
    outlined_pointer_events: 'none',
    loading_pointer_events: 'none',
    loading_color: 'transparent !important',
    loading_display: 'none',
    loading_width: 1.5,
    loading_height: 1.5,
    loading_margin_left: -0.375,
    loading_margin_right: 0.1875
  },
  icon: {
    dimensions: '1.5rem',
    dimensions_small: '1rem',
    dimensions_medium: '2rem',
    dimensions_large: '3rem'
  },
  image: {
    display: 'block',
    position: 'relative',
    img_display: 'block',
    img_height: 'auto',
    img_width: 100,
    img_z_index: 3,
    img_preload_position: 'absolute',
    img_preload_z_index: 2,
    img_preload_opacity: 1,
    img_preload_filter: 'blur(5px)',
    img_preload_transition: 'opacity .3s',
    img_loaded: 0,
    img_ration_height: 100,
    img_ration_width: 100,
    img_ration_1by1_pt: 100,
    img_ration_5by4_pt: 80,
    img_ration_4by3_pt: 75,
    img_ration_3by2_pt: 66.6666,
    img_ration_5by3_pt: 60,
    img_ration_16by9_pt: 56.25,
    img_ration_2by1_pt: 50,
    img_ration_3by1_pt: 33.3333,
    img_ration_4by5_pt: 125,
    img_ration_3by4_pt: 133.3333,
    img_ration_2by3_pt: 150,
    img_ration_3by5_pt: 166.6666,
    img_ration_9by16_pt: 177.7777,
    img_ration_1by2_pt: 200,
    img_ration_1by3_pt: 300
  },
  progressBar: {
    bubble_position: 'absolute',
    bubble_top: 0,
    spinner_position: 'relative',
    spinner_margin: 0,
    spinner_bubble_top: 'auto',
    spinner_bubble_bottom: 0,
    container_margin_top: 'auto',
    container_margin_bottom: 0,
    container_spinner_animation: '2s linear infinite',
    container_spinner_bubble_first_animation: '2s ease-in-out infinite',
    container_spinner_bubble_last_animation: '2s ease-in-out infinite',
    container_spinner_bubble_last_delay: '-1s'
  },

  // Layouts
  container: {
    margin: '0 auto',
    position: 'relative',
    widescreen_width: 'auto',
    fullhd_width: 'auto',
    desktop_margin: '0 64px',
    desktop_max_width: 'none',
    desktop_width: 'auto',
  },
  hero: {
    align_items: 'stretch',
    display: 'flex',
    flex_direction: 'column',
    justify_content: 'space-between',
    navbar_background: 'none',
    small_herobody_pb: 1.5,
    small_herobody_pt: 1.5,
    medium_tablet_herobody_pb: 9,
    medium_tablet_herobody_pt: 9,
    large_tablet_herobody_pb: 18,
    large_tablet_herobody_pt: 18,
    halfHeight_fullHeight_herobody_align_items: 'center',
    halfHeight_fullHeight_herobody_display: 'flex',
    halfHeight_fullHeight_herobody_container_flex_grow: 1,
    halfHeight_fullHeight_herobody_container_flex_shrink: 1,
    halfHeight_min_height: 50,
    fullHeight_min_height: 100,
  },
  tile: {
    align_items: 'stretch',
    display: 'block',
    flex_basis: 0,
    flex_grow: 1,
    flex_shrink: 1,
    min_height: 'min-content',
    tablet_child_display: 'flex',
    tablet_size_flex: 'none',
    ancestor_margin_left: -0.75,
    ancestor_margin_right: -0.75,
    ancestor_margin_top: -0.75,
    ancestor_last_child: -0.75,
    ancestor_not_last_child: 0.75,
    child_margin: '0 !important',
    parent_padding: 0.75,
    vertical_flex_direction: 'column',
    vertical_parent_not_last_child_margin_bottom: '1.5rem !important',
  },

  // Form
  input: {
    text_transform: 'uppercase',
    font_weight: 500,
    line_height: 'normal',
    letter_spacing: 4,
    height: 100,
    text_align: 'center',
    background_color: 'transparent',
    border: 'none',
    focus_outline: 'none',
    focus_parent_margin_top: 100,
    container_display: 'flex',
    container_align_items: 'center',
    container_height: 5,
    container_width: 40,
    container_border: '4px solid',
    container_transition: 'ease-in-out, width .35s ease-in-out',
    container_focus_box_shadow: '0px 0px 25px rgba(255, 159, 7, 0.25)',
  },
}

export default theme;