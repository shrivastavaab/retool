var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// lib/chip/index.ts
var chip_exports = {};
__export(chip_exports, {
  Chip: () => Chip,
  chipTheme: () => chipTheme
});
module.exports = __toCommonJS(chip_exports);

// lib/chip/component.tsx
var import_react2 = __toESM(require("react"), 1);
var import_material4 = require("@mui/material");

// lib/avatar/component.tsx
var import_material3 = require("@mui/material");

// lib/badge/component.tsx
var import_material2 = require("@mui/material");
var import_icons_material = require("@mui/icons-material");

// lib/layout/index.ts
var import_material = require("@mui/material");

// lib/utils/components.tsx
var import_jsx_runtime = require("react/jsx-runtime");

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

// lib/badge/component.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var Badge = ({
  badgeContent,
  variant = "standard",
  slotProps,
  ...rest
}) => {
  const getBadgeContent = (variant2) => {
    switch (variant2) {
      case "add":
        return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_icons_material.Add, {});
      case "info":
        return "i";
      case "remove":
        return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_icons_material.Remove, {});
      default:
        return badgeContent;
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_material2.Badge,
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
var import_jsx_runtime3 = require("react/jsx-runtime");
var Avatar = ({
  size = "medium",
  color = "orange",
  badge,
  ...props
}) => {
  return badge ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    Badge,
    {
      badgeContent: badge.content,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right"
      },
      ...omitCustomProps(badge.props, ["anchorOrigin"]),
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        import_material3.Avatar,
        {
          "data-testid": "avatar-badge",
          className: `${props.className ?? ""} T1-avatar-${size} T1-avatar-${color}`,
          ...omitCustomProps(props, ["className"]),
          variant: "circular"
        }
      )
    }
  ) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_material3.Avatar,
    {
      "data-testid": "avatar-without-badge",
      className: `${props.className ?? ""} T1-avatar-${size} T1-avatar-${color}`,
      ...omitCustomProps(props, ["className"])
    }
  );
};

// lib/chip/component.tsx
var import_icons_material2 = require("@mui/icons-material");

// lib/cms/component.tsx
var import_react = require("react");
var import_react_intl = require("react-intl");
var import_jsx_runtime4 = require("react/jsx-runtime");
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

// lib/chip/component.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
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
  const [editing, setEditing] = (0, import_react2.useState)(false);
  const [textLabel, setTextLabel] = (0, import_react2.useState)(chipLabel);
  const [selected, setSelected] = (0, import_react2.useState)(false);
  const textRef = import_react2.default.useRef(null);
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
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    import_material4.Chip,
    {
      ...props,
      variant: chipType,
      disabled,
      "aria-label": `${variant} chip ${textLabel?.toString()}`,
      tabIndex: 0,
      avatar: !edit && !withoutAvatar ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Avatar, { alt: props.alt, src: props.src, size: "small" }) : null,
      className: `T1-chip ${editing ? "T1-chip-editing" : ""} ${edit ? "T1-chip-editable" : ""} ${getSelectedClass()} ${className}`,
      onDelete: handleDeleteClick,
      onClick: handleClick,
      "data-testid": "Chip",
      size: chipSize,
      deleteIcon: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
        edit && (editing ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          import_icons_material2.Check,
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
        ) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          import_icons_material2.ModeEditOutlineOutlined,
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
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          import_icons_material2.Close,
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
      label: !edit ? textLabel : /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          import_material4.InputBase,
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
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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

// lib/chip/theme.ts
var chipTheme = (theme) => {
  switch (theme.name) {
    case "dark": {
      return {
        editBorder: COLORS.SYSTEM.WHITE,
        bgEdit: theme.palette.t1.system.dark80,
        primary: {
          text: theme.palette.t1.system.white,
          background: theme.palette.t1.system.ink,
          hover: theme.palette.t1.system.dark80,
          icon: theme.palette.t1.system.pewter,
          border: theme.palette.t1.system.slate
        },
        neutral: {
          text: theme.palette.t1.system.white,
          background: theme.palette.t1.system.dark60,
          bgHover: theme.palette.t1.system.dark80,
          border: theme.palette.t1.system.slate,
          hover: theme.palette.t1.system.dark80,
          icon: theme.palette.t1.system.pewter
        },
        warning: {
          text: theme.palette.t1.system.white,
          border: theme.palette.t1.warning.warning50,
          background: theme.palette.t1.system.ink,
          hover: theme.palette.t1.warning.warning50,
          bgHover: theme.palette.t1.system.dark80,
          icon: theme.palette.t1.system.pewter
        },
        error: {
          text: theme.palette.t1.system.white,
          border: theme.palette.t1.error.error50,
          background: theme.palette.t1.system.ink,
          hover: theme.palette.t1.system.dark80,
          icon: theme.palette.t1.system.pewter
        },
        info: {
          text: theme.palette.t1.system.white,
          border: theme.palette.t1.system.slate,
          background: theme.palette.t1.system.dark70,
          hover: theme.palette.t1.system.dark70,
          icon: theme.palette.t1.system.pewter
        },
        pill: {
          text: theme.palette.t1.system.white,
          selectedText: theme.palette.t1.system.white,
          border: theme.palette.t1.system.dark30,
          background: theme.palette.t1.system.dark70,
          selectedBorder: theme.palette.t1.primary.orange40,
          icon: theme.palette.t1.system.silver
        }
      };
    }
    case "light": {
      return {
        editBorder: theme.palette.t1.secondary.blue60,
        bgEdit: theme.palette.t1.system.white,
        primary: {
          text: theme.palette.t1.system.ink,
          background: theme.palette.t1.secondary.blue10,
          border: theme.palette.t1.secondary.blue40,
          hover: theme.palette.t1.secondary.blue20,
          icon: theme.palette.t1.system.pewter
        },
        neutral: {
          text: theme.palette.t1.system.dark30,
          background: theme.palette.t1.system.offWhite,
          border: theme.palette.t1.system.cloudy,
          bgHover: theme.palette.t1.system.misty,
          hover: theme.palette.t1.system.cloudy,
          icon: theme.palette.t1.system.pewter
        },
        warning: {
          text: theme.palette.t1.system.slate,
          border: theme.palette.t1.warning.warning30,
          background: theme.palette.t1.system.white,
          bgHover: theme.palette.t1.warning.warning10,
          hover: theme.palette.t1.warning.warning30,
          icon: theme.palette.t1.system.pewter
        },
        error: {
          text: theme.palette.t1.system.slate,
          border: theme.palette.t1.error.error40,
          background: theme.palette.t1.system.white,
          hover: theme.palette.t1.error.error10,
          icon: theme.palette.t1.system.pewter
        },
        info: {
          text: theme.palette.t1.system.slate,
          border: "transparent",
          background: theme.palette.t1.system.offWhite,
          hover: theme.palette.t1.system.offWhite,
          icon: theme.palette.t1.system.pewter
        },
        pill: {
          text: theme.palette.t1.system.slate,
          selectedText: theme.palette.t1.system.ink,
          border: theme.palette.t1.system.misty,
          background: theme.palette.t1.system.white,
          selectedBorder: theme.palette.t1.primary.orange60,
          icon: theme.palette.t1.system.slate
        }
      };
    }
  }
};
