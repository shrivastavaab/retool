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

// lib/rating-scale/theme.ts
var ratingScaleTheme = {
  dark: {
    name: "ratingScale",
    styles: {
      backgroundColor: {
        default: COLORS.SYSTEM.INK,
        disabled: COLORS.SYSTEM.DARK_60
      },
      border: {
        default: COLORS.SYSTEM.SLATE,
        hover: COLORS.SYSTEM.DARK_30,
        active: COLORS.SYSTEM.PEWTER,
        selected: COLORS.SECONDARY.BLUE_40,
        disabled: COLORS.SYSTEM.SLATE,
        focus: COLORS.SYSTEM.SLATE
      },
      first: {
        sectionColor: COLORS.ERROR.ERROR_30,
        backgroundColor: {
          default: COLORS.ERROR.ERROR_50,
          disabled: COLORS.SYSTEM.DARK_60,
          selected: COLORS.SYSTEM.DARK_60
        }
      },
      second: {
        sectionColor: COLORS.WARNING.WARNING_40,
        backgroundColor: {
          default: COLORS.WARNING.WARNING_50,
          disabled: COLORS.SYSTEM.DARK_60,
          selected: COLORS.SYSTEM.DARK_60
        }
      },
      third: {
        sectionColor: COLORS.ERROR.ERROR_30,
        backgroundColor: {
          default: "rgba(244, 192, 6, 0.30)",
          disabled: COLORS.SYSTEM.DARK_60,
          selected: COLORS.SYSTEM.DARK_60
        }
      },
      fourth: {
        sectionColor: COLORS.SYSTEM.SILVER,
        backgroundColor: {
          default: COLORS.SYSTEM.SLATE,
          disabled: COLORS.SYSTEM.DARK_60,
          selected: COLORS.SYSTEM.DARK_60
        }
      },
      fifth: {
        sectionColor: COLORS.INFO.INFO_20,
        backgroundColor: {
          default: COLORS.ACCENT.TEAL_40,
          disabled: COLORS.SYSTEM.DARK_60,
          selected: COLORS.SYSTEM.DARK_60
        }
      },
      sixth: {
        sectionColor: COLORS.ACCENT.GREEN_20,
        backgroundColor: {
          default: "rgba(2, 147, 111, 0.70)",
          disabled: COLORS.SYSTEM.DARK_60,
          selected: COLORS.SYSTEM.DARK_60
        }
      },
      seventh: {
        sectionColor: COLORS.SUCCESS.SUCCESS_30,
        backgroundColor: {
          default: COLORS.SUCCESS.SUCCESS_40,
          disabled: COLORS.SYSTEM.DARK_60,
          selected: COLORS.SYSTEM.DARK_60
        }
      }
    }
  },
  light: {
    name: "ratingScale",
    styles: {
      backgroundColor: {
        default: COLORS.SYSTEM.WHITE,
        disabled: COLORS.SYSTEM.MISTY
      },
      border: {
        default: COLORS.SYSTEM.CLOUDY,
        hover: COLORS.SYSTEM.SILVER,
        active: COLORS.SECONDARY.BLUE_60,
        focus: COLORS.SECONDARY.BLUE_60,
        disabled: COLORS.SYSTEM.CLOUDY,
        selected: COLORS.SECONDARY.BLUE_60
      },
      first: {
        sectionColor: COLORS.ERROR.ERROR_40,
        backgroundColor: {
          default: COLORS.ERROR.ERROR_20,
          disabled: COLORS.SYSTEM.DARK_60,
          selected: COLORS.SYSTEM.DARK_60
        }
      },
      second: {
        sectionColor: COLORS.WARNING.WARNING_40,
        backgroundColor: {
          default: COLORS.WARNING.WARNING_10,
          disabled: COLORS.SYSTEM.DARK_60,
          selected: COLORS.SYSTEM.DARK_60
        }
      },
      third: {
        sectionColor: COLORS.ACCENT.YELLOW_30,
        backgroundColor: {
          default: COLORS.ACCENT.YELLOW_10,
          disabled: COLORS.SYSTEM.DARK_60,
          selected: COLORS.SYSTEM.DARK_60
        }
      },
      fourth: {
        sectionColor: COLORS.SYSTEM.SILVER,
        backgroundColor: {
          default: COLORS.SYSTEM.CLOUDY,
          disabled: COLORS.SYSTEM.DARK_60,
          selected: COLORS.SYSTEM.DARK_60
        }
      },
      fifth: {
        sectionColor: COLORS.ACCENT.TEAL_30,
        backgroundColor: {
          default: COLORS.SYSTEM.CLOUDY,
          disabled: COLORS.SYSTEM.DARK_60,
          selected: COLORS.SYSTEM.DARK_60
        }
      },
      sixth: {
        sectionColor: COLORS.ACCENT.GREEN_30,
        backgroundColor: {
          default: COLORS.ACCENT.GREEN_10,
          disabled: COLORS.SYSTEM.DARK_60,
          selected: COLORS.SYSTEM.DARK_60
        }
      },
      seventh: {
        sectionColor: COLORS.SUCCESS.SUCCESS_40,
        backgroundColor: {
          default: "rgba(51, 225, 115, 0.20)",
          disabled: COLORS.SYSTEM.DARK_60,
          selected: COLORS.SYSTEM.DARK_60
        }
      }
    }
  }
};

// lib/rating-scale/component.tsx
import { useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { styled as styled2 } from "@mui/material/styles";

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
import { styled } from "@mui/material/styles";
import { forwardRef } from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
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
    return /* @__PURE__ */ jsx2(
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
var StyledTypography = styled(MuiTypography)(({
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

// lib/rating-scale/component.tsx
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
var Container = styled2(Box)(({ theme }) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    justifyContent: "center"
  };
});
var RatingButton = styled2(Box)(({
  theme,
  selected
}) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return {
    display: "flex",
    flexDirection: !isMobile ? "column" : "row",
    alignItems: "center",
    justifyContent: "center",
    width: !isMobile ? "120px" : "255px",
    height: !isMobile ? "60px" : "40px",
    position: "relative",
    borderRadius: theme.spacing(0.5),
    background: theme.palette.ratingScale.backgroundColor.default,
    cursor: "pointer",
    "&:before": {
      content: '""',
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      outline: `1px solid ${theme.palette.ratingScale.border.default}`,
      outlineOffset: "-1px",
      borderRadius: theme.spacing(0.5)
    },
    "&:hover": {
      "&:before": {
        outline: `1px solid ${theme.palette.ratingScale.border.hover}`
      }
    },
    "&:focus-visible": {
      outline: `1px dashed ${theme.palette.ratingScale.border.focus}`
    },
    ...selected && {
      "&:focus-visible": {
        outline: `1px dashed ${theme.palette.ratingScale.border.active}`
      },
      "&.T1-rating-1": {
        backgroundColor: theme.palette.ratingScale.first.backgroundColor.default
      },
      "&.T1-rating-2": {
        backgroundColor: theme.palette.ratingScale.second.backgroundColor.default
      },
      "&.T1-rating-3": {
        backgroundColor: theme.palette.ratingScale.third.backgroundColor.default
      },
      "&.T1-rating-4": {
        backgroundColor: theme.palette.ratingScale.fourth.backgroundColor.default
      },
      "&.T1-rating-5": {
        backgroundColor: theme.palette.ratingScale.fifth.backgroundColor.default
      },
      "&.T1-rating-6": {
        backgroundColor: theme.palette.ratingScale.sixth.backgroundColor.default
      },
      "&.T1-rating-7": {
        backgroundColor: theme.palette.ratingScale.seventh.backgroundColor.default
      }
    }
  };
});
var RatingIndicator = styled2(Box)(({ theme }) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return {
    position: "absolute",
    top: "0",
    left: "0",
    width: !isMobile ? "100%" : "2px",
    height: !isMobile ? "2px" : "100%",
    "&.T1-rating-1": {
      backgroundColor: theme.palette.ratingScale.first.sectionColor
    },
    "&.T1-rating-2": {
      backgroundColor: theme.palette.ratingScale.second.sectionColor
    },
    "&.T1-rating-3": {
      backgroundColor: theme.palette.ratingScale.third.sectionColor
    },
    "&.T1-rating-4": {
      backgroundColor: theme.palette.ratingScale.fourth.sectionColor
    },
    "&.T1-rating-5": {
      backgroundColor: theme.palette.ratingScale.fifth.sectionColor
    },
    "&.T1-rating-6": {
      backgroundColor: theme.palette.ratingScale.sixth.sectionColor
    },
    "&.T1-rating-7": {
      backgroundColor: theme.palette.ratingScale.seventh.sectionColor
    },
    borderRadius: "2px 2px 0 0"
  };
});
var RatingScale = ({
  maxRating,
  onRatingChange,
  labels
}) => {
  const [selectedRating, setSelectedRating] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleRatingChange = (ratingValue) => {
    setSelectedRating(ratingValue);
    onRatingChange(ratingValue);
  };
  const handleKeyDown = (event, ratingValue) => {
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      setSelectedRating(ratingValue);
      onRatingChange(ratingValue);
    }
  };
  return /* @__PURE__ */ jsx3(Container, { gap: isMobile ? 1 : 2, children: Array.from({ length: maxRating }, (_, i) => {
    const ratingValue = i + 1;
    const isSelected = selectedRating === ratingValue;
    const label = labels[i];
    return /* @__PURE__ */ jsxs(
      RatingButton,
      {
        onClick: () => handleRatingChange(ratingValue),
        selected: isSelected,
        className: `T1-rating-${ratingValue}`,
        onKeyDown: (e) => {
          handleKeyDown(e, ratingValue);
        },
        tabIndex: 0,
        "data-rating": ratingValue,
        "data-testid": `rating-${ratingValue}`,
        children: [
          /* @__PURE__ */ jsx3(RatingIndicator, { className: `T1-rating-${ratingValue}` }),
          /* @__PURE__ */ jsx3(Typography, { variant: "paragraphXs", weight: "regular", display: "block", children: ratingValue }),
          /* @__PURE__ */ jsx3(Typography, { variant: "paragraphXs", weight: "regular", display: "block", children: label })
        ]
      },
      ratingValue
    );
  }) });
};
export {
  RatingScale,
  ratingScaleTheme
};
