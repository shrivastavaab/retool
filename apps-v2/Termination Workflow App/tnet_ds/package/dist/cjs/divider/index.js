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

// lib/divider/index.ts
var divider_exports = {};
__export(divider_exports, {
  Divider: () => Divider,
  MuiDivider: () => MuiDivider
});
module.exports = __toCommonJS(divider_exports);

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
var import_material = require("@mui/material");
var import_jsx_runtime = require("react/jsx-runtime");
var Divider = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_material.Divider, { ...props });
