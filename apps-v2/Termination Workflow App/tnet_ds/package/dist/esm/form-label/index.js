// lib/form-label/component.tsx
import { FormLabel as MuiFormLabel } from "@mui/material";
import { styled } from "@mui/material/styles";
import { jsx } from "react/jsx-runtime";
var StyledFormLabel = styled(MuiFormLabel)(({ theme }) => ({
  color: theme.palette.typography.color,
  fontSize: theme.typography.paragraph.md.medium.fontSize,
  fontFamily: theme.typography.paragraph.md.medium.fontFamily,
  lineHeight: theme.typography.paragraph.md.medium.lineHeight,
  paddingBottom: theme.spacing(1.5),
  "&.Mui-focused:not(.Mui-error)": {
    color: theme.palette.text.primary
  }
}));
var FormLabel = (props) => {
  const propsWithDefault = {
    ...props
  };
  return /* @__PURE__ */ jsx(StyledFormLabel, { ...propsWithDefault });
};
export {
  FormLabel
};
