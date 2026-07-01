// lib/tooltip/component.tsx
import { Tooltip as MuiTooltip } from "@mui/material";
import { styled } from "@mui/material/styles";

// lib/layout/index.ts
import { Box, Stack, Grid2 } from "@mui/material";

// lib/cms/component.tsx
import { useEffect, useMemo, useState, createElement } from "react";
import { useIntl, IntlProvider } from "react-intl";
import { jsx } from "react/jsx-runtime";
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

// lib/tooltip/component.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var StyledUnderlinedSpan = styled("span")(({ theme }) => ({
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
var Tooltip = ({
  contentId,
  title: propTitle,
  variant = "light",
  arrow = true,
  children,
  underline,
  ...rest
}) => {
  const getCMSContent = useGetCMSContent();
  const title = getCMSContent({
    contentId,
    key: ".tooltip",
    fallbackContent: propTitle
  });
  return /* @__PURE__ */ jsx2(
    MuiTooltip,
    {
      title,
      arrow,
      ...rest,
      slots: { tooltip: StyledTooltip },
      slotProps: {
        tooltip: { className: `tooltip-${variant}` },
        arrow: { className: `tooltip-${variant}` }
      },
      children: underline ? /* @__PURE__ */ jsx2(StyledUnderlinedSpan, { "data-testid": "T1-tooltip-underline", children }) : children
    }
  );
};
var StyledTooltip = styled(Box)(({
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

// lib/utils/components.tsx
import { jsx as jsx3 } from "react/jsx-runtime";

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
export {
  Tooltip,
  tooltipTheme
};
