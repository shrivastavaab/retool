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

// lib/form-helper-text/index.ts
var form_helper_text_exports = {};
__export(form_helper_text_exports, {
  FormHelperText: () => FormHelperText,
  formHelperTextTheme: () => formHelperTextTheme
});
module.exports = __toCommonJS(form_helper_text_exports);

// lib/form-helper-text/component.tsx
var import_material = require("@mui/material");
var import_icons_material = require("@mui/icons-material");
var import_jsx_runtime = require("react/jsx-runtime");
var FormHelperText = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_material.FormHelperText, { ...props, variant: "outlined", children: [
    props.error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_icons_material.WarningAmberOutlined, {}),
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
