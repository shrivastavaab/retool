// lib/statistics/pay-runs.tsx
import { styled as styled2 } from "@mui/material/styles";

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

// lib/link/component.tsx
import { Link as MuiLink } from "@mui/material";
import { jsx as jsx3 } from "react/jsx-runtime";
var Link = ({
  disabled = false,
  size = "large",
  className,
  children,
  onClick,
  ...rest
}) => /* @__PURE__ */ jsx3(
  MuiLink,
  {
    ...rest,
    tabIndex: disabled ? -1 : 0,
    className: `T1-link${disabled ? " T1-link-disabled" : ""} T1-link-${size}${className ? ` ${className}` : ""}`,
    onMouseDown: (e) => {
      if (disabled) {
        e.preventDefault();
      }
    },
    onClick: (e) => {
      if (disabled) {
        e.preventDefault();
        return;
      }
      if (onClick) {
        onClick(e);
      }
    },
    children
  }
);

// lib/statistics/pay-runs.tsx
import { jsx as jsx4, jsxs } from "react/jsx-runtime";
var StyledPayRunsContainer = styled2(Stack)(({ theme }) => ({
  padding: theme.spacing(4.5, 6),
  alignItems: "flex-start",
  borderRadius: theme.spacing(1)
}));
var StyledTypographyLabel = styled2(Typography)(
  ({ theme }) => ({
    color: theme.palette.payRuns.color
  })
);
var StyledLink = styled2(Link)(() => ({
  padding: "0 !important"
}));
var PayRuns = ({
  label,
  linkProps,
  number,
  variant = "regular"
}) => {
  return /* @__PURE__ */ jsxs(
    StyledPayRunsContainer,
    {
      className: variant === "regular" ? "T1-container-whiteBox" : "T1-background",
      "data-testid": "T1-payRuns",
      children: [
        /* @__PURE__ */ jsx4(StyledTypographyLabel, { variant: "paragraphXs", weight: "regular", children: label }),
        /* @__PURE__ */ jsx4(Typography, { variant: "paragraphXl", children: number }),
        /* @__PURE__ */ jsx4(StyledLink, { href: linkProps.href, size: "small", target: linkProps.target, children: linkProps.label })
      ]
    }
  );
};

// lib/statistics/time-off.tsx
import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tooltip,
  styled as styled3,
  tooltipClasses
} from "@mui/material";

// lib/linear-progress/component.tsx
import { LinearProgress as MuiLinearProgress } from "@mui/material";
import { jsx as jsx5 } from "react/jsx-runtime";
var LinearProgress = ({
  size = "md",
  className,
  ...rest
}) => /* @__PURE__ */ jsx5(
  MuiLinearProgress,
  {
    ...rest,
    className: `T1-linearProgress-${size} ${className ?? ""}`
  }
);

// lib/statistics/time-off.tsx
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { jsx as jsx6, jsxs as jsxs2 } from "react/jsx-runtime";
var StyledTimeOffCardContainer = styled3(Box)(({ theme }) => ({
  display: "flex",
  width: "254.4px",
  padding: theme.spacing(3),
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(1.5),
  borderRadius: theme.spacing(1),
  border: `1px solid ${theme.palette.timeOffCard.container.border}`,
  background: theme.palette.timeOffCard.container.background,
  boxSizing: "border-box"
}));
var StyledTimeOffCardHeader = styled3(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
  alignSelf: "stretch",
  justifyContent: "space-between",
  ".MuiSvgIcon-root": {
    color: theme.palette.timeOffCard.accordion.iconColor
  }
}));
var StyledLinearProgress = styled3(LinearProgress)(({ theme }) => ({
  "&.TimeOffCard": {
    height: theme.spacing(0.75),
    borderRadius: theme.spacing(1.5),
    ".MuiLinearProgress-bar": {
      height: theme.spacing(0.75),
      borderRadius: theme.spacing(1.5)
    }
  }
}));
var StyledInfoOutlinedIcon = styled3(InfoOutlinedIcon)(({ theme }) => ({
  fontSize: theme.typography.paragraph.xs.regular.fontSize,
  color: theme.palette.timeOffCard.totalHoursContainer.color
}));
var StyledMaximumContainer = styled3(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "end",
  ".T1-typography-caption": {
    color: theme.palette.timeOffCard.totalHoursContainer.color
  },
  ".T1-typography-paragraphSm": {
    color: theme.palette.timeOffCard.totalHoursContainer.maxHoursColor
  }
}));
var StyledAccordion = styled3(Accordion)(({ theme }) => ({
  display: "flex",
  flexDirection: "column-reverse",
  alignSelf: "stretch",
  boxShadow: "none",
  background: theme.palette.timeOffCard.container.background,
  gap: theme.spacing(1.5),
  "&:before": { display: "none" },
  "&.Mui-expanded": {
    margin: 0
  },
  ".MuiButtonBase-root": {
    alignItems: "center",
    justifyContent: "flex-start"
  }
}));
var StyledAccordionSummary = styled3(AccordionSummary)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  borderRadius: theme.spacing(1),
  padding: 0,
  minHeight: 0,
  alignItems: "flex-end",
  "&.Mui-expanded": {
    minHeight: 0,
    margin: 0
  },
  ".MuiAccordionSummary-content": {
    margin: 0,
    flexGrow: 0,
    "&.Mui-expanded": {
      margin: 0
    }
  },
  ".MuiTypography-root, .MuiSvgIcon-root": {
    color: theme.palette.timeOffCard.accordion.link
  },
  ".MuiSvgIcon-root": {
    fontSize: theme.typography.paragraph.xs.regular.fontSize,
    color: theme.palette.timeOffCard.accordion.iconColor
  }
}));
var StyledAvailableMaxContainer = styled3(Box)(({ theme }) => ({
  ".T1-typography-caption": {
    color: theme.palette.timeOffCard.totalHoursContainer.color
  },
  ".T1-typography-paragraphSm": {
    color: theme.palette.timeOffCard.totalHoursContainer.availableHoursColor
  }
}));
var StyledAccordionDetails = styled3(AccordionDetails)(({ theme }) => ({
  padding: 0,
  background: theme.palette.timeOffCard.container.background
}));
var StyledTooltip = styled3(({ className, ...props }) => /* @__PURE__ */ jsx6(Tooltip, { ...props, classes: { popper: className } }))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
    border: `1px solid ${theme.palette.timeOffCard.toolTip.background}`
  },
  ".MuiTooltip-arrow": {
    color: theme.palette.common.white
  }
}));
var TimeOffCard = ({
  availableHours,
  maximumHours,
  breakdown
}) => {
  const [expanded, setExpanded] = useState(false);
  return /* @__PURE__ */ jsxs2(StyledTimeOffCardContainer, { children: [
    /* @__PURE__ */ jsxs2(StyledTimeOffCardHeader, { children: [
      /* @__PURE__ */ jsx6(Typography, { variant: "paragraphMd", weight: "bold", display: "block", children: "Vacation" }),
      /* @__PURE__ */ jsx6(StyledTooltip, { title: /* @__PURE__ */ jsx6(Box, { children: "Html Content" }), placement: "bottom", arrow: true, children: /* @__PURE__ */ jsx6(StyledInfoOutlinedIcon, {}) })
    ] }),
    /* @__PURE__ */ jsxs2(
      Box,
      {
        sx: {
          display: "flex",
          justifyContent: "space-between",
          alignSelf: "stretch"
        },
        children: [
          /* @__PURE__ */ jsxs2(StyledAvailableMaxContainer, { children: [
            /* @__PURE__ */ jsx6(
              Typography,
              {
                variant: "caption",
                weight: "regular",
                display: "block",
                style: { lineHeight: "14px" },
                children: "AVAILABLE"
              }
            ),
            /* @__PURE__ */ jsxs2(Typography, { variant: "paragraphSm", weight: "bold", display: "block", children: [
              availableHours,
              " Hours"
            ] })
          ] }),
          /* @__PURE__ */ jsxs2(StyledMaximumContainer, { children: [
            /* @__PURE__ */ jsx6(
              Typography,
              {
                variant: "caption",
                weight: "regular",
                display: "block",
                style: { lineHeight: "14px" },
                children: "MAXIMUM"
              }
            ),
            /* @__PURE__ */ jsxs2(Typography, { variant: "paragraphSm", weight: "bold", display: "block", children: [
              maximumHours,
              " Hours"
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx6(Box, { sx: { width: "100%" }, children: /* @__PURE__ */ jsx6(
      StyledLinearProgress,
      {
        variant: "determinate",
        value: 10,
        sx: { height: "3px" },
        className: "TimeOffCard"
      }
    ) }),
    /* @__PURE__ */ jsxs2(
      StyledAccordion,
      {
        expanded,
        onChange: () => setExpanded((prev) => !prev),
        elevation: 0,
        children: [
          /* @__PURE__ */ jsx6(StyledAccordionSummary, { expandIcon: /* @__PURE__ */ jsx6(ExpandMoreIcon, {}), children: /* @__PURE__ */ jsx6(Typography, { variant: "paragraphXs", weight: "medium", display: "block", children: expanded ? "Hide Breakdown" : "View Breakdown" }) }),
          /* @__PURE__ */ jsx6(StyledAccordionDetails, { children: breakdown.map((item, index) => {
            const key = index + 1;
            return /* @__PURE__ */ jsxs2(
              Box,
              {
                sx: {
                  display: "flex",
                  alignSelf: "stretch",
                  gap: "12px"
                },
                children: [
                  /* @__PURE__ */ jsxs2(Typography, { variant: "caption", weight: "regular", display: "block", children: [
                    item.hours,
                    " hrs"
                  ] }),
                  /* @__PURE__ */ jsx6(Typography, { variant: "caption", weight: "medium", display: "block", children: item.label })
                ]
              },
              key
            );
          }) })
        ]
      }
    )
  ] });
};

// lib/statistics/reports.tsx
import { styled as styled4 } from "@mui/material/styles";
import { jsx as jsx7, jsxs as jsxs3 } from "react/jsx-runtime";
var StyledReportsContainer = styled4(Box)(({ theme }) => ({
  padding: theme.spacing(6),
  ".T1-reports-reports-container": {
    margin: theme.spacing(4, 0)
  }
}));
var StyledPercentagePill = styled4(Box)(({ theme }) => ({
  padding: theme.spacing(1, 2),
  borderRadius: "12px",
  fontFamily: theme.typography.paragraph.sm.medium.fontFamily,
  fontSize: theme.typography.overline.regular.fontSize,
  height: "24px",
  boxSizing: "border-box",
  "&.T1-percentage-pill-rise": {
    color: theme.palette.reports.percentagePill.rise.text,
    backgroundColor: theme.palette.reports.percentagePill.rise.background
  },
  "&.T1-percentage-pill-stagnant": {
    color: theme.palette.reports.percentagePill.stagnant.text,
    backgroundColor: theme.palette.reports.percentagePill.stagnant.background
  },
  "&.T1-percentage-pill-down": {
    color: theme.palette.reports.percentagePill.down.text,
    backgroundColor: theme.palette.reports.percentagePill.down.background
  }
}));
var StyledTypographyLabel2 = styled4(Typography)(
  ({ theme }) => ({
    "&.T1-typography-paragraphMd": {
      color: theme.palette.reports.title,
      marginRight: theme.spacing(2),
      fontFamily: theme.typography.paragraph.md.medium.fontFamily
    },
    "&.T1-typography-caption": {
      color: theme.palette.reports.subtitle
    }
  })
);
var StyledBox = styled4(Box)(() => ({
  a: {
    padding: "0 !important"
  }
}));
var StyledReportContainer = styled4(Stack)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  ".T1-report-value": {
    marginRight: theme.spacing(2),
    fontFamily: theme.typography.paragraph.xl.medium.fontFamily,
    fontSize: theme.typography.paragraph.xl.medium.fontSize
  }
}));
var ReportContainer = (props) => {
  const getPercentageSymbol = () => {
    let symbol;
    switch (props.percentageType) {
      case "rise":
        symbol = "\u25B4";
        break;
      case "stagnant":
        symbol = "\u2014";
        break;
      case "down":
        symbol = "\u25BE";
        break;
      default:
        symbol = "\u2014";
    }
    return symbol;
  };
  const getPercentageVariation = () => {
    let variation;
    switch (props.percentageType) {
      case "rise":
        variation = "rise";
        break;
      case "stagnant":
        variation = "no variation";
        break;
      case "down":
        variation = "down";
        break;
      default:
        variation = "no variation";
    }
    return variation;
  };
  return /* @__PURE__ */ jsxs3(
    StyledReportContainer,
    {
      tabIndex: 0,
      "aria-label": `Value ${props.value}, Percentage: ${props.percentage}, ${getPercentageVariation()}, ${props.subtitle ?? ""}`,
      children: [
        /* @__PURE__ */ jsxs3(Stack, { direction: "row", alignItems: "center", children: [
          /* @__PURE__ */ jsx7(Typography, { className: "T1-report-value", children: props.value }),
          /* @__PURE__ */ jsx7(
            StyledPercentagePill,
            {
              "aria-label": `Percentage: ${props.percentage}, ${getPercentageVariation()}`,
              className: `T1-percentage-pill-${props.percentageType || "stagnant"}`,
              children: `${getPercentageSymbol()} ${props.percentage}`
            }
          )
        ] }),
        props.subtitle && /* @__PURE__ */ jsx7(
          Typography,
          {
            role: "caption",
            "aria-label": props.subtitle,
            variant: "caption",
            children: props.subtitle
          }
        )
      ]
    }
  );
};
var Reports = (props) => {
  return /* @__PURE__ */ jsxs3(
    StyledReportsContainer,
    {
      "data-testid": "reports",
      className: "T1-container-whiteBox",
      children: [
        /* @__PURE__ */ jsxs3(
          Stack,
          {
            direction: "row",
            alignItems: "baseline",
            className: "T1-reports-header",
            children: [
              /* @__PURE__ */ jsx7(
                StyledTypographyLabel2,
                {
                  tabIndex: 0,
                  "aria-label": props.title,
                  variant: "paragraphMd",
                  weight: "regular",
                  children: props.title
                }
              ),
              props.subtitle && /* @__PURE__ */ jsx7(
                StyledTypographyLabel2,
                {
                  "aria-label": props.title,
                  tabIndex: 0,
                  variant: "caption",
                  weight: "regular",
                  children: props.subtitle
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx7(Stack, { className: "T1-reports-reports-container", direction: "row", gap: 8, children: props.reports.map((report) => /* @__PURE__ */ jsx7(ReportContainer, { ...report })) }),
        /* @__PURE__ */ jsx7(StyledBox, { children: /* @__PURE__ */ jsx7(
          Link,
          {
            href: props.linkProps.href,
            size: "small",
            target: props.linkProps.target,
            children: props.linkProps.label
          }
        ) })
      ]
    }
  );
};

// lib/badge/component.tsx
import { Badge as MuiBadge } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { jsx as jsx8 } from "react/jsx-runtime";
var Badge = ({
  badgeContent,
  variant = "standard",
  slotProps,
  ...rest
}) => {
  const getBadgeContent = (variant2) => {
    switch (variant2) {
      case "add":
        return /* @__PURE__ */ jsx8(Add, {});
      case "info":
        return "i";
      case "remove":
        return /* @__PURE__ */ jsx8(Remove, {});
      default:
        return badgeContent;
    }
  };
  return /* @__PURE__ */ jsx8(
    MuiBadge,
    {
      anchorOrigin: {
        vertical: "top",
        horizontal: "right"
      },
      variant,
      badgeContent: getBadgeContent(variant),
      "aria-label": `badge ${variant}`,
      tabIndex: 0,
      ...rest,
      slotProps: {
        badge: {
          className: `T1-badge-${variant}`,
          ...slotProps?.badge
        },
        ...omitCustomProps(slotProps, ["badge"])
      }
    }
  );
};

// lib/statistics/statistics-icon.tsx
import { styled as styled5 } from "@mui/material/styles";
import { jsx as jsx9 } from "react/jsx-runtime";
var StyledStatisticsIcon = styled5(Box)(({ theme }) => ({
  width: "44px",
  height: "44px",
  borderRadius: theme.spacing(1),
  backgroundColor: theme.palette.statisticsIcon.background,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  ".MuiSvgIcon-root": {
    width: "24px",
    height: "24px",
    color: theme.palette.statisticsIcon.icon
  }
}));
var StatisticsIcon = ({
  icon,
  variant = "default"
}) => {
  return /* @__PURE__ */ jsx9(StyledStatisticsIcon, { className: "T1-StatisticsIcon", children: variant !== "default" ? /* @__PURE__ */ jsx9(Badge, { variant, children: icon }) : icon });
};

// lib/statistics/statistics-overview.tsx
import { TrendingUp, TrendingFlat, TrendingDown } from "@mui/icons-material";
import { styled as styled6 } from "@mui/material/styles";
import { jsx as jsx10, jsxs as jsxs4 } from "react/jsx-runtime";
var StyledStatisticsOverview = styled6(Box)(({ theme }) => ({
  padding: theme.spacing(3, 4),
  borderRadius: theme.spacing(1),
  width: "230px",
  backgroundColor: theme.palette.statisticsOverview.background,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  position: "relative",
  ".T1-StatisticsOverview": {
    "&-iconBox": {
      display: "flex",
      alignItems: "center",
      position: "relative",
      top: "0",
      bottom: "0"
    },
    "&-title": {
      color: theme.palette.statisticsOverview.title,
      marginBottom: theme.spacing(0.5)
    },
    "&-content": {
      color: theme.palette.statisticsOverview.content,
      marginBottom: theme.spacing(0.5)
    },
    "&-trendingIcon": {
      width: "16px",
      height: "16px",
      marginRight: theme.spacing(0.75)
    },
    "&-trendingUp": {
      color: theme.palette.statisticsOverview.icon.up
    },
    "&-trendingFlat": {
      color: theme.palette.statisticsOverview.icon.flat
    },
    "&-trendingDown": {
      color: theme.palette.statisticsOverview.icon.down
    },
    "&-trendingBox": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start"
    },
    "&-trendingContent": {
      color: theme.palette.statisticsOverview.content
    }
  }
}));
var StatisticsOverview = ({
  title,
  content,
  trend = "flat",
  trendInfo,
  StatisticsIconProps,
  className
}) => {
  return /* @__PURE__ */ jsxs4(StyledStatisticsOverview, { className: className ?? "", children: [
    /* @__PURE__ */ jsxs4(Box, { className: "T1-StatisticsOverview-contentBox", children: [
      /* @__PURE__ */ jsx10(
        Typography,
        {
          variant: "paragraphXl",
          className: "T1-StatisticsOverview-title",
          children: title
        }
      ),
      /* @__PURE__ */ jsx10(
        Typography,
        {
          variant: "paragraphSm",
          className: "T1-StatisticsOverview-content",
          children: content ?? ""
        }
      ),
      /* @__PURE__ */ jsxs4(Box, { className: "T1-StatisticsOverview-trendingBox", children: [
        trend === "up" && /* @__PURE__ */ jsx10(
          TrendingUp,
          {
            "data-testid": "trending-up-icon",
            className: "T1-StatisticsOverview-trendingIcon T1-StatisticsOverview-trendingUp"
          }
        ),
        trend === "flat" && /* @__PURE__ */ jsx10(
          TrendingFlat,
          {
            "data-testid": "trending-flat-icon",
            className: "T1-StatisticsOverview-trendingIcon T1-StatisticsOverview-trendingFlat"
          }
        ),
        trend === "down" && /* @__PURE__ */ jsx10(
          TrendingDown,
          {
            "data-testid": "trending-down-icon",
            className: "T1-StatisticsOverview-trendingIcon T1-StatisticsOverview-trendingDown"
          }
        ),
        trendInfo && /* @__PURE__ */ jsx10(
          Typography,
          {
            variant: "paragraphXs",
            className: "T1-StatisticsOverview-trendingContent",
            children: trendInfo
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx10(Box, { className: "T1-StatisticsOverview-iconBox", children: /* @__PURE__ */ jsx10(StatisticsIcon, { ...StatisticsIconProps }) })
  ] });
};

// lib/statistics/labeled-icon.tsx
import { styled as styled7 } from "@mui/material/styles";
import { jsx as jsx11, jsxs as jsxs5 } from "react/jsx-runtime";
var StyledLabeledIconContainer = styled7(Stack)(
  ({ theme }) => ({
    ".T1-labeled-icon-icon": {
      display: "flex",
      alignItems: "center",
      ".MuiSvgIcon-root": {
        height: 24,
        width: 24
      }
    },
    ".T1-labeled-icon-success": {
      color: theme.palette.labeledIcon.icon.success
    },
    ".T1-labeled-icon-neutral": {
      color: theme.palette.labeledIcon.icon.neutral
    },
    ".T1-labeled-icon-label": {
      color: theme.palette.labeledIcon.primaryText
    },
    ".T1-labeled-icon-secondary-label": {
      color: theme.palette.labeledIcon.secondaryText
    }
  })
);
var LabeledIcon = ({
  label,
  secondaryLabel,
  icon,
  iconColor = "neutral"
}) => {
  return /* @__PURE__ */ jsxs5(
    StyledLabeledIconContainer,
    {
      direction: "row",
      spacing: 1.5,
      "data-testid": "T1-labeled-icon",
      children: [
        /* @__PURE__ */ jsx11(
          Box,
          {
            "data-testid": "T1-labeled-icon-icon",
            className: `T1-labeled-icon-icon T1-labeled-icon-${iconColor}`,
            children: icon
          }
        ),
        /* @__PURE__ */ jsxs5(Stack, { children: [
          /* @__PURE__ */ jsx11(
            Typography,
            {
              "data-testid": "T1-labeled-icon-label",
              variant: "paragraphSm",
              className: "T1-labeled-icon-label",
              children: label
            }
          ),
          secondaryLabel && /* @__PURE__ */ jsx11(
            Typography,
            {
              "data-testid": "T1-labeled-icon-secondary-label",
              variant: "paragraphXs",
              className: "T1-labeled-icon-secondary-label",
              children: secondaryLabel
            }
          )
        ] })
      ]
    }
  );
};

// lib/statistics/holiday.tsx
import { styled as styled8 } from "@mui/material/styles";
import CalendarTodayFilled from "@mui/icons-material/CalendarToday";
import { jsx as jsx12, jsxs as jsxs6 } from "react/jsx-runtime";
var Container = styled8(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "flex-start",
  gap: theme.spacing(5),
  padding: theme.spacing(4, 6),
  width: "266px",
  borderRadius: theme.spacing(1),
  background: theme.palette.holiday.container.background,
  svg: {
    color: theme.palette.holiday.icon.color
  }
}));
var IconWrapper = styled8(Stack)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(2.5),
  borderRadius: theme.spacing(1),
  background: theme.palette.holiday.icon.background
}));
var TextWrapper = styled8(Stack)(({ theme }) => ({
  flexDirection: "column",
  gap: theme.spacing(1)
}));
var HolidayName = styled8(Typography)(({ theme }) => ({
  color: theme.palette.holiday.container.color
}));
var HolidayCard = ({ name, date }) => {
  return /* @__PURE__ */ jsxs6(Container, { children: [
    /* @__PURE__ */ jsx12(IconWrapper, { children: /* @__PURE__ */ jsx12(CalendarTodayFilled, { sx: { color: "secondary.main" } }) }),
    /* @__PURE__ */ jsxs6(TextWrapper, { children: [
      /* @__PURE__ */ jsx12(HolidayName, { variant: "paragraphSm", weight: "regular", color: "", children: name }),
      /* @__PURE__ */ jsx12(Typography, { variant: "paragraphXs", weight: "bold", children: date })
    ] })
  ] });
};

// lib/statistics/theme.ts
var payRunsTheme = {
  dark: {
    name: "payRuns",
    styles: {
      color: COLORS.SYSTEM.SILVER
    }
  },
  light: {
    name: "payRuns",
    styles: {
      color: COLORS.SYSTEM.DARK_30
    }
  }
};
var labeledIcon = {
  dark: {
    name: "labeledIcon",
    styles: {
      icon: {
        success: COLORS.SUCCESS.SUCCESS_20,
        neutral: COLORS.SYSTEM.SILVER
      },
      primaryText: COLORS.SYSTEM.WHITE,
      secondaryText: COLORS.SYSTEM.SILVER
    }
  },
  light: {
    name: "labeledIcon",
    styles: {
      icon: {
        success: COLORS.SUCCESS.SUCCESS_40,
        neutral: COLORS.SYSTEM.SILVER
      },
      primaryText: COLORS.SYSTEM.INK,
      secondaryText: COLORS.SYSTEM.DARK_30
    }
  }
};
var reportsTheme = {
  dark: {
    name: "reports",
    styles: {
      title: COLORS.SYSTEM.WHITE,
      subtitle: COLORS.SYSTEM.SILVER,
      percentagePill: {
        rise: {
          background: COLORS.SUCCESS.SUCCESS_20,
          text: COLORS.SUCCESS.SUCCESS_50
        },
        stagnant: {
          background: COLORS.SYSTEM.SILVER,
          text: COLORS.SYSTEM.INK
        },
        down: {
          background: COLORS.ERROR.ERROR_20,
          text: COLORS.SYSTEM.INK
        }
      }
    }
  },
  light: {
    name: "reports",
    styles: {
      title: COLORS.SYSTEM.INK,
      subtitle: COLORS.SYSTEM.DARK_30,
      percentagePill: {
        rise: {
          background: COLORS.SUCCESS.SUCCESS_10,
          text: COLORS.SUCCESS.SUCCESS_40
        },
        stagnant: {
          background: COLORS.SYSTEM.MISTY,
          text: COLORS.SYSTEM.PEWTER
        },
        down: {
          background: COLORS.ERROR.ERROR_10,
          text: COLORS.ERROR.ERROR_40
        }
      }
    }
  }
};
var statisticsIconTheme = {
  dark: {
    name: "statisticsIcon",
    styles: {
      background: COLORS.SYSTEM.INK,
      icon: COLORS.SECONDARY.BLUE_30
    }
  },
  light: {
    name: "statisticsIcon",
    styles: {
      background: COLORS.SECONDARY.BLUE_20,
      icon: COLORS.SECONDARY.BLUE_70
    }
  }
};
var statisticsOverviewTheme = {
  dark: {
    name: "statisticsOverview",
    styles: {
      background: COLORS.SYSTEM.DARK_70,
      title: COLORS.SYSTEM.WHITE,
      content: COLORS.SYSTEM.SILVER,
      icon: {
        up: COLORS.SUCCESS.SUCCESS_20,
        flat: COLORS.SYSTEM.SILVER,
        down: COLORS.ERROR.ERROR_20
      }
    }
  },
  light: {
    name: "statisticsOverview",
    styles: {
      background: COLORS.SECONDARY.BLUE_10,
      title: COLORS.SYSTEM.INK,
      content: COLORS.SYSTEM.DARK_30,
      icon: {
        up: COLORS.SUCCESS.SUCCESS_40,
        flat: COLORS.SYSTEM.PEWTER,
        down: COLORS.ERROR.ERROR_40
      }
    }
  }
};
var timeOffCardTheme = {
  dark: {
    name: "timeOffCard",
    styles: {
      container: {
        border: COLORS.SYSTEM.SLATE,
        background: COLORS.SYSTEM.INK
      },
      accordion: {
        link: COLORS.SECONDARY.BLUE_40,
        iconColor: COLORS.SYSTEM.SILVER
      },
      totalHoursContainer: {
        color: COLORS.SYSTEM.SILVER,
        availableHoursColor: COLORS.INFO.INFO_20,
        maxHoursColor: COLORS.SYSTEM.SILVER
      },
      toolTip: {
        background: COLORS.SYSTEM.CLOUDY
      }
    }
  },
  light: {
    name: "timeOffCard",
    styles: {
      container: {
        border: COLORS.SYSTEM.MISTY,
        background: COLORS.SYSTEM.WHITE
      },
      accordion: {
        link: COLORS.SECONDARY.BLUE_60,
        iconColor: COLORS.SYSTEM.PEWTER
      },
      totalHoursContainer: {
        color: COLORS.SYSTEM.DARK_30,
        availableHoursColor: COLORS.INFO.INFO_50,
        maxHoursColor: COLORS.SYSTEM.DARK_30
      },
      toolTip: {
        background: COLORS.SYSTEM.CLOUDY
      }
    }
  }
};
var holidayTheme = {
  dark: {
    name: "holiday",
    styles: {
      container: {
        border: COLORS.SYSTEM.SLATE,
        background: COLORS.SYSTEM.INK,
        color: COLORS.SYSTEM.SILVER
      },
      icon: {
        background: COLORS.SYSTEM.DARK_70,
        color: COLORS.SECONDARY.BLUE_30
      }
    }
  },
  light: {
    name: "holiday",
    styles: {
      container: {
        border: COLORS.SYSTEM.MISTY,
        background: COLORS.SECONDARY.BLUE_10,
        color: COLORS.SYSTEM.DARK_30
      },
      icon: {
        background: COLORS.SECONDARY.BLUE_20,
        color: COLORS.SECONDARY.BLUE_70
      }
    }
  }
};
export {
  HolidayCard,
  LabeledIcon,
  PayRuns,
  Reports,
  StatisticsIcon,
  StatisticsOverview,
  StyledStatisticsIcon,
  StyledStatisticsOverview,
  TimeOffCard,
  holidayTheme,
  labeledIcon,
  payRunsTheme,
  reportsTheme,
  statisticsIconTheme,
  statisticsOverviewTheme,
  timeOffCardTheme
};
