const COLORS = {
  // General
  black: '#000000',
  white: '#ffffff',

  //black
  'black-t-lighten1': 'rgba(0,0,0,0.75)',
  'black-t-lighten2': 'rgba(0,0,0,0.50)',
  'black-t-lighten3': 'rgba(0,0,0,0.25)',
  'black-t-lighten4': 'rgba(0,0,0,0.15)',
  'black-t-lighten5': 'rgba(0,0,0,0.10)',
  'black-t-lighten6': 'rgba(0,0,0,0.05)',

  // white
  'white-t-lighten1': 'rgba(255, 255, 255, 0.65)',
  'white-t-lighten2': 'rgba(255, 255, 255, 0.50)',
  'white-t-lighten3': 'rgba(255, 255, 255, 0.25)',
  'white-t-lighten4': 'rgba(255,255,255,0.15)',
  'white-t-lighten5': 'rgba(255,255,255,0.10)',
  'white-t-lighten6': 'rgba(255,255,255,0.05)',

  // Social media
  vipps: '#fe5c24',

  // Primary
  'primary-default': '#946A7E',
  'primary-lighten-1': '#C18AA4',
  'primary-lighten-2': '#CDA1B6',
  'primary-lighten-3': '#D5AFC1',
  'primary-lighten-4': '#DCBDCC',
  'primary-lighten-5': '#E6D0DB',
  'primary-lighten-6': '#F3E8ED',
  'primary-lighten-7': '#FAF6F8',

  'primary-light': '#c6dbf6',

  // Secondary
  'secondary-default': '#C18AA4',
  'secondary-darken-1': '#06B8BC',
  'secondary-lighten-1': '#40EEF2',
  'secondary-lighten-2': '#7FF3F6',
  'secondary-lighten-3': '#BFF9FA',
  'secondary-lighten-4': '#D9FCFD',
  'secondary-lighten-5': '#E5FCFD',
  'secondary-lighten-6': '#F2FEFE',

  // Grey PURE
  'grey-1': '#2D2D2D', // darken-3
  'grey-2': '#393939', // darken-2
  'grey-3': '#414141', // darken-1
  'grey-4': '#030b17', // default
  'grey-5': '#5b6068', // lighten-1
  'grey-6': '#81858b', // lighten-2
  'grey-7': '#c0c2c5', // lighten-3
  'grey-8': '#d9dbdc', // lighten-4
  'grey-9': '#e5e6e7', // lighten-5
  'grey-10': '#f2f3f3', // lighten-6

  // Grey TRANSPARENT
  'grey-t-1': 'rgba(35, 31, 32, 0.6)',
  'grey-t-2': 'rgba(0,0,0,0.75)',
  'grey-t-3': 'rgba(3, 11, 23, 0.75)',
  'grey-t-4': 'rgba(3, 11, 23, 0.65)',
  'grey-t-5': 'rgba(3, 11, 23, 0.50)',
  'grey-t-6': 'rgba(3, 11, 23, 0.25)',
  'grey-t-7': 'rgba(3, 11, 23, 0.15)',
  'grey-t-8': 'rgba(3, 11, 23, 0.10)',
  'grey-t-9': 'rgba(3, 11, 23, 0.05)',
  'grey-t-10': 'rgba(3, 11, 23, 0.05)',

  // Success
  'success-default': '#52c41a',
  'success-lighten-1': '#8ed96a',
  'success-lighten-2': '#a8e18c',
  'success-lighten-3': '#d4f0c6',
  'success-lighten-4': '#e5f6dd',
  'success-lighten-5': '#edf9e8',
  'success-lighten-6': '#f6fcf3',

  // Warning
  'warning-default': '#faad14',
  'warning-lighten-1': '#fcca66',
  'warning-lighten-2': '#fcd689',
  'warning-lighten-3': '#feeac4',
  'warning-lighten-4': '#fef3dc',
  'warning-lighten-5': '#fef7e7',
  'warning-lighten-6': '#fffbf3',

  // Error
  'danger-default': '#f5222d',
  'danger-lighten-1': '#f86f76',
  'danger-lighten-2': '#fa9096',
  'danger-lighten-3': '#fcc8ca',
  'danger-lighten-4': '#fedee0',
  'danger-lighten-5': '#fee8ea',
  'danger-lighten-6': '#fef4f4',

  // Info
  'info-default': '#1d6fdc',
  'info-lighten-1': '#6ca1e8',
  'info-lighten-2': '#8eb7ed',
  'info-lighten-3': '#c6dbf6',
  'info-lighten-4': '#ddeafa',
  'info-lighten-5': '#e8f0fb',
  'info-lighten-6': '#f3f8fd',

  // Gold
  'gold-default': '#EBBB74',

  'input-background': '#f5f5f6',
  'input-background-disabled': '#e4e6e7',
  'input-border-color': 'rgba(3, 11, 23, 0.1)',
  'input-border-color-disabled': 'rgba(3, 11, 23, 0.15)',
  'card-spin-background': 'rgba(0, 0, 0, 0.55)',
  'card-background': '#e9edf1',
};

const FONT_FAMILIES = {
  heading: 'Helvetica Neue Bold',
  body: 'Helvetica Neue',
  // Solution for android texts fontWeight
  light: 'Helvetica Neue Light',
  regular: 'Helvetica Neue',
  medium: 'Helvetica Neue Medium',
  semibold: 'Helvetica Neue Medium',
  bold: 'Helvetica Neue Bold',
  heavy: 'Helvetica Neue Heavy',
  'light-italic': 'Helvetica Neue Light-Italic',
  'regular-italic': 'Helvetica Neue Italic',
  'medium-italic': 'Helvetica Neue Medium-Italic',
  'semibold-italic': 'Helvetica Neue Medium-Italic',
  'bold-italic': 'Helvetica Neue Bold-Italic',
  'heavy-italic': 'Helvetica Neue Heavy-Italic',
};

const FONT_WEIGHTS = {
  bold: '700',
  semibold: '600',
  medium: '500',
  regular: '400',
  light: '300',
};

const LETTER_SPACINGS = {
  caption1: 0,
  caption2: 0,
  none: 0,
  default: 0.6,
};

const ICON_SIZES = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 32,
  lg2: 36,
  xl: 40,
  xxl: 48,
  xxxl: 64,
};

const BORDER_RADIUSES = {
  sharp: 0,
  // xs2: 2,
  // xs: 4, // Default - 2
  sm2: 6,
  sm: 8, // Default - 4
  md2: 12,
  md: 12, // Default - 8
  // lg2: 14,
  lg: 16, // Default - 16
  // xl2: 20,
  // xl: 24, // Default - 32
  xxl2: 32,
  // xxl: 64,
  round: 50,
};

const SHADOW_OFFSETS = {
  DEFAULT: {width: 2, height: 2},
};

// Elevation doesn't work properly on Android
const SHADOWS = {
  xs: {
    shadowColor: COLORS.black,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: SHADOW_OFFSETS.DEFAULT,
    // elevation: 1
  },
  sm: {
    shadowColor: COLORS.black,
    shadowOpacity: 0.4,
    shadowRadius: 4,
    shadowOffset: SHADOW_OFFSETS.DEFAULT,
    // elevation: 3
  },
  md: {
    shadowColor: COLORS.black,
    shadowOpacity: 0.8,
    shadowRadius: 8,
    shadowOffset: SHADOW_OFFSETS.DEFAULT,
    // elevation: 4
  },
  lg: {
    shadowColor: COLORS.black,
    shadowOpacity: 1.2,
    shadowRadius: 16,
    shadowOffset: SHADOW_OFFSETS.DEFAULT,
    // elevation: 5
  },
  xl: {
    shadowColor: COLORS.black,
    shadowOpacity: 1.6,
    shadowRadius: 10,
    shadowOffset: SHADOW_OFFSETS.DEFAULT,
    // elevation: 6
  },
};

const TOGGLES = {
  variants: {
    default: {
      variant: 'lightGrey',
      corners: 'round',
      border: 'thin',
      type: 'filled',
      color: COLORS['primary-default'],
    },
    primary: {
      variant: 'primary',
      corners: 'round',
      border: 'thin',
      type: 'filled',
      color: COLORS.white,
    },
  },
};

const STATUSES = {
  variants: {
    default: {
      wrapperBg: COLORS['grey-t-9'],
      bg: COLORS['grey-t-7'],
    },
    active: {
      wrapperBg: COLORS['primary-lighten-5'],
      bg: COLORS['primary-default'],
    },
    danger: {
      wrapperBg: COLORS['danger-lighten-5'],
      bg: COLORS['danger-default'],
    },
    warning: {
      wrapperBg: COLORS['warning-lighten-5'],
      bg: COLORS['warning-default'],
    },
  },
};

const CORE = {
  COLORS,
  FONT_FAMILIES,
  FONT_WEIGHTS,
  LETTER_SPACINGS,
  ICON_SIZES,
  BORDER_RADIUSES,
  SHADOWS,
};

const EXTENSIONS = {
  CORNERS: {
    md: 8,
    lg: 16,
  },
  ITEM_TOKENS: {
    BORDER_TOKENS: {},
    CORNER_TOKENS: {},
    SIZE_TOKENS: {
      xs: {
        paddingHorizontal: 4,
        // fontSize: CORE.FONT_SIZES.caption1,
        // lineHeight: CORE.LINE_HEIGHTS.caption1,
        // infoTextFontSize: CORE.FONT_SIZES.caption2,
        // infoTextLineHeight: CORE.LINE_HEIGHTS.caption2,
        iconSize: ICON_SIZES.xs,
        height: 20,
        width: 20,
        margin: 4,
      },
      sm: {
        paddingHorizontal: 12,
        // fontSize: CORE.FONT_SIZES.body2,
        // lineHeight: CORE.LINE_HEIGHTS.body2,
        // infoTextFontSize: CORE.FONT_SIZES.caption1,
        // infoTextLineHeight: CORE.LINE_HEIGHTS.caption1,
        iconSize: ICON_SIZES.sm,
        height: 32,
        width: 32,
        margin: 12,
      },
      md: {
        paddingHorizontal: 16,
        // fontSize: CORE.FONT_SIZES.body2,
        // lineHeight: CORE.LINE_HEIGHTS.body1,
        // infoTextFontSize: CORE.FONT_SIZES.caption1,
        // infoTextLineHeight: CORE.LINE_HEIGHTS.caption1,
        iconSize: ICON_SIZES.md,
        height: 48,
        width: 48,
        margin: 16,
      },
      lg: {
        paddingHorizontal: 24,
        // fontSize: CORE.FONT_SIZES.h4,
        // lineHeight: CORE.LINE_HEIGHTS.h4,
        // infoTextFontSize: CORE.FONT_SIZES.body1,
        // infoTextLineHeight: CORE.LINE_HEIGHTS.body1,
        iconSize: ICON_SIZES.lg,
        height: 52,
        width: 52,
        margin: 24,
      },
      xl: {
        paddingHorizontal: 28,
        // fontSize: CORE.FONT_SIZES.h3,
        // lineHeight: CORE.LINE_HEIGHTS.h3,
        // infoTextFontSize: CORE.FONT_SIZES.h4,
        // infoTextLineHeight: CORE.LINE_HEIGHTS.h4,
        iconSize: ICON_SIZES.xl,
        height: 64,
        width: 64,
        margin: 28,
      },
      xxl: {
        paddingHorizontal: 34,
        // fontSize: CORE.FONT_SIZES.h3,
        // lineHeight: CORE.LINE_HEIGHTS.h3,
        // infoTextFontSize: CORE.FONT_SIZES.h4,
        // infoTextLineHeight: CORE.LINE_HEIGHTS.h4,
        iconSize: ICON_SIZES.xxl,
        height: 128,
        width: 128,
        margin: 34,
      },
    },
    VARIANT_TOKENS: {
      primary: {
        backgroundColor: COLORS['primary-default'],
        color: COLORS['grey-t-4'],
        infoTextColor: COLORS['grey-t-5'],
        borderColor: COLORS['secondary-default'],
        borderTopColor: COLORS['secondary-default'],
        borderRightColor: COLORS['secondary-default'],
        borderBottomColor: COLORS['secondary-default'],
        borderLeftColor: COLORS['secondary-default'],
      },
      info: {
        backgroundColor: COLORS['info-default'],
        color: COLORS.white,
        infoTextColor: COLORS['info-default'],
        borderColor: COLORS['info-default'],
        borderTopColor: COLORS['info-default'],
        borderRightColor: COLORS['info-default'],
        borderBottomColor: COLORS['info-default'],
        borderLeftColor: COLORS['info-default'],
      },
      success: {
        backgroundColor: COLORS['success-default'],
        color: COLORS.white,
        infoTextColor: COLORS['success-default'],
        borderColor: COLORS['success-default'],
        borderTopColor: COLORS['success-default'],
        borderRightColor: COLORS['success-default'],
        borderBottomColor: COLORS['success-default'],
        borderLeftColor: COLORS['success-default'],
      },
      warning: {
        backgroundColor: COLORS['warning-default'],
        color: COLORS.white,
        infoTextColor: COLORS['warning-default'],
        borderColor: COLORS['warning-default'],
        borderTopColor: COLORS['warning-default'],
        borderRightColor: COLORS['warning-default'],
        borderBottomColor: COLORS['warning-default'],
        borderLeftColor: COLORS['warning-default'],
      },
      danger: {
        backgroundColor: COLORS['danger-default'],
        color: COLORS.white,
        infoTextColor: COLORS['danger-default'],
        borderColor: COLORS['danger-default'],
        borderTopColor: COLORS['danger-default'],
        borderRightColor: COLORS['danger-default'],
        borderBottomColor: COLORS['danger-default'],
        borderLeftColor: COLORS['danger-default'],
      },
      white: {
        backgroundColor: COLORS.white,
        color: COLORS['grey-t-4'],
        infoTextColor: COLORS['grey-t-5'],
        borderColor: COLORS.white,
        borderTopColor: COLORS.white,
        borderRightColor: COLORS.white,
        borderBottomColor: COLORS.white,
        borderLeftColor: COLORS.white,
      },
      black: {
        backgroundColor: COLORS.black,
        color: COLORS.white,
        infoTextColor: COLORS.black,
        borderColor: COLORS.black,
        borderTopColor: COLORS.black,
        borderRightColor: COLORS.black,
        borderBottomColor: COLORS.black,
        borderLeftColor: COLORS.black,
      },
      grey: {
        backgroundColor: COLORS['grey-t-7'],
        color: COLORS.white,
        infoTextColor: COLORS['grey-t-4'],
        borderColor: COLORS['grey-t-7'],
        borderTopColor: COLORS['grey-t-7'],
        borderRightColor: COLORS['grey-t-7'],
        borderBottomColor: COLORS['grey-t-7'],
        borderLeftColor: COLORS['grey-t-7'],
      },
      lightGrey: {
        backgroundColor: COLORS['grey-8'],
        color: COLORS['grey-t-4'],
        infoTextColor: COLORS['grey-8'],
        borderColor: COLORS['grey-8'],
        borderTopColor: COLORS['grey-8'],
        borderRightColor: COLORS['grey-8'],
        borderBottomColor: COLORS['grey-8'],
        borderLeftColor: COLORS['grey-8'],
      },
      transparent: {
        backgroundColor: 'transparent',
        color: COLORS['grey-t-4'],
        infoTextColor: COLORS['grey-t-5'],
        borderColor: 'transparent',
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: 'transparent',
      },
      transparentPrimary: {
        backgroundColor: 'transparent',
        color: COLORS['primary-default'],
        infoTextColor: COLORS['grey-t-5'],
        borderColor: 'transparent',
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: 'transparent',
      },
      transparentDanger: {
        backgroundColor: 'transparent',
        color: COLORS['danger-default'],
        infoTextColor: COLORS['danger-default'],
        borderColor: COLORS['danger-default'],
        borderTopColor: COLORS['danger-default'],
        borderRightColor: COLORS['danger-default'],
        borderBottomColor: COLORS['danger-default'],
        borderLeftColor: COLORS['danger-default'],
      },
      transparentWhite: {
        backgroundColor: 'transparent',
        color: COLORS.white,
        infoTextColor: COLORS.white,
        borderColor: COLORS.white,
        borderTopColor: COLORS.white,
        borderRightColor: COLORS.white,
        borderBottomColor: COLORS.white,
        borderLeftColor: COLORS.white,
      },
      transparentDark: {
        backgroundColor: 'transparent',
        color: COLORS['grey-4'],
        infoTextColor: COLORS['grey-t-5'],
        borderColor: 'transparent',
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: 'transparent',
      },
    },
  },
};

const theme = {
  CORE,
  EXTENSIONS,
  components: {
    TOGGLES,
    STATUSES,
    CARD: {
      borderRadius: {
        sharp: BORDER_RADIUSES.sharp,
        sm: BORDER_RADIUSES.xs,
        md: BORDER_RADIUSES.sm,
        lg: 40,
      },
    },
    BUTTONS: {
      variant: {
        primary: {
          backgroundColor: COLORS['primary-default'],
          color: COLORS.white,
        },

        secondary: {
          backgroundColor: COLORS['primary-lighten-3'],
          color: COLORS['primary-default'],
        },
        default: {
          backgroundColor: 'rgba(3,11,23,0.05)',
          color: COLORS['grey-t-4'],
        },
        danger: {
          backgroundColor: COLORS['danger-lighten-5'],
          color: COLORS['danger-default'],
        },
        'grey-light': {
          backgroundColor: COLORS['grey-t-9'],
          color: COLORS['grey-7'],
        },
        transparent: {
          backgroundColor: 'transparent',
          color: COLORS['grey-1'],
        },
        success: {
          backgroundColor: 'transparent',
          color: COLORS['success-default'],
        },
        white: {
          backgroundColor: '#fff',
        },
      },
      height: {
        sm: 40,
        md: 44,
        lg: 50,
      },
      iconSize: {
        sm: ICON_SIZES.xs,
        md: ICON_SIZES.sm,
        lg: ICON_SIZES.md,
      },
      borderRadius: {
        sharp: BORDER_RADIUSES.sharp,
        sm: BORDER_RADIUSES.xs,
        md: BORDER_RADIUSES.sm,
        lg: BORDER_RADIUSES.lg,
      },
      text: {
        textTransform: 'none',
        fontWeight: '500',
      },
      textSize: 'body1',
      fontWeight: 'medium',
      hoverOpacity: 0.5,
    },
    SWIAPABLE: {actionMargin: 10},
  },
};

export default theme;
