// lib/divider/theme.ts
var dividerTheme = (theme) => {
  switch (theme.name) {
    case "dark":
      return { borderColor: theme.palette.t1.system.slate };
    case "light":
    default:
      return { borderColor: theme.palette.t1.system.silver };
  }
};
var MuiDivider = {
  styleOverrides: {
    root: ({ theme }) => dividerTheme(theme)
  }
};

// lib/divider/component.tsx
import { Divider as MuiDivider2 } from "@mui/material";
import { jsx } from "react/jsx-runtime";
var Divider = (props) => /* @__PURE__ */ jsx(MuiDivider2, { ...props });
export {
  Divider,
  MuiDivider
};
