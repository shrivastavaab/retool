// lib/form-helper-text/component.tsx
import {
  FormHelperText as MuiFormHelperText
} from "@mui/material";
import { WarningAmberOutlined } from "@mui/icons-material";
import { jsx, jsxs } from "react/jsx-runtime";
var FormHelperText = (props) => {
  return /* @__PURE__ */ jsxs(MuiFormHelperText, { ...props, variant: "outlined", children: [
    props.error && /* @__PURE__ */ jsx(WarningAmberOutlined, {}),
    props.children
  ] });
};

// lib/form-helper-text/theme.ts
var formHelperTextTheme = (theme) => {
  switch (theme.name) {
    case "dark": {
      return {
        text: theme.palette.t1.error.error30
      };
    }
    case "light": {
      return {
        text: theme.palette.t1.error.error50
      };
    }
  }
};
export {
  FormHelperText,
  formHelperTextTheme
};
