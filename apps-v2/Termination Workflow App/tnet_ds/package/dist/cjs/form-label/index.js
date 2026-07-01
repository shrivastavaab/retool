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

// lib/form-label/index.ts
var form_label_exports = {};
__export(form_label_exports, {
  FormLabel: () => FormLabel
});
module.exports = __toCommonJS(form_label_exports);

// lib/form-label/component.tsx
var import_material = require("@mui/material");
var import_styles = require("@mui/material/styles");
var import_jsx_runtime = require("react/jsx-runtime");
var StyledFormLabel = (0, import_styles.styled)(import_material.FormLabel)(({ theme }) => ({
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledFormLabel, { ...propsWithDefault });
};
