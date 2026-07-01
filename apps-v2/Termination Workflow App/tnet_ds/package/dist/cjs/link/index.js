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

// lib/link/index.ts
var link_exports = {};
__export(link_exports, {
  Link: () => Link,
  linkTheme: () => linkTheme
});
module.exports = __toCommonJS(link_exports);

// lib/link/component.tsx
var import_material = require("@mui/material");
var import_jsx_runtime = require("react/jsx-runtime");
var Link = ({
  disabled = false,
  size = "large",
  className,
  children,
  onClick,
  ...rest
}) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  import_material.Link,
  {
    ...rest,
    tabIndex: disabled ? -1 : 0,
    className: `T1-link${disabled ? " T1-link-disabled" : ""} T1-link-${size}${className ? ` ${className}` : ""}`,
    onMouseDown: (e) => {
      if (disabled) {
        e.preventDefault();
      }
    },
    onClick: (e) => {
      if (disabled) {
        e.preventDefault();
        return;
      }
      if (onClick) {
        onClick(e);
      }
    },
    children
  }
);

// lib/link/theme.ts
var linkTheme = (theme) => {
  switch (theme.name) {
    case "dark":
      return {
        default: theme.palette.t1.secondary.blue40,
        hover: theme.palette.t1.secondary.blue50,
        active: theme.palette.t1.secondary.blue30,
        disabled: theme.palette.t1.system.pewter
      };
    case "light":
    default:
      return {
        default: theme.palette.t1.secondary.blue60,
        hover: theme.palette.t1.secondary.blue50,
        active: theme.palette.t1.secondary.blue70,
        disabled: theme.palette.t1.system.silver
      };
  }
};
