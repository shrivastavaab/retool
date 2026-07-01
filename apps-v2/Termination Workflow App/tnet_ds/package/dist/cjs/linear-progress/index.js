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

// lib/linear-progress/index.ts
var linear_progress_exports = {};
__export(linear_progress_exports, {
  LinearProgress: () => LinearProgress,
  MuiLinearProgress: () => MuiLinearProgress
});
module.exports = __toCommonJS(linear_progress_exports);

// lib/linear-progress/theme.ts
var linearProgressTheme = (theme) => {
  switch (theme.name) {
    case "dark":
      return {
        default: theme.palette.t1.secondary.blue40,
        success: theme.palette.t1.accent.green30,
        error: theme.palette.t1.error.error30,
        brand: theme.palette.t1.primary.orange40,
        background: theme.palette.t1.system.slate
      };
    case "light":
    default:
      return {
        default: theme.palette.t1.secondary.blue60,
        success: theme.palette.t1.success.success40,
        error: theme.palette.t1.error.error40,
        brand: theme.palette.t1.primary.orange50,
        background: theme.palette.t1.system.misty
      };
  }
};
var MuiLinearProgress = {
  defaultProps: {
    variant: "indeterminate",
    color: "default"
  },
  styleOverrides: {
    root: ({ theme }) => {
      const palette = linearProgressTheme(theme);
      return {
        backgroundColor: palette.background,
        "&.T1-linearProgress": {
          "&-xs": {
            height: "4px",
            borderRadius: "2px",
            "& .MuiLinearProgress-bar": { borderRadius: "2px" }
          },
          "&-sm": {
            height: "8px",
            borderRadius: "4px",
            "& .MuiLinearProgress-bar": { borderRadius: "4px" }
          },
          "&-md": {
            height: "12px",
            borderRadius: "6px",
            "& .MuiLinearProgress-bar": { borderRadius: "6px" }
          },
          "&-lg": {
            height: "16px",
            borderRadius: "8px",
            "& .MuiLinearProgress-bar": { borderRadius: "8px" }
          },
          "&-xl": {
            height: "20px",
            borderRadius: "10px",
            "& .MuiLinearProgress-bar": { borderRadius: "10px" }
          },
          "&-xxl": {
            height: "24px",
            borderRadius: "12px",
            "& .MuiLinearProgress-bar": { borderRadius: "12px" }
          }
        }
      };
    },
    bar: ({
      theme,
      ownerState
    }) => {
      const palette = linearProgressTheme(theme);
      const colorMap = {
        default: palette.default,
        success: palette.success,
        error: palette.error,
        brand: palette.brand
      };
      return {
        backgroundColor: colorMap[ownerState.color ?? "default"] ?? palette.default
      };
    }
  }
};

// lib/linear-progress/component.tsx
var import_material = require("@mui/material");
var import_jsx_runtime = require("react/jsx-runtime");
var LinearProgress = ({
  size = "md",
  className,
  ...rest
}) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  import_material.LinearProgress,
  {
    ...rest,
    className: `T1-linearProgress-${size} ${className ?? ""}`
  }
);
