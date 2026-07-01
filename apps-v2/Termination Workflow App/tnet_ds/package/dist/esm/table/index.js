// lib/table/index.ts
import {
  Table,
  TableHead,
  TableBody,
  TableFooter,
  TableSortLabel,
  TableCell
} from "@mui/material";

// lib/table/component.tsx
import {
  TableContainer as TableContainerMui,
  TableRow as MuiTableRow
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { jsx } from "react/jsx-runtime";
var TableContainerStyled = styled(TableContainerMui)(
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
  return /* @__PURE__ */ jsx(TableContainerStyled, { ...rest, children });
};
var TableRowStyled = styled(MuiTableRow)(({ theme }) => ({
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
  return /* @__PURE__ */ jsx(TableRowStyled, { ...rest, children });
};
export {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  TableSortLabel
};
