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

// lib/paginator/index.ts
var paginator_exports = {};
__export(paginator_exports, {
  Paginator: () => Paginator,
  paginatorTheme: () => paginatorTheme
});
module.exports = __toCommonJS(paginator_exports);

// lib/paginator/component.tsx
var import_styles2 = require("@mui/material/styles");
var import_material4 = require("@mui/material");

// lib/layout/index.ts
var import_material = require("@mui/material");

// lib/icon-button/component.tsx
var import_material2 = require("@mui/material");

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

// lib/icon-button/component.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_material2.IconButton,
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

// lib/paginator/component.tsx
var import_icons_material = require("@mui/icons-material");

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
var import_material3 = require("@mui/material");
var import_styles = require("@mui/material/styles");
var import_react = require("react");
var import_jsx_runtime3 = require("react/jsx-runtime");
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
var Typography = (0, import_react.forwardRef)(
  (props, ref) => {
    const propsWithDefault = {
      weight: "regular",
      variant: "paragraphMd",
      ...props
    };
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
var StyledTypography = (0, import_styles.styled)(import_material3.Typography)(({
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
var import_react2 = require("react");
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
    mapper[tag] = (chunks) => (0, import_react2.createElement)(tag, {}, chunks);
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

// lib/paginator/component.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var WrapperPaginator = (props) => {
  const {
    className,
    showFirstButton,
    showLastButton,
    rowsPerPage = 10,
    rowsPerPageOptions = [10, 20, 30, 50, 100],
    labelRowsPerPage: labelRowsPerPageProp = "Items per page:",
    count: countProp
  } = props;
  const getCMSContent = useGetCMSContent();
  let contentId;
  if ("contentId" in props) {
    contentId = props.contentId;
  }
  const count = parseInt(
    getCMSContent({
      contentId,
      key: `.count`,
      fallbackContent: countProp?.toString() || "0"
    })?.toString() || "0",
    10
  );
  const labelRowsPerPage = getCMSContent({
    contentId,
    key: `.label`,
    fallbackContent: labelRowsPerPageProp?.toString() || "Items per page:"
  });
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    StyledTablePagination,
    {
      slotProps: {
        select: {
          variant: "standard",
          IconComponent: import_icons_material.ExpandMore
        }
      },
      labelRowsPerPage,
      labelDisplayedRows: () => "",
      ActionsComponent: (props2) => {
        return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          TablePaginationActions,
          {
            ...props2,
            count,
            showFirstButton,
            showLastButton
          }
        );
      },
      component: "div",
      ...props,
      rowsPerPage,
      rowsPerPageOptions,
      count,
      className: `${className ?? ""} ${rowsPerPage ? "MuiTablePagination-itemsPerPage" : "MuiTablePagination-itemsPerPage-hidden"}`
    }
  );
};
var TablePaginationActions = (props) => {
  const {
    count,
    page,
    rowsPerPage,
    onPageChange,
    showFirstButton,
    showLastButton
  } = props;
  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };
  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };
  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };
  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_material.Box, { className: "MuiTablePagination-container", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      CustomPaginationLabel,
      {
        from: page * rowsPerPage + 1,
        to: Math.min(count, (page + 1) * rowsPerPage),
        count
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_material.Stack, { className: "MuiTablePagination-actions", direction: "row", children: [
      showFirstButton && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        IconButton,
        {
          disabled: page === 0,
          "data-testid": "first-page",
          onClick: handleFirstPageButtonClick,
          "aria-label": "first page",
          children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_icons_material.FirstPage, {})
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        IconButton,
        {
          disabled: page === 0,
          onClick: handleBackButtonClick,
          "aria-label": "previous page",
          "data-testid": "previous-page",
          children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_icons_material.KeyboardArrowLeft, {})
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        IconButton,
        {
          onClick: handleNextButtonClick,
          disabled: page >= Math.ceil(count / rowsPerPage) - 1,
          "aria-label": "next page",
          "data-testid": "next-page",
          children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_icons_material.KeyboardArrowRight, {})
        }
      ),
      showLastButton && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        IconButton,
        {
          onClick: handleLastPageButtonClick,
          disabled: page >= Math.ceil(count / rowsPerPage) - 1,
          "aria-label": "last page",
          "data-testid": "last-page",
          children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_icons_material.LastPage, {})
        }
      )
    ] })
  ] });
};
var CustomPaginationLabel = ({
  from,
  to,
  count
}) => {
  const countIndicationMessage = count >= 0 ? `(of ${count})` : `(of more than ${to})`;
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_material.Box, { className: "MuiTablePagination-displayedRowsContainer", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Typography, { className: "MuiTablePagination-displayedRows", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "MuiTablePagination-displayedRange", children: `${from}-${to}` }),
    countIndicationMessage
  ] }) });
};
var StyledTablePagination = (0, import_styles2.styled)(import_material4.TablePagination)(
  ({ theme }) => ({
    width: "100%",
    overflow: "visible",
    color: theme.palette.typography.color,
    ".MuiInput-underline.MuiInputBase-colorPrimary": {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(6),
      ".MuiSelect-icon": {
        right: theme.spacing(3)
      }
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "end",
      "& .MuiToolbar-root": {
        display: "flex",
        flexWrap: "wrap-reverse",
        justifyContent: "end",
        padding: 0
      },
      ".MuiTablePagination-container": {
        marginTop: theme.spacing(0.75),
        marginBottom: theme.spacing(4)
      },
      ".MuiTablePagination-selectLabel": {
        gridColumn: "1 / span 1"
      },
      ".MuiInputBase-root.MuiInput-root": {
        gridColumn: "2 / span 1",
        margin: theme.spacing(0, 2),
        justifySelf: "stretch"
      },
      ".MuiTablePagination-actions": {
        gridColumn: "1 / span 2",
        margin: "0!important",
        padding: theme.spacing(0.5),
        justifyContent: "center"
      },
      ".MuiTablePagination-displayedRows": {
        gridColumn: "1 / span 2",
        textAlign: "center",
        order: 1
      },
      "& .MuiTablePagination-displayedRowsContainer": {
        flex: 1,
        maxWidth: "85px",
        p: {
          fontSize: theme.typography.paragraph.xs.regular.fontSize,
          fontFamily: theme.typography.paragraph.xs.regular.fontFamily,
          lineHeight: theme.typography.paragraph.xs.regular.lineHeight
        }
      },
      ".MuiInput-underline.MuiInputBase-colorPrimary": {
        marginRight: theme.spacing(0),
        marginLeft: theme.spacing(4)
      }
    },
    ".MuiTablePagination-selectLabel, .MuiTablePagination-displayedRows ": {
      fontSize: theme.typography.paragraph.xs.regular.fontSize,
      fontFamily: theme.typography.paragraph.xs.regular.fontFamily,
      lineHeight: theme.typography.paragraph.xs.regular.lineHeight
    },
    "& .Mui-focused > .MuiSelect-icon": {
      color: `${theme.palette.primary.main}`
    },
    "& .MuiSelect-icon": {
      fontSize: "1.5rem",
      color: theme.palette.paginator.dropdownColor
    },
    ".MuiTablePagination-actions": {
      gap: theme.spacing(2),
      ".MuiButtonBase-root": {
        backgroundColor: theme.palette.paginator.actionBackground,
        borderRadius: "4px",
        svg: {
          color: theme.palette.paginator.actionColor
        },
        "&.Mui-disabled": {
          backgroundColor: theme.palette.paginator.actionBackgroundDisabled,
          opacity: 1,
          svg: {
            color: theme.palette.paginator.actionColorDisabled
          }
        }
      }
    },
    ".MuiInputBase-input.MuiInput-input": {
      textAlign: "left",
      textAlignLast: "left",
      "&:focus": {
        backgroundColor: "transparent"
      },
      "&:focus-visible": {
        outline: `dashed 1px ${theme.palette.checkbox.outlineFocus}`,
        borderRadius: "2px"
      }
    },
    ".MuiInputBase-root.Mui-focused:after": {
      transform: "scaleX(0) translateX(0)"
    },
    ".MuiSelect-select.MuiInputBase-input.MuiInput-input": {
      paddingRight: theme.spacing(11.25),
      paddingLeft: theme.spacing(4.25),
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      fontSize: theme.typography.paragraph.sm.regular.fontSize,
      fontFamily: theme.typography.paragraph.sm.regular.fontFamily,
      lineHeight: theme.typography.paragraph.sm.regular.lineHeight,
      border: `1px solid ${theme.palette.paginator.borderColor}`,
      borderRadius: "4px"
    },
    ".MuiInputBase-root.MuiInput-root.MuiInput-underline:before": {
      borderBottom: 0
    },
    ".MuiTablePagination-displayedRowsContainer": {
      width: "max-content",
      ".MuiTablePagination-displayedRange": {
        fontFamily: theme.typography.paragraph.sm.bold.fontFamily
      }
    },
    "&.MuiTablePagination-itemsPerPage-hidden": {
      ".MuiInputBase-root.MuiInput-root.MuiInput-underline": {
        display: "none"
      },
      ".MuiTablePagination-selectLabel": {
        display: "none"
      }
    },
    ".MuiTablePagination-container": {
      display: "flex",
      alignItems: "center",
      justifyContent: "end",
      height: "36px",
      gap: theme.spacing(3),
      ".MuiTablePagination-actions": {
        margin: 0
      }
    },
    "&.MuiTablePagination-root": {
      display: "flex",
      justifyContent: "center"
    }
  })
);
var Paginator = WrapperPaginator;

// lib/paginator/theme.ts
var paginatorTheme = {
  dark: {
    name: "paginator",
    styles: {
      borderColor: COLORS.SYSTEM.DARK_30,
      actionBackground: COLORS.SYSTEM.INK,
      actionColor: COLORS.SYSTEM.WHITE,
      actionBackgroundDisabled: COLORS.SYSTEM.DARK_60,
      actionColorDisabled: COLORS.SYSTEM.PEWTER,
      dropdownColor: COLORS.SYSTEM.SILVER
    }
  },
  light: {
    name: "paginator",
    styles: {
      borderColor: COLORS.SYSTEM.SILVER,
      actionBackground: COLORS.SYSTEM.MISTY,
      actionColor: COLORS.SYSTEM.INK,
      actionBackgroundDisabled: COLORS.SYSTEM.MISTY,
      actionColorDisabled: COLORS.SYSTEM.SILVER,
      dropdownColor: COLORS.SYSTEM.PEWTER
    }
  }
};
