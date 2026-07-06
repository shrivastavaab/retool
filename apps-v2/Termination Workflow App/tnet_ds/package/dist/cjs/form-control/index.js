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

// lib/form-control/index.ts
var form_control_exports = {};
__export(form_control_exports, {
  FormControl: () => FormControl
});
module.exports = __toCommonJS(form_control_exports);

// lib/form-control/component.tsx
var import_material = require("@mui/material");
var import_jsx_runtime = require("react/jsx-runtime");
var FormControl = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_material.FormControl,
    {
      sx: { cursor: `${props.disabled ? "not-allowed" : "auto"}` },
      ...props,
      variant: "outlined"
    }
  );
};
