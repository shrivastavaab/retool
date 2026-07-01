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

// lib/table/index.ts
var table_exports = {};
__export(table_exports, {
  Table: () => import_material2.Table,
  TableBody: () => import_material2.TableBody,
  TableCell: () => import_material2.TableCell,
  TableContainer: () => TableContainer,
  TableFooter: () => import_material2.TableFooter,
  TableHead: () => import_material2.TableHead,
  TableRow: () => TableRow,
  TableSortLabel: () => import_material2.TableSortLabel
});
module.exports = __toCommonJS(table_exports);
var import_material2 = require("@mui/material");

// lib/table/component.tsx
var import_material = require("@mui/material");
var import_styles = require("@mui/material/styles");
var import_jsx_runtime = require("react/jsx-runtime");
var TableContainerStyled = (0, import_styles.styled)(import_material.TableContainer)(
  ({ theme }) => ({
    backgroundColor: "inherit",
    ".MuiPaper-root, .MuiTableContainer-root": {
      backgroundColor: "inherit"
    },
    ".MuiTable-root": {
      border: `1px solid ${theme.palette.table.default.border}`
    },
    ".T1-nested-table-container": {
      background: theme.palette.nestedTable.background,
      padding: theme.spacing(3)
    },
    ".T1-nested-table": {
      border: `none`
    }
  })
);
var TableContainer = (props) => {
  const { children, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableContainerStyled, { ...rest, children });
};
var TableRowStyled = (0, import_styles.styled)(import_material.TableRow)(({ theme }) => ({
  ".MuiTableCell-root": {
    "&.MuiTableCell-head": {
      verticalAlign: "top",
      backgroundColor: theme.palette.table.body,
      padding: theme.spacing(4),
      gap: theme.spacing(3),
      "&:not(:last-of-type)": {
        borderRight: `1px solid ${theme.palette.table.default.border}`
      },
      borderTop: `1px solid ${theme.palette.table.default.border}`,
      borderBottom: `none`,
      fontSize: theme.typography.paragraph.sm.medium.fontSize,
      fontFamily: theme.typography.paragraph.sm.medium.fontFamily,
      lineHeight: theme.typography.paragraph.sm.medium.lineHeight,
      color: theme.palette.typography.color,
      "&.T1-nested-table-cell-head": {
        backgroundColor: "inherit",
        borderRight: `none`,
        borderTop: `none`,
        padding: `0 ${theme.spacing(6)} ${theme.spacing(3)} 0`,
        th: {
          lineHeight: theme.spacing(4)
        },
        td: {
          border: 0
        },
        ".MuiTableCell-head": {
          border: 0
        }
      }
    },
    "&.MuiTableCell-body": {
      verticalAlign: "top",
      padding: theme.spacing(4),
      gap: theme.spacing(3),
      backgroundColor: theme.palette.table.default.body,
      color: theme.palette.typography.color,
      "&:not(:last-of-type)": {
        borderRight: `1px solid ${theme.palette.table.default.border}`
      },
      borderTop: `1px solid ${theme.palette.table.default.border}`,
      borderBottom: `none`,
      "&:focus, &.focusetTest": {
        outline: `1px dashed ${theme.palette.outline}`
      },
      "&.MuiTableCell-footer": {
        backgroundColor: theme.palette.table.default.body
      },
      "&.T1-nested-table-cell-body": {
        padding: `0 ${theme.spacing(6)} ${theme.spacing(3)} 0`,
        backgroundColor: "inherit",
        borderRight: `none`,
        borderTop: `none`
      },
      "tr:last-child": {
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
    },
    "&.T1-TableCell-Container": {
      borderTop: "none"
    }
  }
}));
var TableRow = (props) => {
  const { children, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRowStyled, { ...rest, children });
};
