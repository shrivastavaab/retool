var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// lib/list/index.ts
var list_exports = {};
__export(list_exports, {
  List: () => List,
  ListItem: () => ListItem,
  ListItemIcon: () => ListItemIcon,
  ListItemText: () => ListItemText,
  listTheme: () => listTheme
});
module.exports = __toCommonJS(list_exports);

// lib/list/component.tsx
var import_react = __toESM(require("react"), 1);
var import_material = require("@mui/material");
var import_jsx_runtime = require("react/jsx-runtime");
var List = import_react.default.forwardRef(
  ({ children, ...rest }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_material.List, { ...rest, ref, children });
  }
);
var ListItem = import_react.default.forwardRef(
  ({
    children,
    className,
    variant = "primary",
    highlight,
    ...rest
  }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_material.ListItem,
      {
        divider: true,
        ...rest,
        alignItems: "flex-start",
        className: `T1-listItem-${variant} ${highlight ? "T1-listItem-highlight" : ""} ${className ?? ""}`,
        ref,
        tabIndex: 0,
        onKeyDown: (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            e.currentTarget.click();
          }
        },
        children
      }
    );
  }
);
var ListItemText = import_react.default.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_material.ListItemText, { ...props, ref });
  }
);
var ListItemIcon = import_react.default.forwardRef(
  ({ children, ...rest }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_material.ListItemIcon, { ...rest, ref, children });
  }
);

// lib/list/theme.ts
var listTheme = (theme) => {
  switch (theme.name) {
    case "dark":
      return {
        text: theme.palette.t1.system.white,
        secondaryText: theme.palette.t1.system.silver,
        divider: theme.palette.t1.system.slate,
        background: theme.palette.t1.system.ink,
        primary: {
          icon: theme.palette.t1.primary.orange40,
          iconBackground: theme.palette.t1.primary.orange80
        },
        secondary: {
          icon: theme.palette.t1.secondary.blue40,
          iconBackground: theme.palette.t1.system.slate
        },
        hover: {
          background: theme.palette.t1.system.slate,
          iconBackground: theme.palette.t1.system.slate
        },
        active: {
          background: theme.palette.t1.system.dark80
        },
        focused: {
          background: theme.palette.t1.system.slate,
          iconBackground: theme.palette.t1.system.slate
        },
        disabled: {
          background: theme.palette.t1.system.dark60
        }
      };
    case "light":
    default:
      return {
        text: theme.palette.t1.system.ink,
        secondaryText: theme.palette.t1.system.dark30,
        divider: theme.palette.t1.system.cloudy,
        background: theme.palette.t1.system.white,
        primary: {
          icon: theme.palette.t1.primary.orange50,
          iconBackground: theme.palette.t1.primary.orange10
        },
        secondary: {
          icon: theme.palette.t1.secondary.blue60,
          iconBackground: theme.palette.t1.secondary.blue10
        },
        hover: {
          background: theme.palette.t1.secondary.blue10,
          iconBackground: theme.palette.t1.secondary.blue10
        },
        active: {
          background: theme.palette.t1.secondary.blue20
        },
        focused: {
          background: theme.palette.t1.secondary.blue20,
          iconBackground: theme.palette.t1.secondary.blue20
        },
        disabled: {
          background: theme.palette.t1.system.offWhite
        }
      };
  }
};
