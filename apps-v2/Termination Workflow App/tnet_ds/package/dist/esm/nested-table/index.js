// lib/nested-table/index.ts
import { Table, TableRow } from "@mui/material";

// lib/nested-table/component.tsx
import {
  Table as TableMui,
  TableRow as NestedTableRow,
  TableContainer as TableContainerMui,
  TableHead as TableHeadMui,
  TableBody as TableBodyMui,
  TableCell as TableCellMui
} from "@mui/material";
import { styled as styled2 } from "@mui/material/styles";

// lib/divider/component.tsx
import { Divider as MuiDivider } from "@mui/material";
import { jsx } from "react/jsx-runtime";
var Divider = (props) => /* @__PURE__ */ jsx(MuiDivider, { ...props });

// lib/layout/index.ts
import { Box, Stack, Grid2 } from "@mui/material";

// lib/utils/components.tsx
import { jsx as jsx2 } from "react/jsx-runtime";

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

// lib/nested-table/component.tsx
import { Fragment, jsx as jsx4, jsxs } from "react/jsx-runtime";
var NestedTableContainer = (props) => {
  const StyledTableContainer = styled2(TableContainerMui)(
    ({ theme }) => ({
      background: theme.palette.nestedTable.background,
      padding: theme.spacing(3),
      boxSizing: "border-box"
    })
  );
  const StyledTableDivider = styled2(Divider)(({ theme }) => ({
    borderStyle: "dashed",
    borderColor: theme.palette.nestedTable.border,
    marginBottom: theme.spacing(2.5)
  }));
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx4(StyledTableDivider, {}),
    /* @__PURE__ */ jsx4(StyledTableContainer, { ...props, className: "T1-nested-table-container", children: props.children })
  ] });
};
var NestedTable = (props) => {
  return /* @__PURE__ */ jsx4(TableMui, { ...props, className: "T1-nested-table", children: props.children });
};
var NestedTableHead = (props) => {
  const StyledTableHead = styled2(TableHeadMui)(
    ({ theme }) => ({
      th: {
        lineHeight: theme.spacing(4),
        padding: `0 ${theme.spacing(6)} ${theme.spacing(3)} 0`
      },
      td: {
        border: 0,
        padding: `0 ${theme.spacing(6)} ${theme.spacing(3)} 0`
      },
      ".MuiTableCell-head": {
        border: 0
      }
    })
  );
  return /* @__PURE__ */ jsx4(StyledTableHead, { ...props, className: "T1-nested-table-head", children: props.children });
};
var NestedTableBody = (props) => {
  const propsWithDefault = {
    divider: false,
    ...props
  };
  const StyledTableBody = styled2(TableBodyMui)(
    ({ theme }) => ({
      th: {
        border: 0,
        padding: `0 ${theme.spacing(6)} ${theme.spacing(3)} 0`
      },
      td: {
        border: 0,
        padding: `0 ${theme.spacing(6)} ${theme.spacing(3)} 0`
      },
      "tr:last-child": {
        borderTop: propsWithDefault.divider ? `1px dashed ${theme.palette.nestedTable.border}` : "",
        th: {
          border: 0,
          padding: `${theme.spacing(2.5)} ${theme.spacing(6)} ${theme.spacing(
            3
          )} 0`
        },
        td: {
          border: 0,
          padding: `${theme.spacing(2.5)} ${theme.spacing(6)} ${theme.spacing(
            3
          )} 0`
        }
      }
    })
  );
  return /* @__PURE__ */ jsx4(StyledTableBody, { ...omitCustomProps(propsWithDefault, ["divider"]), children: props.children });
};
var NestedTableCellHead = (props) => {
  return /* @__PURE__ */ jsx4(
    TableCellMui,
    {
      ...props,
      className: "T1-nested-table-cell-head",
      "aria-label": props.children?.toString(),
      children: /* @__PURE__ */ jsx4(
        Typography,
        {
          variant: "paragraphXs",
          weight: "medium",
          display: "block",
          fontWeight: 500,
          children: props.children
        }
      )
    }
  );
};
var NestedTableCellBody = (props) => {
  return /* @__PURE__ */ jsx4(
    TableCellMui,
    {
      ...props,
      className: "T1-nested-table-cell-body",
      "aria-label": props.children?.toString(),
      children: /* @__PURE__ */ jsx4(Typography, { variant: "paragraphSm", weight: "regular", display: "block", children: props.children })
    }
  );
};

// lib/nested-table/theme.ts
var nestedTableTheme = {
  dark: {
    name: "nestedTable",
    styles: {
      text: COLORS.SYSTEM.WHITE,
      background: COLORS.SYSTEM.DARK_70,
      border: COLORS.SYSTEM.DARK_30
    }
  },
  light: {
    name: "nestedTable",
    styles: {
      text: COLORS.SYSTEM.INK,
      background: COLORS.SYSTEM.OFF_WHITE,
      border: COLORS.SYSTEM.CLOUDY
    }
  }
};
export {
  NestedTable,
  NestedTableBody,
  NestedTableCellBody,
  NestedTableCellHead,
  NestedTableContainer,
  NestedTableHead,
  NestedTableRow,
  Table,
  TableRow,
  nestedTableTheme
};
