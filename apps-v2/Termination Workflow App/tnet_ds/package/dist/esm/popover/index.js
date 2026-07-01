// lib/popover/component.tsx
import React, { useState as useState2 } from "react";
import {
  Tooltip as MuiPopover,
  ClickAwayListener
} from "@mui/material";
import { styled as styled2 } from "@mui/material/styles";

// lib/icon-button/component.tsx
import { IconButton as MuiIconButton } from "@mui/material";

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

// lib/icon-button/component.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var IconButton = (props) => {
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
  return /* @__PURE__ */ jsx2(
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

// lib/popover/component.tsx
import { Close } from "@mui/icons-material";

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
import { jsx as jsx3 } from "react/jsx-runtime";
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
    return /* @__PURE__ */ jsx3(
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

// lib/cms/component.tsx
import { useEffect, useMemo, useState, createElement } from "react";
import { useIntl, IntlProvider } from "react-intl";
import { jsx as jsx4 } from "react/jsx-runtime";
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

// lib/link/component.tsx
import { Link as MuiLink } from "@mui/material";
import { jsx as jsx5 } from "react/jsx-runtime";
var Link = ({
  disabled = false,
  size = "large",
  className,
  children,
  onClick,
  ...rest
}) => /* @__PURE__ */ jsx5(
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

// lib/popover/component.tsx
import { jsx as jsx6, jsxs } from "react/jsx-runtime";
var Popover = React.forwardRef(
  ({
    children,
    arrow = true,
    linkProps,
    contentId,
    ...props
  }) => {
    const [isOpen, setIsOpen] = useState2(false);
    const intl = useIntl();
    const getCMSContent = useGetCMSContent();
    const customLinkProps = contentId ? {
      ...linkProps,
      href: intl.formatMessage({
        id: `${contentId}.link_href`,
        defaultMessage: "#"
      })
    } : linkProps;
    const handleClose = () => {
      setIsOpen(false);
    };
    const handleOpen = () => {
      setIsOpen(true);
    };
    const handlePress = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    return /* @__PURE__ */ jsx6(
      MuiPopover,
      {
        open: isOpen,
        onClick: handleOpen,
        onMouseEnter: handleOpen,
        arrow,
        slots: { tooltip: StyledTooltip },
        slotProps: {
          tooltip: { className: `popover` },
          arrow: { className: `popover` }
        },
        "data-testid": "popover-container",
        "aria-labelledby": "popover-content",
        onKeyDown: handlePress,
        title: /* @__PURE__ */ jsx6(ClickAwayListener, { onClickAway: handleClose, children: /* @__PURE__ */ jsxs(
          Stack,
          {
            className: "popover T1-popover-container",
            id: "popover-content",
            onKeyDown: handlePress,
            role: "menu",
            "aria-live": "polite",
            "arial-label": "popover content",
            "data-testid": "popover-content",
            children: [
              /* @__PURE__ */ jsx6(
                Box,
                {
                  sx: { visibility: "invisible" },
                  "data-testid": "popover-close-button",
                  onMouseEnter: handleOpen
                }
              ),
              /* @__PURE__ */ jsx6(
                IconButton,
                {
                  "data-testid": "closeButton",
                  onClick: handleClose,
                  tabIndex: 0,
                  children: /* @__PURE__ */ jsx6(Close, {})
                }
              ),
              /* @__PURE__ */ jsx6(
                Typography,
                {
                  variant: "paragraphMd",
                  className: "T1-popover-title",
                  weight: "medium",
                  children: getCMSContent({
                    contentId,
                    key: ".title",
                    fallbackContent: "Content ID missing or failed, fallback title"
                  })
                }
              ),
              /* @__PURE__ */ jsx6(
                Typography,
                {
                  component: "p",
                  variant: "paragraphSm",
                  className: "T1-popover-content",
                  children: getCMSContent({
                    contentId,
                    key: ".content",
                    fallbackContent: "Contend ID missing, fallback content"
                  })
                }
              ),
              /* @__PURE__ */ jsx6(
                Link,
                {
                  ...customLinkProps,
                  tabIndex: 0,
                  "data-testid": "popover-link",
                  children: getCMSContent({
                    contentId,
                    key: ".link_text",
                    fallbackContent: "Error, fallback link text"
                  })
                }
              )
            ]
          }
        ) }),
        ...props,
        children: /* @__PURE__ */ jsx6(Box, { component: "span", "data-testid": "popover-action", children: React.cloneElement(children, {
          "aria-label": `Popup action ${children.props["aria-label"]}`
        }) })
      }
    );
  }
);
var StyledTooltip = styled2(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  transform: `translate(0, ${theme.spacing(4)})!important`,
  backgroundColor: theme.palette.popover.background,
  outline: `1px solid ${theme.palette.popover.border}`,
  color: theme.palette.popover.color,
  fontFamily: theme.typography.paragraph.md.regular.fontFamily,
  fontSize: theme.typography.paragraph.md.regular.fontSize,
  lineHeight: theme.typography.paragraph.md.medium.lineHeight,
  maxWidth: "328px",
  maxHeight: "600px",
  display: "flex",
  boxSizing: "content-box",
  ".T1-popover-title": {
    margin: 0,
    height: "28px",
    verticalAlign: "center"
  },
  ".T1-popover-container": {
    flex: 1
  },
  ".MuiIconButton-root": {
    position: "absolute",
    right: "4px",
    top: "4px",
    svg: {
      color: theme.palette.popover.iconColor,
      width: "18px",
      height: "18px"
    }
  },
  p: {
    color: theme.palette.popover.color,
    display: "block",
    margin: theme.spacing(4, 0),
    fontFamily: theme.typography.paragraph.sm.regular.fontFamily,
    fontSize: theme.typography.paragraph.sm.regular.fontSize,
    lineHeight: theme.typography.paragraph.sm.medium.lineHeight
  },
  ".T1-popover-content": {
    height: "100%",
    overflowY: "auto"
  },
  a: {
    marginLeft: `-${theme.spacing(1.5)}`,
    fontFamily: theme.typography.paragraph.sm.regular.fontFamily,
    fontSize: theme.typography.paragraph.sm.regular.fontSize,
    lineHeight: theme.typography.paragraph.sm.medium.lineHeight
  },
  ".MuiTooltip-arrow": {
    "&.popover:before": {
      outline: `1px solid ${theme.palette.popover.border}`,
      color: theme.palette.popover.background,
      top: `translate(0, ${theme.spacing(3.75)})!important`
    }
  }
}));
export {
  Popover
};
