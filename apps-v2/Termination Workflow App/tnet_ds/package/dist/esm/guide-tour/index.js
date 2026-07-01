// lib/guide-tour/component.tsx
import { useState as useState2, useEffect as useEffect2, useLayoutEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";

// lib/buttons/component.tsx
import React2 from "react";
import {
  Button as MuiButton,
  Fab as MuiFab,
  ButtonGroup as MuiButtonGroup,
  Box as Box2
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme as useTheme2 } from "@mui/material/styles";

// lib/buttons/theme.ts
import { styled } from "@mui/material/styles";
import { Button as _MuiButton, IconButton } from "@mui/material";

// lib/layout/index.ts
import { Box, Stack, Grid2 } from "@mui/material";

// lib/utils/components.tsx
import { jsx } from "react/jsx-runtime";

// lib/utils/index.ts
var COLORS = {
  TRANSPARENT: "transparent",
  BRAND: {
    TRINET_ORANGE: "#E14700",
    TRINET_NAVY: "#0B0134"
  },
  PRIMARY: {
    ORANGE_10: "#FFF1EB",
    ORANGE_20: "#FFD4C7",
    ORANGE_30: "#FFB199",
    ORANGE_40: "#FF8064",
    ORANGE_45: "#FA6C4D",
    ORANGE_50: "#E14700",
    ORANGE_60: "#D14200",
    ORANGE_70: "#a83706",
    ORANGE_75: "#75443F",
    ORANGE_80: "#2F120E"
  },
  SECONDARY: {
    BLUE_10: "#F8FAFF",
    BLUE_20: "#F0F5FF",
    BLUE_30: "#D0E4FF",
    BLUE_40: "#94BEFD",
    BLUE_50: "#5C9DFF",
    BLUE_60: "#0A62E6",
    BLUE_70: "#044DBB",
    BLUE_80: "#0B0134"
  },
  SYSTEM: {
    WHITE: "#FFFFFF",
    OFF_WHITE: "#F8F9FA",
    MISTY: "#EEF0F2",
    CLOUDY: "#DDE1E6",
    SILVER: "#B3BDC7",
    PEWTER: "#6E7789",
    DARK_30: "#646C7D",
    SLATE: "#444C5C",
    INK: "#242936",
    DARK_60: "#20242F",
    DARK_70: "#191D26",
    DARK_80: "#07080B",
    BLACK: "#000000"
  },
  INFO: {
    INFO_10: "#F3F6FF",
    INFO_20: "#AECFFF",
    INFO_30: "#56ABFF",
    INFO_40: "#0070E0",
    INFO_50: "#012596"
  },
  SUCCESS: {
    SUCCESS_10: "#F2FBF5",
    SUCCESS_20: "#B7E9C9",
    SUCCESS_30: "#33E173",
    SUCCESS_40: "#008531",
    SUCCESS_50: "#044E1F"
  },
  WARNING: {
    WARNING_10: "#FFF7ED",
    WARNING_20: "#FDD7B5",
    WARNING_30: "#FFB258",
    WARNING_40: "#FF8C22",
    WARNING_50: "#682F03"
  },
  ERROR: {
    ERROR_10: "#FFF2F2",
    ERROR_20: "#FFB4B4",
    ERROR_30: "#FF6359",
    ERROR_40: "#E01021",
    ERROR_50: "#AF0A0A"
  },
  ACCENT: {
    VIOLET_10: "#F2ECFB",
    VIOLET_20: "#C3AFEF",
    VIOLET_30: "#875FDE",
    VIOLET_40: "#661CC8",
    VIOLET_50: "#3F0066",
    TEAL_10: "#DBE4F6",
    TEAL_20: "#9BAFD4",
    TEAL_30: "#587AB8",
    TEAL_40: "#355287",
    TEAL_50: "#213762",
    GREEN_10: "#F2FBF5",
    GREEN_20: "#A5EDD3",
    GREEN_30: "#45D8B4",
    GREEN_40: "#02936F",
    GREEN_50: "#00434A",
    MAGENTA_10: "#FFE8F5",
    MAGENTA_20: "#FF8DCB",
    MAGENTA_30: "#D95188",
    MAGENTA_40: "#DB0661",
    MAGENTA_50: "#6B003D",
    YELLOW_10: "#FEF9E7",
    YELLOW_20: "#FFEEB2",
    YELLOW_30: "#FFD649",
    YELLOW_40: "#F4C006",
    YELLOW_50: "#CB7A00"
  }
};
var omitCustomProps = (obj = {}, keys) => {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    if (!keys.includes(key)) {
      result[key] = value;
    }
  }
  return result;
};

// lib/buttons/theme.ts
var buttonTheme = {
  dark: {
    name: "button",
    styles: {
      loadingBackground: COLORS.SYSTEM.SILVER,
      loadingForeground: COLORS.SYSTEM.CLOUDY,
      primary: {
        text: COLORS.PRIMARY.ORANGE_80,
        default: {
          body: COLORS.PRIMARY.ORANGE_40
        },
        hover: {
          body: COLORS.PRIMARY.ORANGE_45
        },
        active: {
          body: COLORS.PRIMARY.ORANGE_30
        },
        disabled: {
          body: COLORS.PRIMARY.ORANGE_75
        }
      },
      secondary: {
        body: COLORS.TRANSPARENT,
        default: {
          border: COLORS.PRIMARY.ORANGE_40,
          text: COLORS.PRIMARY.ORANGE_40
        },
        hover: {
          border: COLORS.PRIMARY.ORANGE_45,
          text: COLORS.PRIMARY.ORANGE_45
        },
        active: {
          border: COLORS.PRIMARY.ORANGE_30,
          text: COLORS.PRIMARY.ORANGE_30
        },
        disabled: {
          border: COLORS.PRIMARY.ORANGE_75,
          text: COLORS.PRIMARY.ORANGE_75
        }
      },
      tertiary: {
        text: COLORS.SYSTEM.WHITE,
        default: {
          body: COLORS.SYSTEM.INK,
          border: COLORS.SYSTEM.SLATE
        },
        hover: {
          body: COLORS.SYSTEM.SLATE
        },
        active: {
          body: COLORS.SYSTEM.DARK_60
        },
        disabled: {
          body: COLORS.SYSTEM.DARK_60,
          text: COLORS.SYSTEM.PEWTER
        }
      },
      contrast: {
        text: COLORS.SYSTEM.INK,
        default: {
          body: COLORS.SYSTEM.WHITE
        },
        hover: {
          body: COLORS.SYSTEM.CLOUDY
        },
        active: {
          body: COLORS.SYSTEM.MISTY
        },
        disabled: {
          body: COLORS.SYSTEM.DARK_30,
          text: COLORS.SYSTEM.INK
        }
      },
      contrastOutline: {
        body: COLORS.SYSTEM.DARK_70,
        default: {
          border: COLORS.SYSTEM.WHITE,
          text: COLORS.SYSTEM.WHITE
        },
        hover: {
          border: COLORS.SYSTEM.CLOUDY,
          text: COLORS.SYSTEM.CLOUDY
        },
        active: {
          border: COLORS.SYSTEM.MISTY,
          text: COLORS.SYSTEM.MISTY
        },
        disabled: {
          border: COLORS.SYSTEM.DARK_30,
          text: COLORS.SYSTEM.DARK_30
        }
      },
      contrastReverse: {
        text: COLORS.SYSTEM.WHITE,
        default: {
          body: COLORS.SYSTEM.DARK_70
        },
        hover: {
          body: COLORS.SYSTEM.DARK_80
        },
        active: {
          body: COLORS.SYSTEM.DARK_60
        },
        disabled: {
          body: COLORS.SYSTEM.CLOUDY,
          text: COLORS.SYSTEM.PEWTER
        }
      },
      contrastOutlineReverse: {
        body: COLORS.SYSTEM.WHITE,
        default: {
          border: COLORS.SYSTEM.DARK_70,
          text: COLORS.SYSTEM.DARK_70
        },
        hover: {
          border: COLORS.SYSTEM.DARK_80,
          text: COLORS.SYSTEM.DARK_80
        },
        active: {
          border: COLORS.SYSTEM.DARK_60,
          text: COLORS.SYSTEM.DARK_60
        },
        disabled: {
          border: COLORS.SYSTEM.CLOUDY,
          text: COLORS.SYSTEM.CLOUDY
        }
      },
      transparent: {
        body: COLORS.TRANSPARENT,
        default: {
          text: COLORS.SECONDARY.BLUE_40
        },
        hover: {
          body: COLORS.TRANSPARENT,
          text: COLORS.SECONDARY.BLUE_50,
          border: COLORS.SYSTEM.SLATE
        },
        active: {
          body: COLORS.TRANSPARENT,
          text: COLORS.SECONDARY.BLUE_30
        },
        disabled: {
          text: COLORS.SYSTEM.PEWTER
        }
      },
      transparentReverse: {
        body: COLORS.TRANSPARENT,
        default: {
          text: COLORS.SECONDARY.BLUE_60
        },
        hover: {
          body: COLORS.SECONDARY.BLUE_10,
          text: COLORS.SECONDARY.BLUE_50
        },
        active: {
          text: COLORS.SECONDARY.BLUE_70
        },
        disabled: {
          text: COLORS.SYSTEM.SILVER
        }
      },
      link: {
        body: COLORS.TRANSPARENT,
        default: {
          text: COLORS.SECONDARY.BLUE_40
        },
        hover: {
          text: COLORS.SECONDARY.BLUE_50
        },
        active: {
          text: COLORS.SECONDARY.BLUE_30
        },
        disabled: {
          text: COLORS.SYSTEM.PEWTER
        }
      },
      elevated: {
        body: COLORS.SYSTEM.INK,
        default: {
          text: COLORS.SYSTEM.WHITE
        },
        hover: {
          body: COLORS.SYSTEM.SLATE,
          text: COLORS.SYSTEM.WHITE
        },
        active: {
          text: COLORS.SYSTEM.DARK_60
        },
        disabled: {
          text: COLORS.SYSTEM.PEWTER
        }
      },
      header: {
        default: {
          body: COLORS.TRANSPARENT,
          text: COLORS.SYSTEM.CLOUDY
        },
        hover: { body: COLORS.SYSTEM.DARK_70 },
        active: { body: COLORS.SYSTEM.DARK_70 },
        disabled: { body: COLORS.SYSTEM.DARK_60, text: COLORS.SYSTEM.PEWTER }
      },
      fab: {
        default: {
          default: {
            body: COLORS.SYSTEM.INK,
            text: COLORS.SYSTEM.WHITE
          },
          hover: { body: COLORS.SYSTEM.SLATE },
          active: { body: COLORS.SYSTEM.DARK_60, border: COLORS.SYSTEM.WHITE },
          disabled: { body: COLORS.SYSTEM.DARK_60, text: COLORS.SYSTEM.PEWTER }
        },
        primary: {
          text: COLORS.PRIMARY.ORANGE_80,
          default: {
            body: COLORS.PRIMARY.ORANGE_40
          },
          hover: {
            body: COLORS.PRIMARY.ORANGE_45
          },
          active: {
            body: COLORS.PRIMARY.ORANGE_30,
            border: COLORS.SYSTEM.WHITE
          },
          disabled: {
            body: COLORS.PRIMARY.ORANGE_75
          }
        },
        secondary: {
          default: {
            body: COLORS.SECONDARY.BLUE_40,
            text: COLORS.SECONDARY.BLUE_80
          },
          hover: { body: COLORS.SECONDARY.BLUE_50 },
          active: {
            body: COLORS.SECONDARY.BLUE_30,
            border: COLORS.SYSTEM.WHITE
          },
          disabled: { body: COLORS.SYSTEM.INK, text: COLORS.SYSTEM.PEWTER }
        }
      },
      chip: {
        text: COLORS.SECONDARY.BLUE_40,
        default: {
          body: COLORS.SYSTEM.SLATE
        },
        hover: {
          body: COLORS.SYSTEM.SLATE
        },
        active: {
          body: COLORS.SYSTEM.DARK_70
        },
        disabled: {
          body: COLORS.PRIMARY.ORANGE_20
        }
      },
      toggleIcon: {
        text: COLORS.SYSTEM.PEWTER,
        default: {
          body: COLORS.SYSTEM.INK,
          border: COLORS.SYSTEM.SLATE
        },
        hover: {
          body: COLORS.SYSTEM.WHITE,
          border: COLORS.SYSTEM.PEWTER
        },
        active: {
          body: COLORS.SYSTEM.DARK_70,
          border: COLORS.SYSTEM.SLATE
        },
        disabled: {
          body: COLORS.SYSTEM.DARK_60,
          border: COLORS.SYSTEM.INK,
          text: COLORS.SYSTEM.SLATE
        },
        selected: {
          body: COLORS.SYSTEM.DARK_70,
          border: COLORS.SYSTEM.SLATE,
          text: COLORS.SYSTEM.WHITE
        },
        focused: {
          border: COLORS.SECONDARY.BLUE_40
        },
        icon: {
          body: COLORS.SYSTEM.SILVER
        }
      },
      simpleIcon: {
        text: COLORS.SYSTEM.WHITE,
        default: {
          body: COLORS.SYSTEM.INK,
          border: COLORS.SYSTEM.SLATE
        },
        hover: {
          text: COLORS.SECONDARY.BLUE_40
        },
        active: {
          body: COLORS.SYSTEM.DARK_70,
          border: COLORS.SYSTEM.SLATE
        },
        disabled: {
          text: COLORS.SYSTEM.PEWTER
        },
        selected: {
          body: COLORS.SYSTEM.DARK_70,
          border: COLORS.SYSTEM.SLATE,
          text: COLORS.SYSTEM.WHITE
        },
        focused: {
          border: COLORS.SECONDARY.BLUE_40
        },
        icon: {
          body: COLORS.SYSTEM.SILVER
        }
      }
    }
  },
  light: {
    name: "button",
    styles: {
      loadingBackground: COLORS.SYSTEM.PEWTER,
      loadingForeground: COLORS.SYSTEM.PEWTER,
      primary: {
        text: COLORS.SYSTEM.WHITE,
        default: {
          body: COLORS.PRIMARY.ORANGE_60
        },
        hover: {
          body: COLORS.PRIMARY.ORANGE_50
        },
        active: {
          body: COLORS.PRIMARY.ORANGE_70
        },
        disabled: {
          body: COLORS.PRIMARY.ORANGE_20
        }
      },
      secondary: {
        body: COLORS.SYSTEM.WHITE,
        default: {
          border: COLORS.PRIMARY.ORANGE_60,
          text: COLORS.PRIMARY.ORANGE_60
        },
        hover: {
          border: COLORS.PRIMARY.ORANGE_50,
          text: COLORS.PRIMARY.ORANGE_50
        },
        active: {
          border: COLORS.PRIMARY.ORANGE_70,
          text: COLORS.PRIMARY.ORANGE_70
        },
        disabled: {
          border: COLORS.PRIMARY.ORANGE_20,
          text: COLORS.PRIMARY.ORANGE_20
        }
      },
      tertiary: {
        text: COLORS.SYSTEM.INK,
        default: {
          body: COLORS.SYSTEM.MISTY,
          border: COLORS.TRANSPARENT
        },
        hover: {
          body: COLORS.SYSTEM.CLOUDY
        },
        active: {
          body: COLORS.SYSTEM.OFF_WHITE
        },
        disabled: {
          body: COLORS.SYSTEM.MISTY,
          text: COLORS.SYSTEM.SILVER
        }
      },
      contrast: {
        text: COLORS.SYSTEM.WHITE,
        default: {
          body: COLORS.SYSTEM.DARK_70
        },
        hover: {
          body: COLORS.SYSTEM.DARK_80
        },
        active: {
          body: COLORS.SYSTEM.DARK_60
        },
        disabled: {
          body: COLORS.SYSTEM.CLOUDY,
          text: COLORS.SYSTEM.PEWTER
        }
      },
      contrastOutline: {
        body: COLORS.SYSTEM.WHITE,
        default: {
          border: COLORS.SYSTEM.DARK_70,
          text: COLORS.SYSTEM.DARK_70
        },
        hover: {
          border: COLORS.SYSTEM.DARK_80,
          text: COLORS.SYSTEM.DARK_80
        },
        active: {
          border: COLORS.SYSTEM.DARK_60,
          text: COLORS.SYSTEM.DARK_60
        },
        disabled: {
          border: COLORS.SYSTEM.CLOUDY,
          text: COLORS.SYSTEM.CLOUDY
        }
      },
      contrastReverse: {
        text: COLORS.SYSTEM.INK,
        default: {
          body: COLORS.SYSTEM.WHITE
        },
        hover: {
          body: COLORS.SYSTEM.CLOUDY
        },
        active: {
          body: COLORS.SYSTEM.MISTY
        },
        disabled: {
          body: COLORS.SYSTEM.DARK_30,
          text: COLORS.SYSTEM.INK
        }
      },
      contrastOutlineReverse: {
        body: COLORS.SYSTEM.DARK_70,
        default: {
          border: COLORS.SYSTEM.WHITE,
          text: COLORS.SYSTEM.WHITE
        },
        hover: {
          border: COLORS.SYSTEM.CLOUDY,
          text: COLORS.SYSTEM.CLOUDY
        },
        active: {
          border: COLORS.SYSTEM.MISTY,
          text: COLORS.SYSTEM.MISTY
        },
        disabled: {
          border: COLORS.SYSTEM.DARK_30,
          text: COLORS.SYSTEM.DARK_30
        }
      },
      transparent: {
        body: COLORS.TRANSPARENT,
        default: {
          text: COLORS.SECONDARY.BLUE_60
        },
        hover: {
          body: COLORS.SECONDARY.BLUE_10,
          text: COLORS.SECONDARY.BLUE_50,
          border: COLORS.TRANSPARENT
        },
        active: {
          body: COLORS.TRANSPARENT,
          text: COLORS.SECONDARY.BLUE_70
        },
        disabled: {
          text: COLORS.SYSTEM.SILVER
        }
      },
      transparentReverse: {
        body: COLORS.TRANSPARENT,
        default: {
          text: COLORS.SECONDARY.BLUE_40
        },
        hover: {
          body: COLORS.SYSTEM.INK,
          text: COLORS.SECONDARY.BLUE_50
        },
        active: {
          text: COLORS.SECONDARY.BLUE_30
        },
        disabled: {
          text: COLORS.SYSTEM.PEWTER
        }
      },
      link: {
        body: COLORS.TRANSPARENT,
        default: {
          text: COLORS.SECONDARY.BLUE_60
        },
        hover: {
          text: COLORS.SECONDARY.BLUE_50
        },
        active: {
          text: COLORS.SECONDARY.BLUE_70
        },
        disabled: {
          text: COLORS.SYSTEM.SILVER
        }
      },
      elevated: {
        body: COLORS.SYSTEM.WHITE,
        default: {
          text: COLORS.SYSTEM.INK
        },
        hover: {
          body: COLORS.SYSTEM.OFF_WHITE
        },
        active: {
          text: COLORS.SECONDARY.BLUE_70,
          body: COLORS.SYSTEM.MISTY
        },
        disabled: {
          text: COLORS.SYSTEM.SILVER
        }
      },
      header: {
        default: {
          body: COLORS.TRANSPARENT,
          text: COLORS.SYSTEM.PEWTER
        },
        hover: { body: COLORS.SYSTEM.OFF_WHITE },
        active: { body: COLORS.SYSTEM.OFF_WHITE },
        disabled: { body: COLORS.TRANSPARENT, text: COLORS.SYSTEM.SILVER }
      },
      fab: {
        default: {
          default: {
            body: COLORS.SYSTEM.MISTY,
            text: COLORS.SYSTEM.INK
          },
          hover: { body: COLORS.SYSTEM.CLOUDY },
          active: {
            body: COLORS.SYSTEM.OFF_WHITE,
            border: COLORS.SYSTEM.DARK_80
          },
          disabled: { body: COLORS.SYSTEM.CLOUDY, text: COLORS.SYSTEM.SILVER }
        },
        primary: {
          text: COLORS.SYSTEM.WHITE,
          default: {
            body: COLORS.PRIMARY.ORANGE_60
          },
          hover: {
            body: COLORS.PRIMARY.ORANGE_50
          },
          active: {
            body: COLORS.PRIMARY.ORANGE_70,
            border: COLORS.SYSTEM.DARK_80
          },
          disabled: {
            body: COLORS.PRIMARY.ORANGE_20
          }
        },
        secondary: {
          default: {
            body: COLORS.SECONDARY.BLUE_60,
            text: COLORS.SYSTEM.WHITE
          },
          hover: { body: COLORS.SECONDARY.BLUE_50 },
          active: {
            body: COLORS.SECONDARY.BLUE_70,
            border: COLORS.SYSTEM.DARK_80
          },
          disabled: {
            body: COLORS.SECONDARY.BLUE_20,
            text: COLORS.SYSTEM.SILVER
          }
        }
      },
      chip: {
        text: COLORS.SECONDARY.BLUE_60,
        default: {
          body: COLORS.SECONDARY.BLUE_10
        },
        hover: {
          body: COLORS.SECONDARY.BLUE_20
        },
        active: {
          body: COLORS.SECONDARY.BLUE_30
        },
        disabled: {
          body: COLORS.SECONDARY.BLUE_60,
          text: COLORS.SECONDARY.BLUE_60
        }
      },
      toggleIcon: {
        text: COLORS.SYSTEM.PEWTER,
        default: {
          body: COLORS.SYSTEM.WHITE,
          border: COLORS.SYSTEM.CLOUDY
        },
        hover: {
          body: COLORS.SYSTEM.WHITE,
          border: COLORS.SYSTEM.SILVER
        },
        active: {
          body: COLORS.SYSTEM.OFF_WHITE,
          border: COLORS.SYSTEM.CLOUDY
        },
        disabled: {
          body: COLORS.SYSTEM.MISTY,
          border: COLORS.SYSTEM.CLOUDY,
          text: COLORS.SYSTEM.SILVER
        },
        selected: {
          body: COLORS.SYSTEM.MISTY,
          border: COLORS.SYSTEM.CLOUDY,
          text: COLORS.SYSTEM.INK
        },
        focused: {
          border: COLORS.SECONDARY.BLUE_60
        },
        icon: {
          body: COLORS.SYSTEM.PEWTER
        }
      },
      simpleIcon: {
        text: COLORS.SYSTEM.INK,
        default: {
          body: COLORS.SYSTEM.WHITE,
          border: COLORS.SYSTEM.CLOUDY
        },
        hover: {
          text: COLORS.SECONDARY.BLUE_60
        },
        active: {
          body: COLORS.SYSTEM.OFF_WHITE,
          border: COLORS.SYSTEM.CLOUDY
        },
        disabled: {
          text: COLORS.SYSTEM.SILVER
        },
        selected: {
          body: COLORS.SYSTEM.MISTY,
          border: COLORS.SYSTEM.CLOUDY,
          text: COLORS.SYSTEM.INK
        },
        focused: {
          border: COLORS.SECONDARY.BLUE_60
        },
        icon: {
          body: COLORS.SYSTEM.PEWTER
        }
      }
    }
  }
};
var _buttonTheme = (theme) => {
  switch (theme.name) {
    case "dark": {
      return {
        loadingBackground: theme.palette.t1.system.silver,
        loadingForeground: theme.palette.t1.system.cloudy,
        primary: {
          text: theme.palette.t1.primary.orange80,
          default: {
            body: theme.palette.t1.primary.orange40
          },
          hover: {
            body: theme.palette.t1.primary.orange45
          },
          active: {
            body: theme.palette.t1.primary.orange30
          },
          disabled: {
            body: theme.palette.t1.primary.orange75
          }
        },
        secondary: {
          body: theme.palette.t1.transparent,
          default: {
            border: theme.palette.t1.primary.orange40,
            text: theme.palette.t1.primary.orange40
          },
          hover: {
            border: theme.palette.t1.primary.orange45,
            text: theme.palette.t1.primary.orange45
          },
          active: {
            border: theme.palette.t1.primary.orange30,
            text: theme.palette.t1.primary.orange30
          },
          disabled: {
            border: theme.palette.t1.primary.orange75,
            text: theme.palette.t1.primary.orange75
          }
        },
        tertiary: {
          text: theme.palette.t1.system.white,
          default: {
            body: theme.palette.t1.system.ink,
            border: theme.palette.t1.system.slate
          },
          hover: {
            body: theme.palette.t1.system.slate
          },
          active: {
            body: theme.palette.t1.system.dark60
          },
          disabled: {
            body: theme.palette.t1.system.dark60,
            text: theme.palette.t1.system.pewter
          }
        },
        contrast: {
          text: theme.palette.t1.system.ink,
          default: {
            body: theme.palette.t1.system.white
          },
          hover: {
            body: theme.palette.t1.system.cloudy
          },
          active: {
            body: theme.palette.t1.system.misty
          },
          disabled: {
            body: theme.palette.t1.system.dark30,
            text: theme.palette.t1.system.ink
          }
        },
        contrastOutline: {
          body: theme.palette.t1.system.dark70,
          default: {
            border: theme.palette.t1.system.white,
            text: theme.palette.t1.system.white
          },
          hover: {
            border: theme.palette.t1.system.cloudy,
            text: theme.palette.t1.system.cloudy
          },
          active: {
            border: theme.palette.t1.system.misty,
            text: theme.palette.t1.system.misty
          },
          disabled: {
            border: theme.palette.t1.system.dark30,
            text: theme.palette.t1.system.dark30
          }
        },
        contrastReverse: {
          text: theme.palette.t1.system.white,
          default: {
            body: theme.palette.t1.system.dark70
          },
          hover: {
            body: theme.palette.t1.system.dark80
          },
          active: {
            body: theme.palette.t1.system.dark60
          },
          disabled: {
            body: theme.palette.t1.system.cloudy,
            text: theme.palette.t1.system.pewter
          }
        },
        contrastOutlineReverse: {
          body: theme.palette.t1.system.white,
          default: {
            border: theme.palette.t1.system.dark70,
            text: theme.palette.t1.system.dark70
          },
          hover: {
            border: theme.palette.t1.system.dark80,
            text: theme.palette.t1.system.dark80
          },
          active: {
            border: theme.palette.t1.system.dark60,
            text: theme.palette.t1.system.dark60
          },
          disabled: {
            border: theme.palette.t1.system.cloudy,
            text: theme.palette.t1.system.cloudy
          }
        },
        transparent: {
          body: theme.palette.t1.transparent,
          default: {
            text: theme.palette.t1.secondary.blue40
          },
          hover: {
            body: theme.palette.t1.transparent,
            text: theme.palette.t1.secondary.blue50,
            border: theme.palette.t1.system.slate
          },
          active: {
            body: theme.palette.t1.transparent,
            text: theme.palette.t1.secondary.blue30
          },
          disabled: {
            text: theme.palette.t1.system.pewter
          }
        },
        transparentReverse: {
          body: theme.palette.t1.transparent,
          default: {
            text: theme.palette.t1.secondary.blue60
          },
          hover: {
            body: theme.palette.t1.secondary.blue10,
            text: theme.palette.t1.secondary.blue50
          },
          active: {
            text: theme.palette.t1.secondary.blue70
          },
          disabled: {
            text: theme.palette.t1.system.silver
          }
        },
        link: {
          body: theme.palette.t1.transparent,
          default: {
            text: theme.palette.t1.secondary.blue40
          },
          hover: {
            text: theme.palette.t1.secondary.blue50
          },
          active: {
            text: theme.palette.t1.secondary.blue30
          },
          disabled: {
            text: theme.palette.t1.system.pewter
          }
        },
        elevated: {
          body: theme.palette.t1.system.ink,
          default: {
            text: theme.palette.t1.system.white
          },
          hover: {
            body: theme.palette.t1.system.slate,
            text: theme.palette.t1.system.white
          },
          active: {
            text: theme.palette.t1.system.dark60
          },
          disabled: {
            text: theme.palette.t1.system.pewter
          }
        },
        header: {
          default: {
            body: theme.palette.t1.transparent,
            text: theme.palette.t1.system.cloudy
          },
          hover: { body: theme.palette.t1.system.dark70 },
          active: { body: theme.palette.t1.system.dark70 },
          disabled: {
            body: theme.palette.t1.system.dark60,
            text: theme.palette.t1.system.pewter
          }
        },
        fab: {
          default: {
            default: {
              body: theme.palette.t1.system.ink,
              text: theme.palette.t1.system.white
            },
            hover: { body: theme.palette.t1.system.slate },
            active: {
              body: theme.palette.t1.system.dark60,
              border: theme.palette.t1.system.white
            },
            disabled: {
              body: theme.palette.t1.system.dark60,
              text: theme.palette.t1.system.pewter
            }
          },
          primary: {
            text: theme.palette.t1.primary.orange80,
            default: {
              body: theme.palette.t1.primary.orange40
            },
            hover: {
              body: theme.palette.t1.primary.orange45
            },
            active: {
              body: theme.palette.t1.primary.orange30,
              border: theme.palette.t1.system.white
            },
            disabled: {
              body: theme.palette.t1.primary.orange75
            }
          },
          secondary: {
            default: {
              body: theme.palette.t1.secondary.blue40,
              text: theme.palette.t1.secondary.blue80
            },
            hover: { body: theme.palette.t1.secondary.blue50 },
            active: {
              body: theme.palette.t1.secondary.blue30,
              border: theme.palette.t1.system.white
            },
            disabled: {
              body: theme.palette.t1.system.ink,
              text: theme.palette.t1.system.pewter
            }
          }
        },
        chip: {
          text: theme.palette.t1.secondary.blue40,
          default: {
            body: theme.palette.t1.system.slate
          },
          hover: {
            body: theme.palette.t1.system.slate
          },
          active: {
            body: theme.palette.t1.system.dark70
          },
          disabled: {
            body: theme.palette.t1.primary.orange20
          }
        },
        toggleIcon: {
          text: theme.palette.t1.system.pewter,
          default: {
            body: theme.palette.t1.system.ink,
            border: theme.palette.t1.system.slate
          },
          hover: {
            body: theme.palette.t1.system.white,
            border: theme.palette.t1.system.pewter
          },
          active: {
            body: theme.palette.t1.system.dark70,
            border: theme.palette.t1.system.slate
          },
          disabled: {
            body: theme.palette.t1.system.dark60,
            border: theme.palette.t1.system.ink,
            text: theme.palette.t1.system.slate
          },
          selected: {
            body: theme.palette.t1.system.dark70,
            text: theme.palette.t1.system.white,
            border: theme.palette.t1.system.slate
          },
          focused: {
            border: theme.palette.t1.secondary.blue40
          },
          icon: {
            body: theme.palette.t1.system.silver
          }
        },
        simpleIcon: {
          text: theme.palette.t1.system.white,
          default: {
            body: theme.palette.t1.system.white,
            border: theme.palette.t1.system.cloudy
          },
          hover: {
            text: theme.palette.t1.secondary.blue40
          },
          active: {
            body: theme.palette.t1.system.offWhite,
            border: theme.palette.t1.system.cloudy
          },
          disabled: {
            text: theme.palette.t1.system.pewter
          },
          selected: {
            body: theme.palette.t1.system.misty,
            text: theme.palette.t1.system.ink,
            border: theme.palette.t1.system.cloudy
          },
          focused: {
            border: theme.palette.t1.secondary.blue40
          },
          icon: {
            body: theme.palette.t1.system.pewter
          }
        }
      };
    }
    case "light":
    default: {
      return {
        loadingBackground: theme.palette.t1.system.pewter,
        loadingForeground: theme.palette.t1.system.pewter,
        primary: {
          text: theme.palette.t1.system.white,
          default: {
            body: theme.palette.t1.primary.orange60
          },
          hover: {
            body: theme.palette.t1.primary.orange50
          },
          active: {
            body: theme.palette.t1.primary.orange70
          },
          disabled: {
            body: theme.palette.t1.primary.orange20
          }
        },
        secondary: {
          body: theme.palette.t1.system.white,
          default: {
            border: theme.palette.t1.primary.orange60,
            text: theme.palette.t1.primary.orange60
          },
          hover: {
            border: theme.palette.t1.primary.orange50,
            text: theme.palette.t1.primary.orange50
          },
          active: {
            border: theme.palette.t1.primary.orange70,
            text: theme.palette.t1.primary.orange70
          },
          disabled: {
            border: theme.palette.t1.primary.orange20,
            text: theme.palette.t1.primary.orange20
          }
        },
        tertiary: {
          text: theme.palette.t1.system.ink,
          default: {
            body: theme.palette.t1.system.misty,
            border: theme.palette.t1.transparent
          },
          hover: {
            body: theme.palette.t1.system.cloudy
          },
          active: {
            body: theme.palette.t1.system.offWhite
          },
          disabled: {
            body: theme.palette.t1.system.misty,
            text: theme.palette.t1.system.silver
          }
        },
        contrast: {
          text: theme.palette.t1.system.white,
          default: {
            body: theme.palette.t1.system.dark70
          },
          hover: {
            body: theme.palette.t1.system.dark80
          },
          active: {
            body: theme.palette.t1.system.dark60
          },
          disabled: {
            body: theme.palette.t1.system.cloudy,
            text: theme.palette.t1.system.pewter
          }
        },
        contrastOutline: {
          body: theme.palette.t1.system.white,
          default: {
            border: theme.palette.t1.system.dark70,
            text: theme.palette.t1.system.dark70
          },
          hover: {
            border: theme.palette.t1.system.dark80,
            text: theme.palette.t1.system.dark80
          },
          active: {
            border: theme.palette.t1.system.dark60,
            text: theme.palette.t1.system.dark60
          },
          disabled: {
            border: theme.palette.t1.system.cloudy,
            text: theme.palette.t1.system.cloudy
          }
        },
        contrastReverse: {
          text: theme.palette.t1.system.ink,
          default: {
            body: theme.palette.t1.system.white
          },
          hover: {
            body: theme.palette.t1.system.cloudy
          },
          active: {
            body: theme.palette.t1.system.misty
          },
          disabled: {
            body: theme.palette.t1.system.dark30,
            text: theme.palette.t1.system.ink
          }
        },
        contrastOutlineReverse: {
          body: theme.palette.t1.system.dark70,
          default: {
            border: theme.palette.t1.system.white,
            text: theme.palette.t1.system.white
          },
          hover: {
            border: theme.palette.t1.system.cloudy,
            text: theme.palette.t1.system.cloudy
          },
          active: {
            border: theme.palette.t1.system.misty,
            text: theme.palette.t1.system.misty
          },
          disabled: {
            border: theme.palette.t1.system.dark30,
            text: theme.palette.t1.system.dark30
          }
        },
        transparent: {
          body: theme.palette.t1.transparent,
          default: {
            text: theme.palette.t1.secondary.blue60
          },
          hover: {
            body: theme.palette.t1.secondary.blue10,
            text: theme.palette.t1.secondary.blue50,
            border: theme.palette.t1.transparent
          },
          active: {
            body: theme.palette.t1.transparent,
            text: theme.palette.t1.secondary.blue70
          },
          disabled: {
            text: theme.palette.t1.system.silver
          }
        },
        transparentReverse: {
          body: theme.palette.t1.transparent,
          default: {
            text: theme.palette.t1.secondary.blue40
          },
          hover: {
            body: theme.palette.t1.system.ink,
            text: theme.palette.t1.secondary.blue50
          },
          active: {
            text: theme.palette.t1.secondary.blue30
          },
          disabled: {
            text: theme.palette.t1.system.pewter
          }
        },
        link: {
          body: theme.palette.t1.transparent,
          default: {
            text: theme.palette.t1.secondary.blue60
          },
          hover: {
            text: theme.palette.t1.secondary.blue50
          },
          active: {
            text: theme.palette.t1.secondary.blue70
          },
          disabled: {
            text: theme.palette.t1.system.silver
          }
        },
        elevated: {
          body: theme.palette.t1.system.white,
          default: {
            text: theme.palette.t1.system.ink
          },
          hover: {
            body: theme.palette.t1.system.offWhite
          },
          active: {
            text: theme.palette.t1.secondary.blue70,
            body: theme.palette.t1.system.misty
          },
          disabled: {
            text: theme.palette.t1.system.silver
          }
        },
        header: {
          default: {
            body: theme.palette.t1.transparent,
            text: theme.palette.t1.system.pewter
          },
          hover: { body: theme.palette.t1.system.offWhite },
          active: { body: theme.palette.t1.system.offWhite },
          disabled: {
            body: theme.palette.t1.transparent,
            text: theme.palette.t1.system.silver
          }
        },
        fab: {
          default: {
            default: {
              body: theme.palette.t1.system.misty,
              text: theme.palette.t1.system.ink
            },
            hover: { body: theme.palette.t1.system.cloudy },
            active: {
              body: theme.palette.t1.system.offWhite,
              border: theme.palette.t1.system.dark80
            },
            disabled: {
              body: theme.palette.t1.system.cloudy,
              text: theme.palette.t1.system.silver
            }
          },
          primary: {
            text: theme.palette.t1.system.white,
            default: {
              body: theme.palette.t1.primary.orange60
            },
            hover: {
              body: theme.palette.t1.primary.orange50
            },
            active: {
              body: theme.palette.t1.primary.orange70,
              border: theme.palette.t1.system.dark80
            },
            disabled: {
              body: theme.palette.t1.primary.orange20
            }
          },
          secondary: {
            default: {
              body: theme.palette.t1.secondary.blue60,
              text: theme.palette.t1.system.white
            },
            hover: { body: theme.palette.t1.secondary.blue50 },
            active: {
              body: theme.palette.t1.secondary.blue70,
              border: theme.palette.t1.system.dark80
            },
            disabled: {
              body: theme.palette.t1.secondary.blue20,
              text: theme.palette.t1.system.silver
            }
          }
        },
        chip: {
          text: theme.palette.t1.secondary.blue60,
          default: {
            body: theme.palette.t1.secondary.blue10
          },
          hover: {
            body: theme.palette.t1.secondary.blue20
          },
          active: {
            body: theme.palette.t1.secondary.blue30
          },
          disabled: {
            body: theme.palette.t1.secondary.blue60,
            text: theme.palette.t1.secondary.blue60
          }
        },
        toggleIcon: {
          text: theme.palette.t1.system.pewter,
          default: {
            body: theme.palette.t1.system.white,
            border: theme.palette.t1.system.cloudy
          },
          hover: {
            body: theme.palette.t1.system.white,
            border: theme.palette.t1.system.silver
          },
          active: {
            body: theme.palette.t1.system.offWhite,
            border: theme.palette.t1.system.cloudy
          },
          disabled: {
            body: theme.palette.t1.system.misty,
            border: theme.palette.t1.system.cloudy,
            text: theme.palette.t1.system.silver
          },
          selected: {
            body: theme.palette.t1.system.misty,
            text: theme.palette.t1.system.ink,
            border: theme.palette.t1.system.cloudy
          },
          focused: {
            border: theme.palette.t1.secondary.blue60
          },
          icon: {
            body: theme.palette.t1.system.pewter
          }
        },
        simpleIcon: {
          text: theme.palette.t1.system.ink,
          default: {
            body: theme.palette.t1.system.white,
            border: theme.palette.t1.system.cloudy
          },
          hover: {
            text: theme.palette.t1.secondary.blue60
          },
          active: {
            body: theme.palette.t1.system.offWhite,
            border: theme.palette.t1.system.cloudy
          },
          disabled: {
            text: theme.palette.t1.system.silver
          },
          selected: {
            body: theme.palette.t1.system.misty,
            text: theme.palette.t1.system.ink,
            border: theme.palette.t1.system.cloudy
          },
          focused: {
            border: theme.palette.t1.secondary.blue60
          },
          icon: {
            body: theme.palette.t1.system.pewter
          }
        }
      };
    }
  }
};
var StyledChipButton = styled(_MuiButton)(({
  theme
}) => {
  const palette = _buttonTheme(theme);
  return {
    ".MuiSvgIcon-root": {
      color: "inherit"
    },
    whiteSpace: "nowrap",
    textTransform: "none",
    fontFamily: theme.typography.paragraph.md.medium.fontFamily,
    fontSize: theme.typography.paragraph.md.medium.fontSize,
    boxShadow: "none",
    backgroundColor: palette.chip.default.body,
    height: "20px",
    padding: theme.spacing(4),
    borderRadius: "24px",
    color: palette.chip.text,
    margin: 0,
    "&:hover": {
      backgroundColor: palette.chip.hover.body
    },
    "&:active, &.T1-chipButton-active": {
      backgroundColor: palette.chip.active.body
    },
    "&.Mui-focusVisible": {
      backgroundColor: palette.chip.default.body,
      outline: `1px dashed ${palette.chip.text}`,
      "&:hover": {
        backgroundColor: palette.chip.hover.body
      },
      "&:active, &.T1-chipButton-active": {
        backgroundColor: palette.chip.active.body
      }
    },
    "&.Mui-disabled": {
      color: palette.chip.text,
      backgroundColor: palette.chip.default.body,
      opacity: "50%",
      cursor: "not-allowed",
      pointerEvents: "all"
    }
  };
});
var StyledToggleIconButton = styled(_MuiButton)(({ theme, buttontype = "center", selected = false }) => {
  const getBorderRadius = () => {
    switch (buttontype) {
      case "left":
        return `${theme.shape.borderRadius}px 0 0 ${theme.shape.borderRadius}px`;
      case "right":
        return `0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0`;
      case "top":
        return `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 0`;
      case "bottom":
        return `0 0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px`;
      case "center":
      default:
        return "0";
    }
  };
  return {
    minWidth: "auto",
    width: "54px",
    height: "36px",
    padding: 0,
    borderRadius: getBorderRadius(),
    position: "relative",
    boxSizing: "content-box",
    backgroundColor: selected ? theme.palette.button.toggleIcon.selected.body : theme.palette.button.toggleIcon.default.body,
    color: selected ? theme.palette.button.toggleIcon.selected.text : theme.palette.button.toggleIcon.text,
    border: selected ? `1px solid ${theme.palette.button.toggleIcon.selected.border}` : `1px solid ${theme.palette.button.toggleIcon.default.border}`,
    "&:hover, &.Mui-HoverVisible": {
      backgroundColor: theme.palette.button.toggleIcon.default.body,
      border: `1px solid ${theme.palette.button.toggleIcon.hover.border}`
    },
    "&:active, &.isActive": {
      backgroundColor: theme.palette.button.toggleIcon.active.body
    },
    "&.Mui-focusVisible": {
      backgroundColor: theme.palette.button.toggleIcon.default.body,
      border: `1px dashed ${theme.palette.button.toggleIcon.focused.border}`,
      outline: "none",
      "&:hover": {
        backgroundColor: theme.palette.button.toggleIcon.default.body
      }
    },
    "&.Mui-disabled": {
      backgroundColor: theme.palette.button.toggleIcon.disabled.body,
      color: theme.palette.action.disabled,
      border: `1px solid ${theme.palette.button.toggleIcon.disabled.border}`,
      ".MuiSvgIcon-root": {
        color: theme.palette.button.toggleIcon.disabled.text
      }
    },
    "& .MuiSvgIcon-root": {
      fontSize: "20px",
      color: selected ? theme.palette.button.toggleIcon.selected.text : theme.palette.button.toggleIcon.icon.body
    }
  };
});
var StyledSimpleIconButton = styled(IconButton)(({ theme, variant, selected }) => ({
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  transition: "color 0.2s ease-in-out",
  width: "24px",
  height: "24px",
  color: theme.palette.button.simpleIcon.text,
  "&:hover:not(:disabled), &.Mui-HoverVisible": {
    backgroundColor: "transparent",
    color: theme.palette.button.simpleIcon.hover.text
  },
  ...selected && {
    color: variant === "heart" ? "#C62828" : "#FBC02D",
    "&:hover:not(:disabled)": {
      color: variant === "heart" ? "#C62828" : "#FBC02D"
    }
  },
  "&.Mui-focusVisible": {
    backgroundColor: "transparent",
    color: theme.palette.button.simpleIcon.hover.text,
    border: `1px dashed ${theme.palette.button.toggleIcon.focused.border}`,
    outlineOffset: "2px"
  },
  "&:disabled": {
    color: theme.palette.button.simpleIcon.disabled.text,
    cursor: "not-allowed"
  },
  "& .MuiSvgIcon-root": {
    fontSize: "1rem",
    transition: "inherit"
  }
}));
var StyledButtonArrangement = styled(Stack)(({
  theme
}) => {
  return {
    display: "flex",
    gap: theme.spacing(3),
    justifyContent: "end",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      ".MuiButtonBase-root": { width: "100%" }
    }
  };
});

// lib/buttons/constants.ts
var STROKE_WIDTH = {
  large: "3px",
  medium: "4px",
  small: "5px",
  extraSmall: "5.5px"
};

// lib/circular-progress/theme.ts
import { styled as styled2 } from "@mui/material";

// lib/circular-progress/constants.ts
var SIZE_MAP = {
  extraLarge: "90px",
  large: "60px",
  medium: "48px",
  small: "30px",
  extraSmall: "18px"
};
var STROKE_WIDTH2 = {
  extraLarge: "0.9px",
  large: "1.2px",
  medium: "1.5px",
  small: "2.4px",
  extraSmall: "4px"
};

// lib/circular-progress/theme.ts
var circularProgressTheme = (theme) => {
  switch (theme.name) {
    case "dark": {
      return {
        default: {
          background: theme.palette.t1.system.slate,
          foreground: theme.palette.t1.system.white
        },
        brand: {
          background: theme.palette.t1.primary.orange75,
          foreground: theme.palette.t1.primary.orange30
        },
        stepper: {
          background: theme.palette.t1.system.silver,
          foreground: theme.palette.t1.secondary.blue40
        }
      };
    }
    case "light": {
      return {
        default: {
          background: theme.palette.t1.secondary.blue20,
          foreground: theme.palette.t1.secondary.blue80
        },
        brand: {
          background: theme.palette.t1.primary.orange10,
          foreground: theme.palette.t1.primary.orange50
        },
        stepper: {
          background: theme.palette.t1.secondary.blue30,
          foreground: theme.palette.t1.secondary.blue60
        }
      };
    }
  }
};
var StyledCircularProgressWrapper = styled2(
  "div"
)(({
  theme,
  size,
  color
}) => {
  const palette = circularProgressTheme(theme);
  return {
    position: "relative",
    width: `${SIZE_MAP[size]}`,
    height: `${SIZE_MAP[size]}`,
    stroke: `${palette[color].background}`,
    circle: {
      strokeWidth: `${STROKE_WIDTH2[size]}`,
      fill: "transparent"
    },
    ".MuiCircularProgress-root": {
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      color: `${palette[color].foreground}`
    }
  };
});
var StyledStepperCircularProgressWrapper = styled2("div")(({
  theme,
  color
}) => {
  const palette = circularProgressTheme(theme);
  return {
    position: "relative",
    width: "24px",
    height: "24px",
    strokeWidth: "2.5",
    stroke: palette.default.background,
    svg: {
      position: "absolute",
      left: 0
    },
    circle: {
      fill: "transparent"
    },
    "&.T1-CircularProgressWrapper-Stepper": {
      stroke: palette.stepper.background
    },
    ".T1-CircularProgress-Stepper": {
      stroke: palette.stepper.foreground
    },
    ".MuiCircularProgress-root": {
      maxWidth: "100%",
      maxHeight: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      color: palette[color].foreground
    }
  };
});

// lib/circular-progress/component.tsx
import { CircularProgress as MuiCircularProgress } from "@mui/material";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var CircularProgress = ({
  color = "default",
  size = "medium",
  ...props
}) => {
  return /* @__PURE__ */ jsxs(
    StyledCircularProgressWrapper,
    {
      size,
      color,
      className: "T1-CircularProgress-wrapper",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsx2(
          "svg",
          {
            className: "CircularProgress-background",
            viewBox: "22 22 44 44",
            xmlns: "http://www.w3.org/2000/svg",
            style: { maxWidth: "100%", maxHeight: "100%" },
            children: /* @__PURE__ */ jsx2("circle", { cx: "44", cy: "44", r: "20.2" })
          }
        ),
        /* @__PURE__ */ jsx2(MuiCircularProgress, { ...props, size: SIZE_MAP[size] })
      ]
    }
  );
};

// lib/buttons/component.tsx
import {
  ArrowDropDown,
  Favorite,
  FavoriteBorder,
  Star,
  StarBorder
} from "@mui/icons-material";

// lib/menu/component.tsx
import React from "react";
import { Menu as MuiMenu } from "@mui/material";

// lib/cms/component.tsx
import { useEffect, useMemo, useState, createElement } from "react";
import { useIntl, IntlProvider } from "react-intl";
import { jsx as jsx3 } from "react/jsx-runtime";
var createHTMLTagsMapper = () => {
  const htmlTags = [
    // Document structure
    "html",
    "head",
    "body",
    "title",
    "meta",
    "link",
    "style",
    "script",
    "noscript",
    "base",
    // Sections
    "header",
    "nav",
    "main",
    "section",
    "article",
    "aside",
    "footer",
    "address",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    // Grouping content
    "div",
    "p",
    "hr",
    "pre",
    "blockquote",
    "ol",
    "ul",
    "li",
    "dl",
    "dt",
    "dd",
    "figure",
    "figcaption",
    // Text-level semantics
    "a",
    "em",
    "strong",
    "small",
    "mark",
    "del",
    "ins",
    "q",
    "cite",
    "abbr",
    "dfn",
    "time",
    "code",
    "var",
    "samp",
    "kbd",
    "sub",
    "sup",
    "i",
    "b",
    "u",
    "s",
    "span",
    "br",
    "wbr",
    "bdi",
    "bdo",
    "ruby",
    "rt",
    "rp",
    // Embedded content
    "img",
    "iframe",
    "embed",
    "object",
    "param",
    "video",
    "audio",
    "source",
    "track",
    "map",
    "area",
    "svg",
    "math",
    // Tabular data
    "table",
    "caption",
    "colgroup",
    "col",
    "tbody",
    "thead",
    "tfoot",
    "tr",
    "td",
    "th",
    // Forms
    "form",
    "fieldset",
    "legend",
    "label",
    "input",
    "button",
    "select",
    "datalist",
    "optgroup",
    "option",
    "textarea",
    "output",
    "progress",
    "meter",
    // Interactive elements
    "details",
    "summary",
    "dialog",
    // Web Components
    "slot",
    "template",
    // Deprecated but still used
    "center",
    "font",
    "big",
    "small",
    "tt"
  ];
  const mapper = {};
  htmlTags.forEach((tag) => {
    mapper[tag] = (chunks) => createElement(tag, {}, chunks);
  });
  return mapper;
};
var htmlTagsMapper = createHTMLTagsMapper();
var useGetCMSContent = () => {
  const intl = useIntl();
  return ({
    contentId,
    key,
    fallbackContent = "Content not found",
    values,
    enableHTMLTags = false
  }) => {
    const id = key || null;
    const messageId = `${contentId}${id}`;
    const notFoundMarker = `__CMS_NOT_FOUND__${messageId}__`;
    const formatValues = enableHTMLTags ? { ...htmlTagsMapper, ...values } : values;
    const cmsMessage = intl.formatMessage(
      {
        id: messageId,
        defaultMessage: notFoundMarker
      },
      formatValues
    );
    return cmsMessage === notFoundMarker ? fallbackContent : cmsMessage;
  };
};

// lib/menu-item/component.tsx
import { styled as styled3 } from "@mui/material/styles";
import { MenuItem as MuiMenuItem } from "@mui/material";
import { jsx as jsx4 } from "react/jsx-runtime";
var StyledMenuItem = styled3(MuiMenuItem)(({ theme }) => ({
  fontFamily: theme.typography.paragraph.md.regular.fontFamily,
  fontSize: theme.typography.paragraph.md.regular.fontSize,
  lineHeight: theme.typography.paragraph.md.regular.lineHeight,
  padding: theme.spacing(3),
  color: theme.palette.menuItem.text,
  backgroundColor: theme.palette.menuItem.background,
  minWidth: 220,
  "&.MuiAutocomplete-option.Mui-focused": {
    backgroundColor: theme.palette.menuItem.background
  },
  "&.MuiMenuItem-divider": {
    borderBottom: `1px solid ${theme.palette.menuItem.divider}`
  },
  "&.menuItemLvl-1": {
    paddingLeft: theme.spacing(9)
  },
  "&.menuItemLvl-2": {
    paddingLeft: theme.spacing(15)
  },
  "&:hover, &.Mui-selected:hover, &.Mui-focusVisible:hover, &.Mui-selected.Mui-focusVisible:hover, &.MuiAutocomplete-option:hover, &.MuiAutocomplete-option[aria-selected=true]:hover": {
    backgroundColor: theme.palette.menuItem.hover.background
  },
  "&:active, &.Mui-selected:active, &.Mui-selected.Mui-focusVisible:active, &.Mui-focusVisible:active, &.MuiAutocomplete-option:active, &.MuiAutocomplete-option[aria-selected=true], &.MuiAutocomplete-option[aria-selected=true].Mui-focused": {
    backgroundColor: `${theme.palette.menuItem.active.background}`
  },
  "&.Mui-focusVisible, &.Mui-selected.Mui-focusVisible": {
    outline: `dashed 1px ${theme.palette.checkbox.outlineFocus}`,
    outlineOffset: "-1px",
    backgroundColor: theme.palette.menuItem.background
  },
  "&.Mui-selected": {
    fontFamily: theme.typography.paragraph.md.medium.fontFamily,
    backgroundColor: theme.palette.menuItem.background
  },
  "&.Mui-disabled": {
    color: theme.palette.menuItem.disabled.text,
    opacity: 1,
    cursor: "not-allowed"
  },
  "&.menuItemHeader": {
    fontSize: theme.typography.paragraph.xs.medium.fontSize,
    lineHeight: theme.typography.paragraph.xs.medium.lineHeight,
    fontFamily: theme.typography.paragraph.xs.medium.fontFamily,
    textTransform: "uppercase",
    tabIndex: "-1",
    pointerEvents: "none",
    backgroundColor: theme.palette.menuItem.headerBackground,
    color: theme.palette.menuItem.headerText
  }
}));
var MenuItem = ({
  children,
  className = "",
  header,
  lvl = 0,
  ...rest
}) => {
  return /* @__PURE__ */ jsx4(
    StyledMenuItem,
    {
      ...rest,
      disableRipple: true,
      disableTouchRipple: true,
      className: `${className} ${header ? "menuItemHeader" : ""} menuItemLvl-${lvl}`,
      children
    }
  );
};

// lib/menu-item/theme.ts
var menuItemTheme = {
  dark: {
    name: "menuItem",
    styles: {
      text: COLORS.SYSTEM.WHITE,
      background: COLORS.SYSTEM.DARK_60,
      headerBackground: COLORS.SYSTEM.INK,
      headerText: COLORS.SYSTEM.SILVER,
      divider: COLORS.SYSTEM.SLATE,
      hover: {
        background: COLORS.SYSTEM.DARK_70
      },
      active: {
        background: COLORS.SYSTEM.DARK_80
      },
      disabled: {
        text: COLORS.SYSTEM.PEWTER
      }
    }
  },
  light: {
    name: "menuItem",
    styles: {
      text: COLORS.SYSTEM.INK,
      background: COLORS.SYSTEM.WHITE,
      headerBackground: COLORS.SYSTEM.OFF_WHITE,
      headerText: COLORS.SYSTEM.DARK_30,
      divider: COLORS.SYSTEM.MISTY,
      hover: {
        background: COLORS.SECONDARY.BLUE_10
      },
      active: {
        background: COLORS.SECONDARY.BLUE_20
      },
      disabled: {
        text: COLORS.SYSTEM.SILVER
      }
    }
  }
};

// lib/menu/component.tsx
import { styled as styled4 } from "@mui/material/styles";
import { jsx as jsx5 } from "react/jsx-runtime";
var StyledMenu = styled4(MuiMenu)(() => ({
  padding: 0,
  ".MuiList-root": {
    padding: 0
  }
}));
var Menu = React.forwardRef(
  (props, ref) => {
    const propsWithDefault = {
      variant: "default",
      ...props
    };
    return /* @__PURE__ */ jsx5(
      StyledMenu,
      {
        ...omitCustomProps(propsWithDefault, ["variant"]),
        elevation: 1,
        ref,
        className: propsWithDefault.variant ? "menu-breadcrumbs" : "",
        "data-testid": "menu",
        children: propsWithDefault.children
      }
    );
  }
);
var MenuWithCMS = React.forwardRef(
  ({ contentId, variant, ...rest }, ref) => {
    const intl = useIntl();
    const keys = Object.keys(intl.messages).filter(
      (key) => key.startsWith(`${contentId}.items`) && key.endsWith(".label")
    ).map((key) => intl.messages[key]);
    return /* @__PURE__ */ jsx5(
      StyledMenu,
      {
        ...rest,
        elevation: 1,
        ref,
        className: variant ? "menu-breadcrumbs" : "",
        "data-testid": "menu",
        children: keys.map((item) => /* @__PURE__ */ jsx5(MenuItem, { children: item }, item.toString()))
      }
    );
  }
);

// lib/checkbox/theme.ts
import { styled as styled5 } from "@mui/material";

// lib/form-helper-text/component.tsx
import {
  FormHelperText as MuiFormHelperText
} from "@mui/material";
import { WarningAmberOutlined } from "@mui/icons-material";
import { jsx as jsx6, jsxs as jsxs2 } from "react/jsx-runtime";
var FormHelperText = (props) => {
  return /* @__PURE__ */ jsxs2(MuiFormHelperText, { ...props, variant: "outlined", children: [
    props.error && /* @__PURE__ */ jsx6(WarningAmberOutlined, {}),
    props.children
  ] });
};

// lib/checkbox/theme.ts
var checkboxTheme = {
  dark: {
    name: "checkbox",
    styles: {
      outlineFocus: COLORS.SECONDARY.BLUE_40,
      subheading: COLORS.SYSTEM.SILVER,
      svgColor: COLORS.SYSTEM.DARK_70,
      default: {
        checked: COLORS.SECONDARY.BLUE_40,
        unchecked: COLORS.SYSTEM.MISTY,
        label: COLORS.SYSTEM.WHITE
      },
      hover: {
        checked: COLORS.SECONDARY.BLUE_30,
        unchecked: COLORS.SECONDARY.BLUE_40,
        label: COLORS.SYSTEM.WHITE
      },
      focus: {
        checked: COLORS.SECONDARY.BLUE_30,
        unchecked: COLORS.SECONDARY.BLUE_40,
        label: COLORS.SYSTEM.WHITE
      },
      error: {
        checked: COLORS.ERROR.ERROR_20,
        unchecked: COLORS.ERROR.ERROR_20,
        label: COLORS.SYSTEM.WHITE
      },
      disabled: {
        checked: COLORS.SYSTEM.PEWTER,
        unchecked: COLORS.SYSTEM.PEWTER,
        label: COLORS.SYSTEM.PEWTER
      }
    }
  },
  light: {
    name: "checkbox",
    styles: {
      outlineFocus: COLORS.SECONDARY.BLUE_60,
      subheading: COLORS.SYSTEM.DARK_30,
      svgColor: COLORS.SYSTEM.WHITE,
      default: {
        checked: COLORS.SECONDARY.BLUE_60,
        unchecked: COLORS.SYSTEM.SLATE,
        label: COLORS.SYSTEM.INK
      },
      hover: {
        checked: COLORS.SECONDARY.BLUE_70,
        unchecked: COLORS.SECONDARY.BLUE_60,
        label: COLORS.SYSTEM.INK
      },
      focus: {
        checked: COLORS.SECONDARY.BLUE_70,
        unchecked: COLORS.SECONDARY.BLUE_60,
        label: COLORS.SYSTEM.INK
      },
      error: {
        checked: COLORS.ERROR.ERROR_40,
        unchecked: COLORS.ERROR.ERROR_40,
        label: COLORS.SYSTEM.INK
      },
      disabled: {
        checked: COLORS.SYSTEM.SILVER,
        unchecked: COLORS.SYSTEM.SILVER,
        label: COLORS.SYSTEM.SILVER
      }
    }
  }
};
var _checkboxTheme = (theme) => {
  switch (theme.name) {
    case "dark": {
      return {
        outlineFocus: theme.palette.t1.secondary.blue40,
        subheading: theme.palette.t1.system.silver,
        svgColor: theme.palette.t1.system.dark70,
        default: {
          checked: theme.palette.t1.secondary.blue40,
          unchecked: theme.palette.t1.system.misty,
          label: theme.palette.t1.system.white
        },
        hover: {
          checked: theme.palette.t1.secondary.blue30,
          unchecked: theme.palette.t1.secondary.blue40,
          label: theme.palette.t1.system.white
        },
        focus: {
          checked: theme.palette.t1.secondary.blue30,
          unchecked: theme.palette.t1.secondary.blue40,
          label: theme.palette.t1.system.white
        },
        error: {
          checked: theme.palette.t1.error.error20,
          unchecked: theme.palette.t1.error.error20,
          label: theme.palette.t1.system.white
        },
        disabled: {
          checked: theme.palette.t1.system.pewter,
          unchecked: theme.palette.t1.system.pewter,
          label: theme.palette.t1.system.pewter
        }
      };
    }
    case "light": {
      return {
        outlineFocus: theme.palette.t1.secondary.blue60,
        subheading: theme.palette.t1.system.dark30,
        svgColor: theme.palette.t1.system.white,
        default: {
          checked: theme.palette.t1.secondary.blue60,
          unchecked: theme.palette.t1.system.slate,
          label: theme.palette.t1.system.ink
        },
        hover: {
          checked: theme.palette.t1.secondary.blue70,
          unchecked: theme.palette.t1.secondary.blue60,
          label: theme.palette.t1.system.ink
        },
        focus: {
          checked: theme.palette.t1.secondary.blue70,
          unchecked: theme.palette.t1.secondary.blue60,
          label: theme.palette.t1.system.ink
        },
        error: {
          checked: theme.palette.t1.error.error40,
          unchecked: theme.palette.t1.error.error40,
          label: theme.palette.t1.system.ink
        },
        disabled: {
          checked: theme.palette.t1.system.silver,
          unchecked: theme.palette.t1.system.silver,
          label: theme.palette.t1.system.silver
        }
      };
    }
  }
};
var StyledCheckboxHelperText = styled5(FormHelperText)(({
  theme
}) => {
  const palette = _checkboxTheme(theme);
  return {
    fontWeight: theme.typography.fontWeightRegular,
    margin: 0,
    padding: 0,
    transform: `translateX(${theme.spacing(8.5)})`,
    color: palette.subheading,
    fontFamily: theme.typography.paragraph.sm.regular.fontFamily,
    fontSize: theme.typography.paragraph.sm.regular.fontSize,
    lineHeight: theme.typography.paragraph.sm.regular.lineHeight
  };
});

// lib/checkbox/component.tsx
import { useMemo as useMemo2 } from "react";
import { Checkbox as MuiCheckbox } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SvgIcon from "@mui/material/SvgIcon";
import { jsx as jsx7, jsxs as jsxs3 } from "react/jsx-runtime";

// lib/typography/theme.ts
var typographyTheme = {
  dark: {
    name: "typography",
    styles: {
      color: COLORS.SYSTEM.WHITE,
      disabledColor: COLORS.SYSTEM.PEWTER
    }
  },
  light: {
    name: "typography",
    styles: {
      color: COLORS.SYSTEM.INK,
      disabledColor: COLORS.SYSTEM.SILVER
    }
  }
};

// lib/typography/component.tsx
import { Typography as MuiTypography } from "@mui/material";
import { styled as styled6 } from "@mui/material/styles";
import { forwardRef } from "react";
import { jsx as jsx8 } from "react/jsx-runtime";
var getHeadingStyles = (theme, heading) => {
  return {
    fontSize: theme.typography[heading].regular.fontSize,
    lineHeight: theme.typography[heading].regular.lineHeight,
    fontFamily: theme.typography[heading].regular.fontFamily,
    [theme.breakpoints.down("smTypo")]: {
      fontSize: theme.typography[`${heading}sm`].regular.fontSize,
      lineHeight: theme.typography[`${heading}sm`].regular.lineHeight,
      fontFamily: theme.typography[`${heading}sm`].regular.fontFamily
    },
    "&.medium": {
      fontSize: theme.typography[heading].medium.fontSize,
      lineHeight: theme.typography[heading].medium.lineHeight,
      fontFamily: theme.typography[heading].medium.fontFamily,
      [theme.breakpoints.down("smTypo")]: {
        fontSize: theme.typography[`${heading}sm`].medium.fontSize,
        lineHeight: theme.typography[`${heading}sm`].medium.lineHeight,
        fontFamily: theme.typography[`${heading}sm`].medium.fontFamily
      }
    },
    "&.bold": {
      fontSize: theme.typography[heading].bold.fontSize,
      lineHeight: theme.typography[heading].bold.lineHeight,
      fontFamily: theme.typography[heading].bold.fontFamily,
      [theme.breakpoints.down("smTypo")]: {
        fontSize: theme.typography[`${heading}sm`].bold.fontSize,
        lineHeight: theme.typography[`${heading}sm`].bold.lineHeight,
        fontFamily: theme.typography[`${heading}sm`].bold.fontFamily
      }
    }
  };
};
var getParagraphStyles = (theme, size) => ({
  fontSize: theme.typography.paragraph[size].regular.fontSize,
  lineHeight: theme.typography.paragraph[size].regular.lineHeight,
  fontFamily: theme.typography.paragraph[size].regular.fontFamily,
  "&.medium": {
    fontSize: theme.typography.paragraph[size].medium.fontSize,
    lineHeight: theme.typography.paragraph[size].medium.lineHeight,
    fontFamily: theme.typography.paragraph[size].medium.fontFamily
  },
  "&.bold, & strong": {
    fontSize: theme.typography.paragraph[size].bold.fontSize,
    lineHeight: theme.typography.paragraph[size].bold.lineHeight,
    fontFamily: theme.typography.paragraph[size].bold.fontFamily
  }
});
var Typography = forwardRef(
  (props, ref) => {
    const propsWithDefault = {
      weight: "regular",
      variant: "paragraphMd",
      ...props
    };
    return /* @__PURE__ */ jsx8(
      StyledTypography,
      {
        ref,
        className: `T1-typography T1-typography-${propsWithDefault.variant} ${propsWithDefault.weight} ${propsWithDefault.className ?? ""}`,
        ...omitCustomProps(propsWithDefault, [
          "className",
          "weight",
          "variant"
        ])
      }
    );
  }
);
var StyledTypography = styled6(MuiTypography)(({
  theme
}) => {
  return {
    "&.T1-typography-h1": getHeadingStyles(theme, "h1"),
    "&.T1-typography-h2": getHeadingStyles(theme, "h2"),
    "&.T1-typography-h3": getHeadingStyles(theme, "h3"),
    "&.T1-typography-h4": getHeadingStyles(theme, "h4"),
    "&.T1-typography-h5": getHeadingStyles(theme, "h5"),
    "&.T1-typography-h6": getHeadingStyles(theme, "h6"),
    "&.T1-typography-caption": {
      fontSize: theme.typography.caption.regular.fontSize,
      lineHeight: theme.typography.caption.regular.lineHeight,
      fontFamily: theme.typography.caption.regular.fontFamily,
      "&.medium": {
        fontSize: theme.typography.caption.medium.fontSize,
        lineHeight: theme.typography.caption.medium.lineHeight,
        fontFamily: theme.typography.caption.medium.fontFamily
      },
      "&.bold": {
        fontSize: theme.typography.caption.bold.fontSize,
        lineHeight: theme.typography.caption.bold.lineHeight,
        fontFamily: theme.typography.caption.bold.fontFamily
      }
    },
    "&.T1-typography-paragraphXl": getParagraphStyles(theme, "xl"),
    "&.T1-typography-paragraphLg": getParagraphStyles(theme, "lg"),
    "&.T1-typography-paragraphMd": getParagraphStyles(theme, "md"),
    "&.T1-typography-paragraphSm": getParagraphStyles(theme, "sm"),
    "&.T1-typography-paragraphXs": getParagraphStyles(theme, "xs"),
    // TO-DO - Check if this line of code is necessary. Removed temporarily because of conflicts in Tile component.
    color: theme.palette.typography.color
  };
});

// lib/buttons/component.tsx
import { Fragment, jsx as jsx9, jsxs as jsxs4 } from "react/jsx-runtime";
var Button = ({
  size = "medium",
  loading,
  disabled,
  children,
  contentId,
  cmsOptions,
  className,
  ...props
}) => {
  const getContent = useGetCMSContent();
  const buttonChildren = contentId ? getContent({
    contentId,
    key: cmsOptions?.key || ".label",
    fallbackContent: cmsOptions?.fallbackContent || children,
    values: cmsOptions?.values || {}
  }) : children;
  return /* @__PURE__ */ jsxs4(
    MuiButton,
    {
      disabled: disabled || loading,
      size,
      ...props,
      disableRipple: true,
      className: `T1-button ${className}`,
      children: [
        loading && /* @__PURE__ */ jsx9(
          CircularProgress,
          {
            "data-testid": "circular-progress",
            sx: {
              circle: {
                strokeWidth: STROKE_WIDTH[size]
              }
            }
          }
        ),
        buttonChildren
      ]
    }
  );
};
var ButtonArrangement = ({
  contentId,
  cmsOptions,
  ...props
}) => {
  const theme = useTheme2();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const getContent = useGetCMSContent();
  const primaryButtonContent = contentId ? getContent({
    contentId,
    key: ".primary",
    values: cmsOptions?.values || {}
  }) : props?.primary?.label || "Content not found";
  const secondaryButtonContent = contentId ? getContent({
    contentId,
    key: ".secondary",
    values: cmsOptions?.values || {}
  }) : props?.secondary?.label || "Content not found";
  const tertiaryButtonContent = contentId ? getContent({
    contentId,
    key: ".tertiary",
    values: cmsOptions?.values || {}
  }) : props?.tertiary?.label || "Content not found";
  return /* @__PURE__ */ jsxs4(
    StyledButtonArrangement,
    {
      "data-testid": "T1-button-arrangement",
      direction: isMobile ? "column" : "row",
      children: [
        (contentId && tertiaryButtonContent !== "Content not found" || props.tertiary) && /* @__PURE__ */ jsx9(
          Button,
          {
            sx: { marginRight: isMobile ? "" : "auto" },
            onMouseDown: (e) => {
              e.stopPropagation();
            },
            onClick: (e) => {
              e.preventDefault();
              e.stopPropagation();
              props.tertiary?.action?.();
            },
            variant: "transparent",
            children: tertiaryButtonContent
          }
        ),
        (contentId && secondaryButtonContent !== "Content not found" || props.secondary) && /* @__PURE__ */ jsx9(
          Button,
          {
            onMouseDown: (e) => {
              e.stopPropagation();
            },
            onClick: (e) => {
              e.preventDefault();
              e.stopPropagation();
              props.secondary?.action?.();
            },
            variant: "secondary",
            children: secondaryButtonContent
          }
        ),
        /* @__PURE__ */ jsx9(
          Button,
          {
            onMouseDown: (e) => {
              e.stopPropagation();
            },
            onClick: (e) => {
              e.preventDefault();
              e.stopPropagation();
              props.primary?.action?.();
            },
            variant: "primary",
            children: primaryButtonContent
          }
        )
      ]
    }
  );
};

// lib/icon-button/component.tsx
import { IconButton as MuiIconButton } from "@mui/material";
import { jsx as jsx10 } from "react/jsx-runtime";
var IconButton2 = (props) => {
  const propsWithDefault = {
    variant: "transparent",
    shape: "circle",
    ...props
  };
  const {
    variant = "transparent",
    shape = "circle",
    children,
    className,
    ...rest
  } = propsWithDefault;
  return /* @__PURE__ */ jsx10(
    MuiIconButton,
    {
      className: `T1-icon-button MuiIconButton-${variant} MuiIconButton-${shape} ${className}`,
      ...omitCustomProps(rest, ["disableRipple", "disableFocusRipple"]),
      sx: props.sx,
      disableRipple: true,
      disableFocusRipple: true,
      children
    }
  );
};

// lib/card/component.tsx
import React4 from "react";
import {
  Card as MuiCard,
  CardActions as MuiCardActions,
  CardContent as MuiCardContent,
  CardHeader as MuiCardHeader
} from "@mui/material";

// lib/status-tag/component.tsx
import { styled as styled7, useTheme as useTheme3 } from "@mui/material/styles";
import { jsx as jsx11, jsxs as jsxs5 } from "react/jsx-runtime";
var StyledWrapper = styled7(Box)(({ theme, variant }) => ({
  display: "flex",
  alignItems: "center",
  width: "fit-content",
  backgroundColor: theme.palette.statusTag[variant].body,
  color: theme.palette.statusTag[variant].color,
  border: `${theme.spacing(0.25)} solid ${theme.palette.statusTag[variant].border}`,
  borderRadius: theme.spacing(0.5),
  "&.T1-StatusTag-large": {
    padding: theme.spacing(2)
  },
  "&.T1-StatusTag-medium": {
    padding: theme.spacing(1, 2)
  },
  "&.T1-StatusTag-small": {
    padding: theme.spacing(0.5, 1.5),
    ".MuiSvgIcon-root": {
      fontSize: "14px"
    }
  },
  ".MuiSvgIcon-root": {
    fontSize: "18px"
  },
  ".MuiSvgIcon-root:first-child": {
    marginRight: theme.spacing(1)
  },
  ".MuiSvgIcon-root:last-child": {
    marginLeft: theme.spacing(1)
  },
  "&:focus-visible": {
    outline: `1px dashed ${theme.palette.outline}`
  }
}));
var StyledBox = styled7(Box)(
  ({
    theme,
    color,
    variant
  }) => ({
    backgroundColor: theme.palette.productBadge[color].bgColor,
    border: color === "navy" && theme.name === "dark" ? `1px solid ${theme.palette.productBadge.navy.border}` : 0,
    display: "inline-flex",
    borderRadius: variant === "rounded" ? theme.spacing(1) : theme.spacing(1, 0),
    padding: theme.spacing(0.5, 1, 0.5, 1),
    position: "relative",
    "&:focus-visible": {
      outline: `1px dashed ${theme.palette.outline}`
    }
  })
);
var StyledTypography2 = styled7(Typography)(
  ({ theme, color }) => ({
    color: theme.palette.productBadge[color].color
  })
);
var Vector = styled7(Box)(
  ({ theme, color }) => ({
    width: 0,
    height: 0,
    position: "absolute",
    bottom: color === "navy" && theme.name === "dark" ? `-${theme.spacing(0.75)}` : `-${theme.spacing(0.5)}`,
    left: theme.spacing(0.25),
    flexShrink: 0,
    borderLeft: `${theme.spacing(0.75)} solid transparent`,
    borderTop: `${theme.spacing(0.5)} solid ${theme.palette.productBadge[color].vector}`
  })
);

// lib/status-tag/theme.ts
var statusTagTheme = {
  dark: {
    name: "statusTag",
    styles: {
      affirmation: {
        body: COLORS.ACCENT.GREEN_50,
        color: COLORS.SUCCESS.SUCCESS_20,
        border: COLORS.SUCCESS.SUCCESS_20
      },
      neutral: {
        body: COLORS.SYSTEM.SLATE,
        color: COLORS.SYSTEM.WHITE,
        border: COLORS.SYSTEM.SILVER
      },
      caution: {
        body: COLORS.WARNING.WARNING_50,
        color: COLORS.WARNING.WARNING_20,
        border: COLORS.WARNING.WARNING_20
      },
      negation: {
        body: COLORS.PRIMARY.ORANGE_80,
        color: COLORS.ERROR.ERROR_30,
        border: COLORS.ERROR.ERROR_20
      },
      information: {
        body: COLORS.SECONDARY.BLUE_80,
        color: COLORS.INFO.INFO_20,
        border: COLORS.INFO.INFO_20
      },
      alert: {
        body: COLORS.WARNING.WARNING_50,
        color: COLORS.WARNING.WARNING_20,
        border: COLORS.WARNING.WARNING_40
      }
    }
  },
  light: {
    name: "statusTag",
    styles: {
      affirmation: {
        body: COLORS.SUCCESS.SUCCESS_10,
        color: COLORS.SUCCESS.SUCCESS_50,
        border: COLORS.SUCCESS.SUCCESS_40
      },
      neutral: {
        body: COLORS.SYSTEM.WHITE,
        color: COLORS.SYSTEM.INK,
        border: COLORS.SYSTEM.SLATE
      },
      caution: {
        body: COLORS.WARNING.WARNING_10,
        color: COLORS.WARNING.WARNING_50,
        border: COLORS.WARNING.WARNING_40
      },
      negation: {
        body: COLORS.ERROR.ERROR_10,
        color: COLORS.ERROR.ERROR_50,
        border: COLORS.ERROR.ERROR_20
      },
      information: {
        body: COLORS.SECONDARY.BLUE_20,
        color: COLORS.INFO.INFO_50,
        border: COLORS.INFO.INFO_40
      },
      alert: {
        body: COLORS.WARNING.WARNING_10,
        color: COLORS.WARNING.WARNING_50,
        border: COLORS.WARNING.WARNING_40
      }
    }
  }
};
var productBadgeTheme = {
  dark: {
    name: "productBadge",
    styles: {
      orange: {
        bgColor: COLORS.PRIMARY.ORANGE_40,
        color: COLORS.SYSTEM.INK,
        vector: COLORS.PRIMARY.ORANGE_30
      },
      blue: {
        bgColor: COLORS.SECONDARY.BLUE_50,
        color: COLORS.SYSTEM.INK,
        vector: COLORS.SECONDARY.BLUE_30
      },
      navy: {
        bgColor: COLORS.BRAND.TRINET_NAVY,
        border: COLORS.SYSTEM.DARK_30,
        color: COLORS.SYSTEM.WHITE,
        vector: COLORS.SYSTEM.PEWTER
      },
      green: {
        bgColor: COLORS.SUCCESS.SUCCESS_30,
        color: COLORS.SYSTEM.INK,
        vector: COLORS.SUCCESS.SUCCESS_50
      },
      grey: {
        bgColor: COLORS.SYSTEM.CLOUDY,
        color: COLORS.SYSTEM.DARK_30,
        vector: COLORS.SYSTEM.DARK_30
      },
      violet: {
        bgColor: COLORS.ACCENT.VIOLET_20,
        color: COLORS.SYSTEM.INK,
        vector: COLORS.ACCENT.VIOLET_10
      }
    }
  },
  light: {
    name: "productBadge",
    styles: {
      orange: {
        bgColor: COLORS.PRIMARY.ORANGE_50,
        color: COLORS.SYSTEM.WHITE,
        vector: COLORS.PRIMARY.ORANGE_70
      },
      blue: {
        bgColor: COLORS.SECONDARY.BLUE_60,
        color: COLORS.SYSTEM.WHITE,
        vector: COLORS.SECONDARY.BLUE_70
      },
      navy: {
        bgColor: COLORS.BRAND.TRINET_NAVY,
        border: COLORS.TRANSPARENT,
        color: COLORS.SYSTEM.WHITE,
        vector: COLORS.SYSTEM.PEWTER
      },
      green: {
        bgColor: COLORS.SUCCESS.SUCCESS_40,
        color: COLORS.SYSTEM.WHITE,
        vector: COLORS.SUCCESS.SUCCESS_50
      },
      grey: {
        bgColor: COLORS.SYSTEM.CLOUDY,
        color: COLORS.SYSTEM.SLATE,
        vector: COLORS.SYSTEM.DARK_30
      },
      violet: {
        bgColor: COLORS.ACCENT.VIOLET_40,
        color: COLORS.SYSTEM.WHITE,
        vector: COLORS.ACCENT.VIOLET_10
      }
    }
  }
};

// lib/card/component.tsx
import RepeatIcon from "@mui/icons-material/Repeat";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { MoreVert } from "@mui/icons-material";

// lib/list/component.tsx
import React3 from "react";
import {
  List as MuiList,
  ListItem as MuiListItem,
  ListItemIcon as MuiListItemIcon,
  ListItemText as MuiListItemText
} from "@mui/material";
import { jsx as jsx12 } from "react/jsx-runtime";
var List = React3.forwardRef(
  ({ children, ...rest }, ref) => {
    return /* @__PURE__ */ jsx12(MuiList, { ...rest, ref, children });
  }
);
var ListItem = React3.forwardRef(
  ({
    children,
    className,
    variant = "primary",
    highlight,
    ...rest
  }, ref) => {
    return /* @__PURE__ */ jsx12(
      MuiListItem,
      {
        divider: true,
        ...rest,
        alignItems: "flex-start",
        className: `T1-listItem-${variant} ${highlight ? "T1-listItem-highlight" : ""} ${className ?? ""}`,
        ref,
        tabIndex: 0,
        onKeyDown: (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            e.currentTarget.click();
          }
        },
        children
      }
    );
  }
);
var ListItemText = React3.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsx12(MuiListItemText, { ...props, ref });
  }
);
var ListItemIcon = React3.forwardRef(
  ({ children, ...rest }, ref) => {
    return /* @__PURE__ */ jsx12(MuiListItemIcon, { ...rest, ref, children });
  }
);

// lib/tooltip/component.tsx
import { Tooltip as MuiTooltip } from "@mui/material";
import { styled as styled8 } from "@mui/material/styles";
import { jsx as jsx13 } from "react/jsx-runtime";
var StyledUnderlinedSpan = styled8("span")(({ theme }) => ({
  "& > *": {
    textDecorationLine: "underline",
    textDecorationStyle: "dotted",
    textDecorationSkipInk: "auto",
    textDecorationColor: theme.palette.tooltip.underline,
    textDecorationThickness: "7.5%",
    textUnderlineOffset: "20%",
    textUnderlinePosition: "from-font"
  }
}));
var StyledTooltip = styled8(Box)(({
  theme
}) => {
  return {
    padding: theme.spacing(3.5),
    "&.MuiTooltip-tooltipPlacementBottom": {
      transform: `translate(0, ${theme.spacing(3.5)})!important`
    },
    "&.MuiTooltip-tooltipPlacementTop": {
      transform: `translate(0, -${theme.spacing(3.5)})!important`
    },
    "&.MuiTooltip-tooltipPlacementRight": {
      transform: `translate(${theme.spacing(3.5)}, 0)!important`
    },
    "&.MuiTooltip-tooltipPlacementLeft": {
      transform: `translate(-${theme.spacing(3.5)}, 0)!important`
    },
    boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.10)",
    borderRadius: "1px",
    fontSize: theme.typography.paragraph.sm.regular.fontSize,
    fontFamily: theme.typography.paragraph.sm.regular.fontFamily,
    lineHeight: theme.typography.paragraph.sm.regular.lineHeight,
    "&.tooltip-light": {
      backgroundColor: theme.palette.tooltip.light.bg,
      color: theme.palette.tooltip.light.color,
      outline: `1px solid ${theme.palette.tooltip.light.border}`
    },
    "&.tooltip-dark": {
      backgroundColor: theme.palette.tooltip.dark.bg,
      color: theme.palette.tooltip.dark.color,
      outline: `1px solid ${theme.palette.tooltip.dark.border}`
    },
    "&.tooltip-error": {
      backgroundColor: theme.palette.tooltip.error.bg,
      color: theme.palette.tooltip.error.color,
      outline: `1px solid ${theme.palette.tooltip.error.border}`
    },
    ".MuiTooltip-arrow": {
      "&.tooltip-light:before": {
        outline: `1px solid ${theme.palette.tooltip.light.border}`,
        color: theme.palette.tooltip.light.bg
      },
      "&.tooltip-dark:before": {
        outline: `1px solid ${theme.palette.tooltip.dark.border}`,
        color: theme.palette.tooltip.dark.bg
      },
      "&.tooltip-error:before": {
        outline: `1px solid ${theme.palette.tooltip.error.border}`,
        color: theme.palette.tooltip.error.bg
      }
    }
  };
});

// lib/tooltip/theme.ts
var tooltipTheme = {
  dark: {
    name: "tooltip",
    styles: {
      dark: {
        bg: COLORS.SYSTEM.WHITE,
        border: COLORS.SYSTEM.SLATE,
        color: COLORS.SYSTEM.INK
      },
      error: {
        bg: COLORS.ERROR.ERROR_20,
        border: COLORS.SYSTEM.INK,
        color: COLORS.SYSTEM.INK
      },
      light: {
        bg: COLORS.SYSTEM.DARK_80,
        border: COLORS.SYSTEM.SLATE,
        color: COLORS.SYSTEM.WHITE
      },
      popover: {
        closeBtn: COLORS.SYSTEM.SILVER
      },
      underline: COLORS.SYSTEM.SILVER
    }
  },
  light: {
    name: "tooltip",
    styles: {
      dark: {
        bg: COLORS.SYSTEM.DARK_80,
        border: COLORS.SYSTEM.CLOUDY,
        color: COLORS.SYSTEM.WHITE
      },
      error: {
        bg: COLORS.ERROR.ERROR_50,
        border: COLORS.SYSTEM.CLOUDY,
        color: COLORS.SYSTEM.WHITE
      },
      light: {
        bg: COLORS.SYSTEM.WHITE,
        border: COLORS.SYSTEM.CLOUDY,
        color: COLORS.SYSTEM.INK
      },
      popover: {
        closeBtn: COLORS.SYSTEM.PEWTER
      },
      underline: COLORS.SYSTEM.DARK_30
    }
  }
};

// lib/card/theme.ts
import { styled as styled9 } from "@mui/material/styles";
import { Box as Box3, Card, CardActions, CardContent, CardHeader } from "@mui/material";
var StyledInfoCard = styled9(Card)(({ theme }) => {
  const palette = infoCardTheme(theme);
  return {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing(2),
    padding: theme.spacing(2, 3),
    borderRadius: theme.spacing(1.5),
    backgroundColor: palette.container.background,
    border: palette.container.border,
    "&.MuiPaper-root": {
      boxShadow: "none"
    }
  };
});
var StyledInfoIconContainer = styled9(Box3)(({ theme }) => {
  const palette = infoCardTheme(theme);
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 44,
    height: 44,
    minWidth: 44,
    minHeight: 44,
    borderRadius: "50%",
    backgroundColor: palette.icon.background,
    color: palette.icon.color,
    "& .MuiSvgIcon-root": {
      fontSize: 24
    }
  };
});
var StyledInfoTextContainer = styled9(Box3)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(0.5),
  minWidth: 0
}));
var infoCardTheme = (theme) => {
  switch (theme.name) {
    case "dark": {
      return {
        container: {
          background: theme.palette.t1.system.ink,
          border: `1px solid ${theme.palette.t1.system.slate}`
        },
        icon: {
          background: theme.palette.t1.system.dark80,
          color: theme.palette.t1.system.silver
        }
      };
    }
    case "light":
    default: {
      return {
        container: {
          background: theme.palette.t1.secondary.blue10,
          border: "transparent"
        },
        icon: {
          background: theme.palette.t1.primary.orange10,
          color: theme.palette.t1.primary.orange50
        }
      };
    }
  }
};
var cardTheme = (theme) => {
  switch (theme.name) {
    case "dark": {
      return {
        background: theme.palette.t1.system.ink,
        backgroundTinted: theme.palette.t1.system.slate,
        border: theme.palette.t1.system.slate,
        divider: theme.palette.t1.system.slate,
        dividerTinted: theme.palette.t1.system.dark30,
        borderCardPaper: theme.palette.t1.system.ink,
        icon: theme.palette.t1.system.silver
      };
    }
    case "light":
    default: {
      return {
        background: theme.palette.t1.system.white,
        backgroundTinted: theme.palette.t1.system.offWhite,
        border: theme.palette.t1.system.misty,
        divider: theme.palette.t1.system.misty,
        dividerTinted: theme.palette.t1.system.misty,
        borderCardPaper: theme.palette.t1.system.cloudy,
        icon: theme.palette.t1.system.pewter
      };
    }
  }
};
var eventCardTheme = (theme) => {
  switch (theme.name) {
    case "dark": {
      return {
        published: {
          background: theme.palette.t1.accent.teal50,
          border: theme.palette.t1.accent.teal40,
          color: theme.palette.t1.system.white,
          hover: {
            background: theme.palette.t1.accent.teal40
          }
        },
        draft: {
          background: theme.palette.t1.secondary.blue10,
          border: theme.palette.t1.secondary.blue70,
          color: theme.palette.t1.secondary.blue70,
          hover: {
            background: theme.palette.t1.secondary.blue20
          }
        },
        publishedGreen: {
          background: theme.palette.t1.accent.green20,
          border: theme.palette.t1.accent.green30,
          color: theme.palette.t1.accent.green50,
          hover: {
            background: theme.palette.t1.accent.green30
          }
        }
      };
    }
    case "light":
    default: {
      return {
        published: {
          background: theme.palette.t1.accent.teal50,
          border: theme.palette.t1.accent.teal40,
          color: theme.palette.t1.system.white,
          hover: {
            background: theme.palette.t1.accent.teal40
          }
        },
        draft: {
          background: theme.palette.t1.secondary.blue10,
          border: theme.palette.t1.secondary.blue70,
          color: theme.palette.t1.secondary.blue70,
          hover: {
            background: theme.palette.t1.secondary.blue20
          }
        },
        publishedGreen: {
          background: theme.palette.t1.success.success50,
          border: theme.palette.t1.success.success40,
          color: theme.palette.t1.system.white,
          hover: {
            background: theme.palette.t1.success.success40
          }
        }
      };
    }
  }
};
var actionCardHeaderTheme = (theme) => {
  switch (theme.name) {
    case "dark": {
      return {
        neutral: {
          background: theme.palette.t1.system.slate
        },
        success: {
          background: theme.palette.t1.accent.green50
        },
        info: {
          background: theme.palette.t1.secondary.blue80
        },
        promotion: {
          background: theme.palette.t1.accent.violet50
        },
        error: {
          background: theme.palette.t1.primary.orange80
        },
        warning: {
          background: theme.palette.t1.warning.warning50
        }
      };
    }
    case "light":
    default: {
      return {
        neutral: {
          background: theme.palette.t1.system.offWhite
        },
        success: {
          background: theme.palette.t1.success.success10
        },
        info: {
          background: theme.palette.t1.secondary.blue20
        },
        promotion: {
          background: theme.palette.t1.accent.violet10
        },
        error: {
          background: theme.palette.t1.error.error10
        },
        warning: {
          background: theme.palette.t1.warning.warning10
        }
      };
    }
  }
};
var StyledEventCard = styled9(Card)(({ theme }) => {
  const palette = eventCardTheme(theme);
  return {
    position: "relative",
    padding: theme.spacing(3, 2),
    backgroundColor: palette.published.background,
    border: `1px solid ${palette.published.border}`,
    borderRadius: theme.spacing(1),
    "&:hover": {
      backgroundColor: palette.published.hover.background,
      ".T1-event-menu": {
        display: "block"
      }
    },
    "&:focus": {
      boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.75)"
    },
    ".MuiCardHeader-content": {
      color: palette.published.color,
      fontFamily: "Centra Regular",
      fontSize: "12px",
      fontWeight: 700,
      lineHeight: "16px"
    },
    ".MuiTypography-root": {
      color: palette.published.color,
      fontFamily: "Centra Regular",
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: "16px"
    },
    svg: {
      color: palette.published.color,
      fontFamily: "Centra Regular",
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "16px"
    },
    "&.MuiPaper-published": {
      ".T1-event-card-actions, .T1-event-menu": {
        svg: {
          "&:hover": {
            color: palette.published.color
          },
          color: palette.published.color
        }
      }
    },
    "&.MuiPaper-draft": {
      backgroundColor: palette.draft.background,
      border: `1px dashed ${palette.draft.border}`,
      "&:hover": {
        backgroundColor: palette.draft.hover.background
      },
      "&:focus": {
        boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.75)"
      },
      ".MuiCardHeader-title": {
        color: palette.draft.color
      },
      ".MuiTypography-root": {
        color: palette.draft.color
      },
      svg: {
        color: palette.draft.color
      },
      ".T1-event-card-actions, .T1-event-menu": {
        svg: {
          "&:hover": {
            color: palette.draft.color
          },
          color: palette.draft.color
        }
      }
    },
    "&.MuiPaper-greenPublished": {
      backgroundColor: palette.publishedGreen.background,
      border: `1px dashed ${palette.publishedGreen.border}`,
      "&:hover": {
        backgroundColor: palette.publishedGreen.hover.background
      },
      "&:focus": {
        boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.75)"
      },
      ".MuiCardHeader-title": {
        color: palette.publishedGreen.color
      },
      ".MuiTypography-root": {
        color: palette.publishedGreen.color
      },
      svg: {
        color: palette.publishedGreen.color
      },
      ".T1-event-card-actions, .T1-event-menu": {
        svg: {
          "&:hover": {
            color: palette.publishedGreen.color
          },
          color: palette.publishedGreen.color
        }
      }
    }
  };
});
var StyledEventCardContent = styled9(CardContent)(
  ({ theme }) => ({
    padding: theme.spacing(0, 4, 0, 1),
    marginBottom: "8px"
  })
);
var StyledEventCardActions = styled9(CardActions)(() => ({
  "&.T1-event-card-actions": {
    padding: 0,
    justifyContent: "end",
    ".MuiIconButton-root": {
      padding: 0,
      "&:hover": {
        backgroundColor: "transparent"
      }
    }
  }
}));
var StyledEventMenu = styled9(Box3)(() => ({
  display: "none",
  position: "absolute",
  right: "5px",
  top: "8px",
  ".MuiIconButton-root": {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent!important"
    }
  }
}));
var StyledEventEmptyCell = styled9(Box3)(({
  theme
}) => {
  const palette = eventCardTheme(theme);
  return {
    borderRadius: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "94px",
    width: "212px",
    backgroundColor: palette.draft.background,
    border: `1px dashed ${palette.draft.border}`,
    "&:hover": {
      backgroundColor: palette.draft.hover.background
    },
    "&:focus": {
      boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.75)"
    },
    ".MuiCardHeader-title": {
      color: palette.draft.color
    },
    ".MuiTypography-root": {
      color: palette.draft.color
    },
    svg: {
      color: palette.draft.color,
      fontSize: "14px"
    },
    ".T1-event-card-actions, .T1-event-menu": {
      svg: {
        "&:hover": {
          color: palette.draft.color
        },
        color: palette.draft.color
      }
    },
    cursor: "pointer"
  };
});
var StyledEventHeaderCell = styled9(Box3)(({
  theme
}) => {
  const palette = eventCardTheme(theme);
  return {
    padding: theme.spacing(1.25, 2, 1.25, 2),
    borderRadius: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
    height: "14px",
    width: "139px",
    backgroundColor: palette.draft.background,
    border: `1px dashed ${palette.draft.border}`,
    "&:hover": {
      backgroundColor: palette.draft.hover.background
    },
    "&:focus": {
      boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.75)"
    },
    ".MuiCardHeader-title": {
      color: palette.draft.color
    },
    ".MuiTypography-root": {
      color: palette.draft.color
    },
    svg: {
      color: palette.draft.color,
      fontSize: "14px"
    },
    ".T1-event-card-actions, .T1-event-menu": {
      svg: {
        "&:hover": {
          color: palette.draft.color
        },
        color: palette.draft.color
      }
    },
    cursor: "pointer"
  };
});
var StyledEventFooterCell = styled9(Box3)(({
  theme
}) => {
  const palette = eventCardTheme(theme);
  return {
    padding: theme.spacing(1.25, 2, 1.25, 2),
    borderRadius: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "14px",
    width: "139px",
    backgroundColor: palette.draft.background,
    border: `1px dashed ${palette.draft.border}`,
    "&:hover": {
      backgroundColor: palette.draft.hover.background
    },
    "&:focus": {
      boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.75)"
    },
    ".MuiCardHeader-title": {
      color: palette.draft.color
    },
    ".MuiTypography-root": {
      color: palette.draft.color
    },
    svg: {
      color: palette.draft.color,
      fontSize: "14px"
    },
    ".T1-event-card-actions, .T1-event-menu": {
      svg: {
        "&:hover": {
          color: palette.draft.color
        },
        color: palette.draft.color
      }
    },
    cursor: "pointer"
  };
});
var StyledEventCardHeader = styled9(CardHeader)(
  ({ theme }) => ({
    padding: theme.spacing(0, 4, 0, 1),
    marginBottom: "8px"
  })
);
var StyledActionCard = styled9(Card)(({ theme }) => {
  const palette = cardTheme(theme);
  return {
    backgroundColor: palette.background,
    border: `1px solid ${palette.border}`,
    borderRadius: theme.spacing(1),
    boxShadow: "none",
    display: "flex",
    flexDirection: "column"
  };
});
var StyledActionCardHeader = styled9(Box3)(({ theme, variant = "neutral" }) => {
  const palette = cardTheme(theme);
  const headerPalette = actionCardHeaderTheme(theme);
  const variantKey = variant;
  return {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(4, 6),
    borderBottom: `1px solid ${palette.divider}`,
    gap: theme.spacing(3),
    backgroundColor: headerPalette[variantKey]?.background || headerPalette.neutral.background
  };
});
var StyledActionCardContent = styled9(Box3)(({
  theme
}) => {
  return {
    padding: theme.spacing(6),
    flexGrow: 1,
    fontFamily: theme.typography.paragraph.md.regular.fontFamily,
    fontSize: theme.typography.paragraph.md.regular.fontSize,
    lineHeight: theme.typography.paragraph.md.regular.lineHeight,
    color: theme.palette.typography.color
  };
});
var StyledActionCardFooter = styled9(Box3)(({
  theme
}) => {
  const palette = cardTheme(theme);
  return {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(4, 6),
    borderTop: `1px solid ${palette.divider}`,
    gap: theme.spacing(3)
  };
});
var StyledActionCardFooterLeft = styled9(Box3)(({
  theme
}) => {
  return {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2)
  };
});
var StyledActionCardFooterRight = styled9(Box3)(({
  theme
}) => {
  return {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(3)
  };
});

// lib/card/component.tsx
import { Fragment as Fragment2, jsx as jsx14, jsxs as jsxs6 } from "react/jsx-runtime";
var Card2 = ({ variant = "regular", ...rest }) => {
  return /* @__PURE__ */ jsx14(MuiCard, { variant, ...rest });
};
var CardHeader2 = ({
  divider,
  className,
  title,
  cmsOptions,
  ...rest
}) => {
  const getContent = useGetCMSContent();
  const titleText = rest.contentId ? getContent({
    contentId: rest.contentId,
    key: cmsOptions?.key || ".card_title",
    fallbackContent: cmsOptions?.fallbackContent || title || "Content not found",
    values: cmsOptions?.values || {}
  }) : title;
  return /* @__PURE__ */ jsx14(
    MuiCardHeader,
    {
      "data-testid": "cardHeader",
      className: `${divider ? "T1-cardHeader-withDivider" : ""} ${className ?? ""}`,
      title: titleText,
      ...rest
    }
  );
};
var CardActions2 = ({
  ButtonArrangementProps,
  children,
  ...rest
}) => {
  const { primary, secondary, tertiary, contentId } = ButtonArrangementProps || {};
  return /* @__PURE__ */ jsxs6(MuiCardActions, { ...rest, "data-testid": "cardAction", children: [
    ButtonArrangementProps && /* @__PURE__ */ jsx14(
      ButtonArrangement,
      {
        primary: primary && {
          cmsOptions: { key: ".primary_button_text" },
          contentId,
          ...primary
        },
        secondary: secondary && {
          cmsOptions: { key: ".secondary_button_text" },
          contentId,
          ...secondary
        },
        tertiary: tertiary && {
          cmsOptions: { key: ".tertiary_button_text" },
          contentId,
          ...tertiary
        }
      }
    ),
    children
  ] });
};
var CardContent2 = ({
  children,
  cmsOptions,
  contentId,
  ...props
}) => {
  const getCMSContent = useGetCMSContent();
  const cardContent = contentId ? getCMSContent({
    contentId,
    key: cmsOptions?.key || ".content",
    fallbackContent: cmsOptions?.fallbackContent || "",
    values: cmsOptions?.values || {},
    enableHTMLTags: cmsOptions?.enableHTMLTags || false
  }) : children;
  return /* @__PURE__ */ jsx14(MuiCardContent, { ...props, children: contentId ? cardContent : children });
};

// lib/dot-indicators/theme.ts
import { styled as styled10 } from "@mui/material/styles";
var dotIndicatorsTheme = (theme) => {
  switch (theme.name) {
    case "dark": {
      return {
        primary: {
          color: theme.palette.t1.primary.orange40
        },
        secondary: {
          color: COLORS.SYSTEM.WHITE
        },
        focus: theme.palette.t1.secondary.blue40
      };
    }
    case "light": {
      return {
        primary: {
          color: theme.palette.t1.primary.orange50
        },
        secondary: {
          color: COLORS.SYSTEM.INK
        },
        focus: theme.palette.t1.secondary.blue60
      };
    }
  }
};
var StyledDotIndicatorsContainer = styled10(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}));
var StyledDot = styled10(Button, {
  shouldForwardProp: (prop) => prop !== "isActive" && prop !== "showBorder" && prop !== "variant"
})(({ theme, variant = "primary", isActive, showBorder = true }) => {
  const palette = dotIndicatorsTheme(theme);
  const variantColor = variant === "secondary" ? palette.secondary.color : palette.primary.color;
  return {
    width: theme.spacing(1.5),
    height: theme.spacing(1.5),
    marginRight: theme.spacing(1.125),
    cursor: "pointer",
    color: "transparent",
    backgroundColor: isActive ? variantColor : "transparent",
    border: showBorder ? `1px solid ${variantColor}` : "none",
    borderRadius: "50%",
    padding: 0,
    minWidth: "auto",
    "&:focus-visible": {
      outline: `2px solid ${palette.focus}`,
      outlineOffset: "2px"
    },
    "&:last-child": {
      marginRight: 0
    }
  };
});

// lib/dot-indicators/component.tsx
import { jsx as jsx15 } from "react/jsx-runtime";
var DotIndicators = ({
  count,
  activeIndex,
  onChange,
  variant = "primary",
  showBorder = true,
  ariaLabel = "item",
  enableKeyboardNav = true,
  testIdPrefix = "T1-dot-indicator",
  classNamePrefix = "T1-dot-indicator"
}) => {
  const handleKeyDown = (e, index) => {
    if (!enableKeyboardNav) return;
    if (e.key === "ArrowRight") {
      const nextIndex = (index + 1) % count;
      onChange(nextIndex);
      setTimeout(() => {
        const nextElement = document.querySelectorAll(`.${classNamePrefix}`)[nextIndex];
        nextElement?.focus();
      }, 0);
    } else if (e.key === "ArrowLeft") {
      const prevIndex = (index - 1 + count) % count;
      onChange(prevIndex);
      setTimeout(() => {
        const prevElement = document.querySelectorAll(`.${classNamePrefix}`)[prevIndex];
        prevElement?.focus();
      }, 0);
    }
  };
  return /* @__PURE__ */ jsx15(StyledDotIndicatorsContainer, { "data-testid": "T1-dot-indicators", children: Array.from({ length: count }).map((_, index) => /* @__PURE__ */ jsx15(
    StyledDot,
    {
      tabIndex: 0,
      onClick: () => onChange(index),
      onKeyDown: (e) => handleKeyDown(e, index),
      className: `${classNamePrefix} ${index === activeIndex ? "active" : ""}`,
      "data-testid": testIdPrefix,
      variant,
      isActive: index === activeIndex,
      showBorder,
      "aria-label": `${ariaLabel} ${index + 1}`
    },
    index
  )) });
};

// lib/guide-tour/theme.ts
import { styled as styled11 } from "@mui/material";
import { Popover } from "@mui/material";
var guideTourTheme = (theme) => {
  switch (theme.name) {
    case "dark":
      return {
        background: theme.palette.t1.system.dark70,
        border: theme.palette.t1.system.ink,
        icon: {
          color: {
            active: theme.palette.t1.primary.orange50,
            inactive: theme.palette.t1.system.white
          },
          border: theme.palette.t1.primary.orange50
        },
        overlay: {
          background: theme.palette.t1.system.dark80
        }
      };
    case "light":
      return {
        background: theme.palette.t1.system.white,
        border: theme.palette.t1.system.misty,
        icon: {
          color: {
            active: theme.palette.t1.primary.orange50,
            inactive: theme.palette.t1.system.white
          },
          border: theme.palette.t1.primary.orange50
        },
        overlay: {
          background: theme.palette.t1.system.dark80
        }
      };
  }
};
var StyledPopover = styled11(Popover)(({ theme }) => {
  const palette = guideTourTheme(theme);
  return {
    border: `1px solid ${palette.border}`,
    borderRadius: theme.spacing(1)
  };
});
var Step = styled11(Box)(
  ({ theme, activeStep }) => {
    const palette = guideTourTheme(theme);
    return {
      width: 6,
      height: 6,
      borderRadius: "50%",
      backgroundColor: activeStep ? palette.icon.color.active : palette.icon.color.inactive,
      border: `1px solid ${palette.icon.border}`,
      marginRight: theme.spacing(2)
    };
  }
);
var StyledOverlay = styled11(Box)(({ theme }) => {
  const palette = guideTourTheme(theme);
  return {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 999,
    pointerEvents: "none",
    backgroundColor: palette.overlay.background,
    opacity: 0.75
  };
});

// lib/guide-tour/component.tsx
import { Fragment as Fragment3, jsx as jsx16, jsxs as jsxs7 } from "react/jsx-runtime";
var GuideTour = ({ steps, onClose }) => {
  const [activeStep, setActiveStep] = useState2(0);
  const [anchorEl, setAnchorEl] = useState2(null);
  const [popoverOrigin, setPopoverOrigin] = useState2({
    anchorOrigin: { vertical: "bottom", horizontal: "center" },
    transformOrigin: { vertical: "top", horizontal: "center" }
  });
  useLayoutEffect(() => {
    const selector = steps[activeStep].selector;
    const element = document.querySelector(selector);
    const previousElement = document.querySelectorAll(
      ".T1-highlight-external-component"
    );
    previousElement.forEach(
      (el) => el.classList.remove("T1-highlight-external-component")
    );
    if (element) {
      element.classList.add("T1-highlight-external-component");
      element.scrollIntoView();
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const vertical = rect.top < viewportHeight / 2 ? "bottom" : "top";
      setPopoverOrigin({
        anchorOrigin: {
          vertical,
          horizontal: "center"
        },
        transformOrigin: {
          vertical: vertical === "top" ? "bottom" : "top",
          horizontal: "center"
        }
      });
      setAnchorEl(element);
    }
    return () => {
      if (element) {
        element.classList.remove("T1-highlight-external-component");
      }
    };
  }, [activeStep]);
  useEffect2(() => {
    setActiveStep(0);
  }, [steps]);
  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    } else {
      onClose?.();
    }
  };
  const handlePrev = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    }
  };
  return /* @__PURE__ */ jsxs7(Fragment3, { children: [
    /* @__PURE__ */ jsx16(StyledOverlay, {}),
    /* @__PURE__ */ jsx16(
      StyledPopover,
      {
        open: Boolean(anchorEl),
        anchorEl,
        onClose,
        anchorOrigin: popoverOrigin.anchorOrigin,
        transformOrigin: popoverOrigin.transformOrigin,
        children: /* @__PURE__ */ jsxs7(Card2, { children: [
          /* @__PURE__ */ jsx16(
            CardHeader2,
            {
              divider: true,
              title: `Step ${activeStep + 1}`,
              action: /* @__PURE__ */ jsx16(
                IconButton2,
                {
                  sx: { padding: 0 },
                  onClick: onClose,
                  "aria-label": "close",
                  children: /* @__PURE__ */ jsx16(CloseIcon, {})
                }
              )
            }
          ),
          /* @__PURE__ */ jsx16(CardContent2, { children: steps[activeStep]?.content }),
          /* @__PURE__ */ jsxs7(CardActions2, { children: [
            /* @__PURE__ */ jsx16(
              Button,
              {
                onClick: handlePrev,
                disabled: activeStep === 0,
                variant: "secondary",
                children: "Previous"
              }
            ),
            /* @__PURE__ */ jsx16(
              DotIndicators,
              {
                count: steps.length,
                activeIndex: activeStep,
                onChange: setActiveStep,
                variant: "primary",
                showBorder: true,
                ariaLabel: "step",
                enableKeyboardNav: false
              }
            ),
            /* @__PURE__ */ jsx16(Button, { onClick: handleNext, children: activeStep === steps.length - 1 ? "End" : "Next" })
          ] })
        ] })
      }
    )
  ] });
};
export {
  GuideTour,
  guideTourTheme
};
