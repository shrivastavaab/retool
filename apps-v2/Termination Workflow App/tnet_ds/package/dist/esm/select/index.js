// lib/select/component.tsx
import { Select as MuiSelect } from "@mui/material";
import { styled as styled2 } from "@mui/material/styles";

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

// lib/form-control/component.tsx
import { FormControl as MuiFormControl } from "@mui/material";
import { jsx as jsx2 } from "react/jsx-runtime";
var FormControl = (props) => {
  return /* @__PURE__ */ jsx2(
    MuiFormControl,
    {
      sx: { cursor: `${props.disabled ? "not-allowed" : "auto"}` },
      ...props,
      variant: "outlined"
    }
  );
};

// lib/form-helper-text/component.tsx
import {
  FormHelperText as MuiFormHelperText
} from "@mui/material";
import { WarningAmberOutlined } from "@mui/icons-material";
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
var FormHelperText = (props) => {
  return /* @__PURE__ */ jsxs(MuiFormHelperText, { ...props, variant: "outlined", children: [
    props.error && /* @__PURE__ */ jsx3(WarningAmberOutlined, {}),
    props.children
  ] });
};

// lib/input-label/component.tsx
import { InputLabel as MuiInputLabel } from "@mui/material";
import { jsx as jsx4 } from "react/jsx-runtime";
var InputLabel = (props) => {
  return /* @__PURE__ */ jsx4(MuiInputLabel, { ...props });
};

// lib/menu-item/component.tsx
import { styled } from "@mui/material/styles";
import { MenuItem as MuiMenuItem } from "@mui/material";
import { jsx as jsx5 } from "react/jsx-runtime";
var StyledMenuItem = styled(MuiMenuItem)(({ theme }) => ({
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
  return /* @__PURE__ */ jsx5(
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

// lib/layout/index.ts
import { Box, Stack, Grid2 } from "@mui/material";

// lib/utils/components.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
var CursorController = (props) => {
  return /* @__PURE__ */ jsx6(
    Box,
    {
      ...omitCustomProps(props, ["sx"]),
      sx: { ...props.sx, cursor: props.cursor },
      children: props.children
    }
  );
};

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

// lib/select/component.tsx
import { KeyboardArrowDown } from "@mui/icons-material";
import { jsx as jsx7, jsxs as jsxs2 } from "react/jsx-runtime";
var StyledSelect = styled2(MuiSelect)(({ theme }) => ({
  padding: 0,
  outline: "none",
  height: "3rem",
  color: theme.palette.textField.text,
  fontFamily: theme.typography.paragraph.md.regular.fontFamily,
  fontSize: theme.typography.paragraph.md.regular.fontSize,
  lineHeight: theme.typography.paragraph.md.regular.lineHeight,
  "&:hover": {
    ".MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.textField.hover.border
    },
    ".MuiIconButton-edgeEnd": {
      color: theme.palette.textField.hover.border
    }
  },
  "&.Mui-error, &:hover.Mui-error": {
    borderColor: theme.palette.textField.error.border,
    color: theme.palette.textField.text
  },
  "&.Mui-disabled": {
    color: theme.palette.textField.disabled.text,
    background: theme.palette.textField.disabled.background,
    opacity: 1,
    ".MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.textField.disabled.border
    }
  },
  "&.Mui-focused": {
    fieldset: {
      "&.MuiOutlinedInput-notchedOutline": {
        border: `1px solid ${theme.palette.textField.focus.border}`
      }
    }
  },
  "&.MuiSearch": {
    backgroundColor: theme.palette.textField.search.background,
    "&.Mui-focused": {
      backgroundColor: "white"
    },
    input: {
      "&::placeholder": {
        color: theme.palette.textField.search.placeholder
      }
    }
  },
  "&.T1-select-boxless": {
    border: "none",
    ".MuiSelect-select": {
      paddingLeft: 0,
      "&:focus-visible": {
        outline: `1px dashed ${theme.palette.outline}`
      }
    },
    fieldset: {
      border: "none"
    },
    "&.Mui-focused": {
      border: "none",
      fieldset: {
        border: "none"
      }
    },
    "&.Mui-error, &.Mui-error .MuiSvgIcon-root": {
      color: theme.palette.textField.error.text
    }
  },
  ".MuiSelect-select": {
    padding: `${theme.spacing(3)}`
  },
  ".MuiIconButton-edgeEnd": {
    marginRight: theme.spacing(1)
  },
  "&.MuiInputBase-sizeSmall": {
    input: {
      padding: `${theme.spacing(2, 3)}`
    },
    height: "2.25rem",
    fontSize: theme.typography.paragraph.sm.regular.fontSize,
    lineHeight: theme.typography.paragraph.sm.regular.lineHeight,
    fieldset: {
      span: {
        paddingRight: theme.spacing(2.75)
      }
    }
  },
  ".MuiIconButton-edgeEnd:focus-visible": {
    borderRadius: "2px",
    outline: `dashed 1px ${theme.palette.checkbox.outlineFocus}`
  },
  ".MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.textField.border
  },
  ".MuiSvgIcon-root": {
    color: theme.palette.textField.icon
  },
  ".MuiFormhelperText-root": {
    color: theme.palette.textField.text
  }
}));
var Select = ({
  children,
  contentId,
  variant = "regular",
  className,
  disabled,
  ...rest
}) => {
  const intl = useIntl();
  const getCMSContent = useGetCMSContent();
  const label = contentId ? getCMSContent({
    contentId,
    key: ".selectLabel",
    fallbackContent: rest.label
  }) : rest.label;
  const keys = Object.keys(intl.messages).filter(
    (key) => key.startsWith(`${contentId}.list`) && (key.endsWith(".label") || key.endsWith(".value"))
  );
  const options = keys.filter((_, index) => index % 2 === 0).map((key, index) => ({
    label: intl.formatMessage({ id: key, defaultMessage: " " }),
    value: intl.formatMessage({
      id: keys[index * 2 + 1],
      defaultMessage: " "
    })
  }));
  if (!contentId)
    return /* @__PURE__ */ jsxs2(
      StyledSelect,
      {
        disabled,
        variant: "outlined",
        ...omitCustomProps(rest, ["MenuProps"]),
        MenuProps: {
          sx: {
            ...rest.MenuProps?.sx || {},
            padding: 0
          },
          elevation: 1,
          anchorOrigin: { horizontal: "left", vertical: "bottom" },
          transformOrigin: { horizontal: "left", vertical: "top" },
          ...omitCustomProps(rest.MenuProps, [
            "elevation",
            "sx",
            "anchorOrigin",
            "transformOrigin"
          ])
        },
        IconComponent: KeyboardArrowDown,
        className: `${variant === "boxless" ? "T1-select-boxless" : ""} ${className ?? ""}`,
        displayEmpty: variant === "boxless" ? true : rest.displayEmpty,
        children: [
          variant === "boxless" && /* @__PURE__ */ jsx7(MenuItem, { value: "", children: label }),
          children
        ]
      }
    );
  return /* @__PURE__ */ jsxs2(FormControl, { disabled, children: [
    /* @__PURE__ */ jsx7(InputLabel, { children: label }),
    /* @__PURE__ */ jsx7(
      StyledSelect,
      {
        ...rest && omitCustomProps(rest, ["MenuProps"]),
        MenuProps: {
          sx: {
            ...rest.MenuProps?.sx || {},
            padding: 0
          },
          elevation: 1,
          anchorOrigin: { horizontal: "left", vertical: "bottom" },
          transformOrigin: { horizontal: "left", vertical: "top" },
          ...omitCustomProps(rest.MenuProps, [
            "elevation",
            "sx",
            "anchorOrigin",
            "transformOrigin"
          ])
        },
        variant: "outlined",
        label,
        IconComponent: KeyboardArrowDown,
        className: `${variant === "boxless" ? "T1-select-boxless" : ""} ${className ?? ""}`,
        inputProps: { tabIndex: 0 },
        children: options.map((option) => /* @__PURE__ */ jsx7(MenuItem, { value: option.value, children: option.label }, option.value))
      }
    ),
    /* @__PURE__ */ jsx7(FormHelperText, { children: intl.formatMessage({
      id: `${contentId}.helper_text`,
      defaultMessage: " "
    }) })
  ] });
};

// lib/select/arrowedSelect.tsx
import { useEffect as useEffect2, useRef, useState as useState2 } from "react";
import { styled as styled5 } from "@mui/material/styles";

// lib/icon-button/component.tsx
import { IconButton as MuiIconButton } from "@mui/material";
import { jsx as jsx8 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx8(
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

// lib/avatar/component.tsx
import {
  Avatar as MuiAvatar,
  AvatarGroup as MuiAvatarGroup
} from "@mui/material";

// lib/badge/component.tsx
import { Badge as MuiBadge } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { jsx as jsx9 } from "react/jsx-runtime";
var Badge = ({
  badgeContent,
  variant = "standard",
  slotProps,
  ...rest
}) => {
  const getBadgeContent = (variant2) => {
    switch (variant2) {
      case "add":
        return /* @__PURE__ */ jsx9(Add, {});
      case "info":
        return "i";
      case "remove":
        return /* @__PURE__ */ jsx9(Remove, {});
      default:
        return badgeContent;
    }
  };
  return /* @__PURE__ */ jsx9(
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

// lib/avatar/component.tsx
import { jsx as jsx10 } from "react/jsx-runtime";
var Avatar = ({
  size = "medium",
  color = "orange",
  badge,
  ...props
}) => {
  return badge ? /* @__PURE__ */ jsx10(
    Badge,
    {
      badgeContent: badge.content,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right"
      },
      ...omitCustomProps(badge.props, ["anchorOrigin"]),
      children: /* @__PURE__ */ jsx10(
        MuiAvatar,
        {
          "data-testid": "avatar-badge",
          className: `${props.className ?? ""} T1-avatar-${size} T1-avatar-${color}`,
          ...omitCustomProps(props, ["className"]),
          variant: "circular"
        }
      )
    }
  ) : /* @__PURE__ */ jsx10(
    MuiAvatar,
    {
      "data-testid": "avatar-without-badge",
      className: `${props.className ?? ""} T1-avatar-${size} T1-avatar-${color}`,
      ...omitCustomProps(props, ["className"])
    }
  );
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
import { styled as styled3 } from "@mui/material/styles";
import { forwardRef } from "react";
import { jsx as jsx11 } from "react/jsx-runtime";
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
    return /* @__PURE__ */ jsx11(
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
var StyledTypography = styled3(MuiTypography)(({
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

// lib/menu/component.tsx
import React from "react";
import { Menu as MuiMenu } from "@mui/material";
import { styled as styled4 } from "@mui/material/styles";
import { jsx as jsx12 } from "react/jsx-runtime";
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
    return /* @__PURE__ */ jsx12(
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
    return /* @__PURE__ */ jsx12(
      StyledMenu,
      {
        ...rest,
        elevation: 1,
        ref,
        className: variant ? "menu-breadcrumbs" : "",
        "data-testid": "menu",
        children: keys.map((item) => /* @__PURE__ */ jsx12(MenuItem, { children: item }, item.toString()))
      }
    );
  }
);

// lib/select/arrowedSelect.tsx
import { FormHelperText as FormHelperText2 } from "@mui/material";
import {
  KeyboardArrowDown as KeyboardArrowDown2,
  KeyboardArrowLeft,
  KeyboardArrowRight
} from "@mui/icons-material";
import { jsx as jsx13, jsxs as jsxs3 } from "react/jsx-runtime";
var StyledArrowedSelect = styled5(Stack)(({ theme }) => ({
  height: "52px",
  boxSizing: "border-box",
  borderRadius: theme.spacing(1),
  outline: "none",
  border: `1px solid ${theme.palette.arrowedSelect.border}`,
  padding: theme.spacing(1.5),
  gap: theme.spacing(1),
  "&:hover": {
    border: `1px solid ${theme.palette.arrowedSelect.hover.border}`
  },
  "&:focus, &.T1-active": {
    border: `1px solid ${theme.palette.outline}`
  },
  "&.T1-disabled": {
    pointerEvents: "none",
    border: `1px solid ${theme.palette.arrowedSelect.disabled.border}`,
    backgroundColor: theme.palette.arrowedSelect.disabled.background,
    ".T1-arrowedSelect-actionable, .T1-arrowedSelect-buttons": {
      opacity: 0.5
    }
  },
  "&.T1-arrowedSelect-boxless": {
    border: "none"
  },
  "&.T1-error": {
    border: `1px solid ${theme.palette.arrowedSelect.error.border}`
  },
  ".MuiInputBase-root": {
    width: "100%"
  },
  ".T1-arrowedSelect-item": {
    width: "100%"
  },
  ".T1-arrowedSelect-actionable": {
    width: "100%",
    alignItems: "center",
    cursor: "pointer",
    justifyContent: "flex-end"
  }
}));
var StyledArrowedSelectItem = styled5(Stack)(({ theme }) => ({
  minHeight: "0px",
  ".MuiAvatar-root": {
    marginRight: theme.spacing(1.5)
  },
  ".T1-arrowedSelect-title": {
    color: theme.palette.arrowedSelect.item.title,
    fontFamily: theme.typography.paragraph.sm.medium.fontFamily,
    fontSize: theme.typography.paragraph.sm.medium.fontSize,
    lineHeight: theme.typography.paragraph.sm.medium.lineHeight
  },
  ".T1-arrowedSelect-content": {
    color: theme.palette.arrowedSelect.item.content,
    fontFamily: theme.typography.paragraph.xs.regular.fontFamily,
    fontSize: theme.typography.paragraph.xs.regular.fontSize,
    lineHeight: theme.typography.paragraph.xs.regular.lineHeight,
    ".T1-arrowedSelect-content-dot": {
      display: "inline-block",
      transform: "scale(150%)"
    }
  }
}));
var ArrowedSelectItem = ({
  avatarProps,
  title,
  content
}) => {
  return /* @__PURE__ */ jsxs3(
    StyledArrowedSelectItem,
    {
      className: "T1-arrowedSelect-item",
      direction: "row",
      alignItems: "center",
      "data-testid": "arrowedSelectItem",
      children: [
        /* @__PURE__ */ jsx13(Avatar, { size: "medium", ...avatarProps }),
        /* @__PURE__ */ jsxs3(Stack, { children: [
          /* @__PURE__ */ jsx13(Typography, { className: "T1-arrowedSelect-title", children: title }),
          /* @__PURE__ */ jsxs3(Typography, { className: "T1-arrowedSelect-content", children: [
            content[0],
            " ",
            /* @__PURE__ */ jsx13("span", { className: "T1-arrowedSelect-content-dot", children: "\u2022" }),
            " ",
            content[1]
          ] })
        ] })
      ]
    }
  );
};
var ArrowedSelect = ({
  items,
  onChange,
  value,
  disabled = false,
  error = false,
  variant = "regular",
  helpText
}) => {
  const [selectedItem, setSelectedItem] = useState2(value);
  const [anchorEl, setAnchorEl] = useState2(null);
  const arrowedSelectRef = useRef(null);
  const open = Boolean(anchorEl);
  const handleKeyUp = (e) => {
    if (!disabled) {
      e.stopPropagation();
      e.preventDefault();
      if (e.key === "Enter" || e.key === " ") {
        setAnchorEl(arrowedSelectRef.current);
      }
    }
  };
  const handleClick = () => {
    setAnchorEl(arrowedSelectRef.current);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleArrowButtonClick = (button) => {
    switch (button) {
      case "right": {
        if (selectedItem !== items[items.length - 1]) {
          setSelectedItem(items[items.indexOf(selectedItem) + 1]);
        }
        break;
      }
      case "left": {
        if (selectedItem !== items[0]) {
          setSelectedItem(items[items.indexOf(selectedItem) - 1]);
        }
        break;
      }
      default:
        return;
    }
  };
  useEffect2(() => {
    if (onChange) {
      onChange(selectedItem);
    }
  }, [selectedItem]);
  return /* @__PURE__ */ jsxs3(FormControl, { error, sx: { width: "340px", maxWidth: "100%" }, children: [
    /* @__PURE__ */ jsxs3(CursorController, { cursor: disabled ? "not-allowed" : "pointer", children: [
      /* @__PURE__ */ jsxs3(
        StyledArrowedSelect,
        {
          direction: "row",
          "aria-label": `Arrowed Select. ${selectedItem ? selectedItem.title : ""} ${selectedItem?.content ? selectedItem.content[0] : ""},  ${selectedItem?.content ? selectedItem.content[1] : ""}`,
          tabIndex: 0,
          ref: arrowedSelectRef,
          className: `T1-arrowed-select ${disabled ? "T1-disabled" : ""} ${error ? "T1-error" : ""} ${variant === "boxless" ? "T1-arrowedSelect-boxless" : ""} ${anchorEl ? "T1-active" : ""}`,
          onKeyUp: handleKeyUp,
          "data-testid": "arrowedSelect",
          children: [
            /* @__PURE__ */ jsxs3(
              Stack,
              {
                direction: "row",
                className: "T1-arrowedSelect-actionable",
                onClick: handleClick,
                "data-testid": "arrowedSelect-actionable",
                children: [
                  selectedItem && /* @__PURE__ */ jsx13(ArrowedSelectItem, { ...selectedItem }),
                  /* @__PURE__ */ jsx13(KeyboardArrowDown2, { className: "T1-arrowedSelect-icon" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs3(Stack, { direction: "row", gap: 1, className: "T1-arrowedSelect-buttons", children: [
              /* @__PURE__ */ jsx13(
                IconButton,
                {
                  onClick: () => {
                    handleArrowButtonClick("left");
                  },
                  onKeyUp: (e) => e.stopPropagation(),
                  shape: "square",
                  variant: "tertiary",
                  "aria-label": "Previous",
                  "data-testid": "arrowedSelect-button-left",
                  children: /* @__PURE__ */ jsx13(KeyboardArrowLeft, {})
                }
              ),
              /* @__PURE__ */ jsx13(
                IconButton,
                {
                  onClick: () => {
                    handleArrowButtonClick("right");
                  },
                  onKeyUp: (e) => e.stopPropagation(),
                  shape: "square",
                  variant: "tertiary",
                  "aria-label": "Next",
                  "data-testid": "arrowedSelect-button-right\n              ",
                  children: /* @__PURE__ */ jsx13(KeyboardArrowRight, {})
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsx13(
        Menu,
        {
          anchorEl,
          open,
          onClose: handleClose,
          MenuListProps: {
            "aria-labelledby": "T1-arrowedSelect"
          },
          sx: { minWidth: "200px" },
          children: items.map((item, index) => {
            const key = index + 1;
            return /* @__PURE__ */ jsx13(
              MenuItem,
              {
                onClick: () => {
                  setSelectedItem(item);
                  handleClose();
                },
                children: /* @__PURE__ */ jsx13(ArrowedSelectItem, { ...item })
              },
              key
            );
          })
        }
      )
    ] }),
    helpText && /* @__PURE__ */ jsx13(FormHelperText2, { children: helpText })
  ] });
};

// lib/select/multiSelect.tsx
import * as React4 from "react";
import { useTheme as useTheme2, styled as styled7 } from "@mui/material/styles";
import { OutlinedInput } from "@mui/material";

// lib/list/component.tsx
import React2 from "react";
import {
  List as MuiList,
  ListItem as MuiListItem,
  ListItemIcon as MuiListItemIcon,
  ListItemText as MuiListItemText
} from "@mui/material";
import { jsx as jsx14 } from "react/jsx-runtime";
var List = React2.forwardRef(
  ({ children, ...rest }, ref) => {
    return /* @__PURE__ */ jsx14(MuiList, { ...rest, ref, children });
  }
);
var ListItem = React2.forwardRef(
  ({
    children,
    className,
    variant = "primary",
    highlight,
    ...rest
  }, ref) => {
    return /* @__PURE__ */ jsx14(
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
var ListItemText = React2.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsx14(MuiListItemText, { ...props, ref });
  }
);
var ListItemIcon = React2.forwardRef(
  ({ children, ...rest }, ref) => {
    return /* @__PURE__ */ jsx14(MuiListItemIcon, { ...rest, ref, children });
  }
);

// lib/chip/component.tsx
import React3, { useState as useState3 } from "react";
import { Chip as MuiChip, InputBase } from "@mui/material";
import { Check, Close, ModeEditOutlineOutlined } from "@mui/icons-material";
import { Fragment, jsx as jsx15, jsxs as jsxs4 } from "react/jsx-runtime";
var Chip = ({
  disabled,
  edit = false,
  size = "medium",
  label = "",
  contentId,
  withoutAvatar = false,
  variant = "neutral",
  onDelete,
  onChange,
  className = "",
  ...props
}) => {
  const getContent = useGetCMSContent();
  const chipLabel = contentId ? getContent({
    contentId,
    key: ".label",
    fallbackContent: label
  }) : label;
  const chipSize = contentId ? getContent({
    contentId,
    key: ".size",
    fallbackContent: size
  }) : size;
  const chipType = contentId ? getContent({
    contentId,
    key: ".type",
    fallbackContent: variant
  }) : variant;
  const [editing, setEditing] = useState3(false);
  const [textLabel, setTextLabel] = useState3(chipLabel);
  const [selected, setSelected] = useState3(false);
  const textRef = React3.useRef(null);
  const handleEdit = () => {
    textRef.current.firstChild.focus();
    setEditing((prev) => !prev);
  };
  const handleSave = () => {
    textRef.current.blur();
    setEditing((prev) => !prev);
  };
  const handleChange = (e) => {
    setTextLabel(e.target.value);
  };
  const handleDeleteKeyPress = (e) => {
    if (!disabled && (e.key === "Enter" || e.key === "Space")) {
      onDelete(e);
    }
  };
  const handleDeleteClick = (e) => {
    if (!disabled) {
      onDelete(e);
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter" || e.key === "Space") {
      e.preventDefault();
      if (!editing) {
        textRef.current.firstChild.focus();
      }
      setEditing((prev) => !prev);
    }
  };
  const handleKeyPressSave = (e) => {
    if (editing && e.key === "Enter") {
      if (e.key === "Enter" || e.key === "Space") {
        e.preventDefault();
        setEditing((prev) => !prev);
      }
    }
  };
  const handleClick = () => {
    if (variant === "pill") {
      if (onChange) {
        onChange(!selected);
      } else {
        setSelected(!selected);
      }
    }
  };
  const getSelectedClass = () => {
    if (variant === "pill") {
      return selected ? "T1-pill-chip-selected" : "";
    }
  };
  return /* @__PURE__ */ jsx15(
    MuiChip,
    {
      ...props,
      variant: chipType,
      disabled,
      "aria-label": `${variant} chip ${textLabel?.toString()}`,
      tabIndex: 0,
      avatar: !edit && !withoutAvatar ? /* @__PURE__ */ jsx15(Avatar, { alt: props.alt, src: props.src, size: "small" }) : null,
      className: `T1-chip ${editing ? "T1-chip-editing" : ""} ${edit ? "T1-chip-editable" : ""} ${getSelectedClass()} ${className}`,
      onDelete: handleDeleteClick,
      onClick: handleClick,
      "data-testid": "Chip",
      size: chipSize,
      deleteIcon: /* @__PURE__ */ jsxs4(Fragment, { children: [
        edit && (editing ? /* @__PURE__ */ jsx15(
          Check,
          {
            "aria-live": "polite",
            onClick: handleSave,
            "data-testid": "CheckIcon",
            role: "button",
            tabIndex: 0,
            type: "button",
            "aria-label": "Confirm edited content",
            onKeyDown: handleKeyPress
          }
        ) : /* @__PURE__ */ jsx15(
          ModeEditOutlineOutlined,
          {
            "aria-live": "polite",
            onClick: handleEdit,
            "data-testid": "EditIcon",
            tabIndex: 0,
            type: "button",
            role: "button",
            "aria-label": "Edit chip content",
            onKeyDown: handleKeyPress
          }
        )),
        /* @__PURE__ */ jsx15(
          Close,
          {
            "aria-live": "polite",
            "aria-hidden": true,
            onClick: handleDeleteClick,
            "data-testid": "DeleteIcon",
            onKeyDown: handleDeleteKeyPress,
            tabIndex: !disabled ? 0 : -1,
            type: "button",
            role: "button",
            "aria-label": "Delete Chip"
          }
        )
      ] }),
      label: !edit ? textLabel : /* @__PURE__ */ jsxs4(Fragment, { children: [
        /* @__PURE__ */ jsx15(
          InputBase,
          {
            onChange: handleChange,
            onKeyDown: handleKeyPressSave,
            "data-testid": "EditInput",
            "aria-hidden": true,
            readOnly: !editing,
            ref: textRef,
            tabIndex: -1,
            inputProps: { tabIndex: !editing ? -1 : 0 },
            value: textLabel
          }
        ),
        /* @__PURE__ */ jsx15(
          "span",
          {
            className: "T1-InvisibleChipLabel",
            "data-testid": "InvisibleChipLabel",
            tabIndex: -1,
            children: textLabel
          }
        )
      ] })
    }
  );
};

// lib/checkbox/theme.ts
import { styled as styled6 } from "@mui/material";
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
var StyledCheckboxHelperText = styled6(FormHelperText)(({
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
import { jsx as jsx16, jsxs as jsxs5 } from "react/jsx-runtime";
function CustomIcon(props) {
  const theme = useTheme();
  const palette = useMemo2(() => _checkboxTheme(theme), [theme]);
  return /* @__PURE__ */ jsxs5(SvgIcon, { ...props, children: [
    /* @__PURE__ */ jsx16("path", { d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" }),
    /* @__PURE__ */ jsx16("rect", { width: "12", height: "12", fill: palette.svgColor, x: "6", y: "6" })
  ] });
}
var Checkbox = ({ setFocused, ...props }) => {
  return /* @__PURE__ */ jsx16(
    MuiCheckbox,
    {
      disableTouchRipple: true,
      disableFocusRipple: true,
      icon: /* @__PURE__ */ jsx16(CustomIcon, {}),
      onFocus: () => {
        setFocused?.(true);
      },
      onBlur: () => {
        setFocused?.(false);
      },
      ...omitCustomProps(props, ["className"]),
      className: `T1-checkbox ${props.className ?? ""}`
    }
  );
};

// lib/select/multiSelect.tsx
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { jsx as jsx17, jsxs as jsxs6 } from "react/jsx-runtime";
var ITEM_HEIGHT = 48;
var ITEM_PADDING_TOP = 8;
function getStyles(name, personName, theme) {
  return {
    fontWeight: personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium
  };
}
var StyledSelect2 = styled7(Select)(({ theme }) => ({
  minHeight: 48,
  height: "auto",
  minWidth: 220,
  maxWidth: "100%",
  "&.Mui-error, &:hover.Mui-error": {
    borderColor: theme.palette.multiSelect.border
  }
}));
var StyledOutlinedInput = styled7(OutlinedInput)(({ theme }) => ({
  color: theme.palette.multiSelect.color,
  padding: theme.spacing(3),
  ".MuiInputBase-input": {
    padding: 0
  },
  ".MuiSvgIcon-root": {
    marginRight: theme.spacing(2)
  },
  legend: {
    display: "none"
  }
}));
var MultiSelect = (props) => {
  const theme = useTheme2();
  const [options, setOptions] = React4.useState(props.options);
  const [optionSelected, setOptionSelected] = React4.useState(
    props.options.map((op) => op.selected ? op.id : null)
  );
  const [open, setOpen] = React4.useState(false);
  const [searchText, setSearchText] = React4.useState("");
  const [verticalAnchorOrigin, setVerticalAnchorOrigin] = React4.useState("bottom");
  const [verticalTransformOrigin, setVerticalTransformOrigin] = React4.useState("top");
  const inputRef = React4.useRef(null);
  const isAllSelected = () => optionSelected.length === options.length;
  const isOnceSelected = () => optionSelected.length > 0 && optionSelected.length < options.length;
  const cleanSelected = (selected) => setOptionSelected(selected.filter((s) => s));
  const handleChange = (event) => {
    const {
      target: { value }
    } = event;
    const newValue = typeof value === "string" ? value.split(",") : value;
    if (newValue.includes("selectAll")) {
      if (isAllSelected()) {
        setOptionSelected([]);
      } else {
        cleanSelected(options.map((option) => option.id));
      }
    } else {
      cleanSelected(newValue);
    }
  };
  const handleDelete = (valueToDelete) => () => {
    console.log(valueToDelete);
    setOptionSelected(
      (prev) => prev.filter((value) => value !== valueToDelete)
    );
  };
  const handleDeleteAll = () => {
    setOptionSelected([]);
  };
  const handleChipMouseDown = (event) => {
    event.stopPropagation();
  };
  const handleKeyDown = (event, value) => {
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      const newValue = optionSelected.includes(value) ? optionSelected.filter((id) => id !== value) : [...optionSelected, value];
      setOptionSelected(newValue);
    }
  };
  const handleOpen = (e) => {
    e.stopPropagation();
    inputRef.current = e.currentTarget;
    if (window.innerHeight - inputRef.current.getBoundingClientRect().bottom < 224) {
      setVerticalTransformOrigin("bottom");
      setVerticalAnchorOrigin("top");
    } else {
      setVerticalTransformOrigin("top");
      setVerticalAnchorOrigin("bottom");
    }
    setOpen(true);
  };
  React4.useEffect(() => {
    props.onChange(optionSelected);
  }, [optionSelected]);
  React4.useEffect(() => {
    const searchOpt = props.options.filter(
      (op) => op.value.toLowerCase().includes(searchText.toLowerCase())
    );
    setOptions(searchOpt);
  }, [searchText]);
  return /* @__PURE__ */ jsxs6(FormControl, { disabled: props.disabled, error: props.error, children: [
    /* @__PURE__ */ jsx17(InputLabel, { id: "demo-multiple-chip-label", children: "Chip" }),
    /* @__PURE__ */ jsxs6(
      StyledSelect2,
      {
        ref: inputRef,
        labelId: "demo-multiple-chip-label",
        id: "demo-multiple-chip",
        multiple: true,
        open,
        onOpen: handleOpen,
        onClose: () => setOpen(false),
        value: optionSelected,
        onChange: handleChange,
        input: /* @__PURE__ */ jsx17(OutlinedInput, { id: "select-multiple-chip", label: "Chip" }),
        renderValue: (selected) => /* @__PURE__ */ jsx17(
          Box,
          {
            sx: open ? {
              display: "inline-flex",
              flexDirection: "column",
              gap: theme.spacing(2),
              height: "auto"
            } : { gap: theme.spacing(2), display: "flex", overflow: "hidden" },
            children: props.selectAll && isAllSelected() ? /* @__PURE__ */ jsx17(
              Chip,
              {
                label: "All",
                onDelete: !props.readonly ? handleDeleteAll : null,
                onMouseDown: handleChipMouseDown,
                alt: "",
                src: "",
                deleteIcon: !props.readonly ? /* @__PURE__ */ jsx17(ClearIcon, { onMouseDown: handleChipMouseDown }) : null,
                variant: "neutral",
                withoutAvatar: true
              }
            ) : selected.map((value) => {
              const selectedOption = props.options.find(
                (option) => option.id === value
              );
              if (!selectedOption) {
                return null;
              }
              return /* @__PURE__ */ jsx17(
                Chip,
                {
                  label: selectedOption.value,
                  onDelete: !props.readonly ? handleDelete(selectedOption.id) : null,
                  onMouseDown: handleChipMouseDown,
                  alt: "",
                  src: "",
                  deleteIcon: !props.readonly ? /* @__PURE__ */ jsx17(ClearIcon, { onMouseDown: handleChipMouseDown }) : null,
                  withoutAvatar: true
                },
                value
              );
            })
          }
        ),
        MenuProps: {
          anchorEl: inputRef.current,
          transformOrigin: {
            vertical: verticalTransformOrigin,
            horizontal: "left"
          },
          anchorOrigin: {
            vertical: verticalAnchorOrigin,
            horizontal: "left"
          },
          PaperProps: {
            style: {
              maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
              width: open ? 250 : 220,
              backgroundColor: theme.palette.textField.search.background
            },
            sx: {
              ".MuiMenuItem-root": {
                gap: theme.spacing(3)
              }
            }
          },
          autoFocus: false,
          MenuListProps: {
            autoFocus: false,
            autoFocusItem: false
          }
        },
        children: [
          props.search && /* @__PURE__ */ jsx17(MenuItem, { onKeyDown: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsx17(
            StyledOutlinedInput,
            {
              id: "select-search",
              "data-testid": "select-search-field",
              label: "Search",
              value: searchText,
              onChange: (e) => setSearchText(e.target.value),
              startAdornment: /* @__PURE__ */ jsx17(SearchIcon, {})
            }
          ) }),
          props.selectAll && /* @__PURE__ */ jsxs6(
            MenuItem,
            {
              value: "selectAll",
              onClick: () => {
                if (isAllSelected()) {
                  setOptionSelected([]);
                } else {
                  setOptionSelected(options.map((option) => option.id));
                }
              },
              "data-testid": "select-all",
              onKeyDown: (e) => handleKeyDown(e, "selectAll"),
              style: getStyles("All", optionSelected, theme),
              children: [
                /* @__PURE__ */ jsx17(
                  Checkbox,
                  {
                    checked: isAllSelected(),
                    indeterminate: isOnceSelected()
                  }
                ),
                /* @__PURE__ */ jsx17(ListItemText, { primary: "All" })
              ]
            }
          ),
          options.map((option, index) => /* @__PURE__ */ jsxs6(
            MenuItem,
            {
              value: option.id,
              onKeyDown: (e) => handleKeyDown(e, option.id),
              style: getStyles(option.value, optionSelected, theme),
              "data-testid": `multiselect-option-${index}`,
              children: [
                /* @__PURE__ */ jsx17(Checkbox, { checked: optionSelected.indexOf(option.id) > -1 }),
                /* @__PURE__ */ jsx17(ListItemText, { primary: option.value })
              ]
            },
            option.id
          ))
        ]
      }
    ),
    props.error && /* @__PURE__ */ jsxs6(FormHelperText, { children: [
      /* @__PURE__ */ jsx17(WarningAmberIcon, {}),
      " This field is required"
    ] })
  ] });
};

// lib/select/theme.ts
var multiSelectTheme = {
  dark: {
    name: "multiSelect",
    styles: {
      border: COLORS.ERROR.ERROR_20,
      color: COLORS.SYSTEM.WHITE
    }
  },
  light: {
    name: "multiSelect",
    styles: {
      border: COLORS.ERROR.ERROR_40,
      color: COLORS.SYSTEM.INK
    }
  }
};
var arrowedSelectTheme = {
  dark: {
    name: "arrowedSelect",
    styles: {
      border: COLORS.SYSTEM.DARK_30,
      disabled: {
        border: COLORS.SYSTEM.DARK_30,
        background: COLORS.SYSTEM.INK
      },
      error: {
        border: COLORS.ERROR.ERROR_20
      },
      hover: {
        border: COLORS.SYSTEM.SILVER
      },
      item: {
        title: COLORS.SYSTEM.WHITE,
        background: COLORS.SYSTEM.DARK_60,
        content: COLORS.SYSTEM.SILVER,
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
    }
  },
  light: {
    name: "arrowedSelect",
    styles: {
      border: COLORS.SYSTEM.MISTY,
      disabled: {
        border: COLORS.SYSTEM.SILVER,
        background: COLORS.SYSTEM.MISTY
      },
      error: {
        border: COLORS.ERROR.ERROR_50
      },
      hover: {
        border: COLORS.SYSTEM.SLATE
      },
      item: {
        title: COLORS.SYSTEM.INK,
        background: COLORS.SYSTEM.WHITE,
        content: COLORS.SYSTEM.DARK_30,
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
  }
};
export {
  ArrowedSelect,
  MultiSelect,
  Select,
  multiSelectTheme
};
