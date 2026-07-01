// lib/form-control/component.tsx
import { FormControl as MuiFormControl } from "@mui/material";
import { jsx } from "react/jsx-runtime";
var FormControl = (props) => {
  return /* @__PURE__ */ jsx(
    MuiFormControl,
    {
      sx: { cursor: `${props.disabled ? "not-allowed" : "auto"}` },
      ...props,
      variant: "outlined"
    }
  );
};
export {
  FormControl
};
