var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// lib/text-field/index.ts
var text_field_exports = {};
__export(text_field_exports, {
  StyledOutlinedInput: () => StyledOutlinedInput,
  TextField: () => TextField,
  textFieldTheme: () => textFieldTheme
});
module.exports = __toCommonJS(text_field_exports);

// lib/text-field/component.tsx
var import_react2 = require("react");
var import_styles = require("@mui/material/styles");
var import_material3 = require("@mui/material");

// lib/cms/component.tsx
var import_react = require("react");
var import_react_intl = require("react-intl");
var import_jsx_runtime = require("react/jsx-runtime");
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
    mapper[tag] = (chunks) => (0, import_react.createElement)(tag, {}, chunks);
  });
  return mapper;
};
var htmlTagsMapper = createHTMLTagsMapper();
var useGetCMSContent = () => {
  const intl = (0, import_react_intl.useIntl)();
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

// lib/input-label/component.tsx
var import_material = require("@mui/material");
var import_jsx_runtime2 = require("react/jsx-runtime");
var InputLabel = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_material.InputLabel, { ...props });
};

// lib/form-helper-text/component.tsx
var import_material2 = require("@mui/material");
var import_icons_material = require("@mui/icons-material");
var import_jsx_runtime3 = require("react/jsx-runtime");
var FormHelperText = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_material2.FormHelperText, { ...props, variant: "outlined", children: [
    props.error && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_icons_material.WarningAmberOutlined, {}),
    props.children
  ] });
};

// lib/text-field/component.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var TextField = (0, import_react2.forwardRef)(
  ({ contentId, slotProps, ...rest }, ref) => {
    const getCMSContent = useGetCMSContent();
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      import_material3.TextField,
      {
        ref,
        ...rest,
        slots: {
          input: StyledOutlinedInput,
          inputLabel: InputLabel,
          formHelperText: FormHelperText
        },
        slotProps: {
          inputLabel: {
            children: contentId ? getCMSContent({
              contentId,
              key: ".label",
              fallbackContent: rest.label
            }) : rest.label
          },
          ...slotProps
        }
      }
    );
  }
);
var getOutlinedInputStyles = ({ theme }) => ({
  alignItems: "center",
  outline: "none",
  padding: 0,
  height: "3rem",
  color: theme.palette.textField.text,
  fontFamily: theme.typography.paragraph.md.regular.fontFamily,
  fontSize: theme.typography.paragraph.md.regular.fontSize,
  lineHeight: theme.typography.paragraph.md.regular.lineHeight,
  ".MuiOutlinedInput-input, .MuiPickersSectionList-root": {
    padding: `${theme.spacing(3)}`
  },
  ".MuiIconButton-edgeEnd": {
    marginRight: theme.spacing(1)
  },
  ".MuiIconButton-root": {
    ".MuiSvgIcon-root": {
      fill: "#242936"
    }
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
  "&:hover, &.T1-hover": {
    ".MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.textField.hover.border
    },
    ".MuiIconButton-edgeEnd": {
      color: theme.palette.textField.hover.border
    }
  },
  ".MuiIconButton-edgeEnd:focus-visible": {
    borderRadius: "2px",
    outline: `dashed 1px ${theme.palette.checkbox.outlineFocus}`
  },
  ".MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.textField.border
  },
  "&.Mui-error, &:hover.Mui-error": {
    ".MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.textField.error.border,
      color: theme.palette.textField.text
    }
  },
  "&.Mui-disabled": {
    background: theme.palette.textField.disabled.background,
    opacity: 1,
    ".MuiOutlinedInput-input, .MuiPickersSectionList-root": {
      "-webkit-text-fill-color": `${theme.palette.textField.disabled.text}`
    },
    ".MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.textField.disabled.border
    }
  },
  "&.Mui-focused, &.T1-focused": {
    fieldset: {
      "&.MuiOutlinedInput-notchedOutline": {
        border: `1px solid ${theme.palette.textField.focus.border}`
      }
    },
    ".MuiIconButton-edgeEnd": {
      color: theme.palette.textField.focus.border
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
  /* Text Area styles */
  "&.MuiInputBase-multiline": {
    height: "auto"
  },
  input: {
    "&::-ms-reveal, &::-ms-clear": {
      display: "none"
    }
  }
});
var StyledOutlinedInput = (0, import_styles.styled)(import_material3.OutlinedInput)(
  getOutlinedInputStyles
);

// lib/layout/index.ts
var import_material4 = require("@mui/material");

// lib/utils/components.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");

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

// lib/text-field/theme.ts
var textFieldTheme = {
  dark: {
    name: "textField",
    styles: {
      text: COLORS.SYSTEM.WHITE,
      border: COLORS.SYSTEM.DARK_30,
      background: COLORS.SYSTEM.INK,
      icon: COLORS.SYSTEM.SILVER,
      label: {
        text: COLORS.SYSTEM.SILVER
      },
      disabled: {
        text: COLORS.SYSTEM.PEWTER,
        border: COLORS.SYSTEM.PEWTER,
        background: COLORS.SYSTEM.DARK_70
      },
      error: {
        text: COLORS.ERROR.ERROR_30,
        border: COLORS.ERROR.ERROR_30
      },
      hover: {
        border: COLORS.SYSTEM.SILVER
      },
      focus: {
        border: COLORS.SECONDARY.BLUE_40
      },
      search: {
        background: COLORS.SYSTEM.DARK_80,
        placeholder: COLORS.SYSTEM.SILVER
      }
    }
  },
  light: {
    name: "textField",
    styles: {
      text: COLORS.SYSTEM.INK,
      border: COLORS.SYSTEM.SILVER,
      background: COLORS.SYSTEM.OFF_WHITE,
      icon: COLORS.SYSTEM.PEWTER,
      label: {
        text: COLORS.SYSTEM.DARK_30
      },
      disabled: {
        text: COLORS.SYSTEM.SILVER,
        border: COLORS.SYSTEM.CLOUDY,
        background: COLORS.TRANSPARENT
      },
      error: {
        text: COLORS.ERROR.ERROR_50,
        border: COLORS.ERROR.ERROR_40
      },
      hover: {
        border: COLORS.SYSTEM.SLATE
      },
      focus: {
        border: COLORS.SECONDARY.BLUE_60
      },
      search: {
        background: COLORS.SYSTEM.OFF_WHITE,
        placeholder: COLORS.SYSTEM.PEWTER
      }
    }
  }
};
