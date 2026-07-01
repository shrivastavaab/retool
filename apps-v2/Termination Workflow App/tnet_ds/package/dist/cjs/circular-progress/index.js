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

// lib/circular-progress/index.ts
var circular_progress_exports = {};
__export(circular_progress_exports, {
  CircularProgress: () => CircularProgress,
  circularProgressTheme: () => circularProgressTheme
});
module.exports = __toCommonJS(circular_progress_exports);

// lib/circular-progress/theme.ts
var import_material = require("@mui/material");

// lib/circular-progress/constants.ts
var SIZE_MAP = {
  extraLarge: "90px",
  large: "60px",
  medium: "48px",
  small: "30px",
  extraSmall: "18px"
};
var STROKE_WIDTH = {
  extraLarge: "0.9px",
  large: "1.2px",
  medium: "1.5px",
  small: "2.4px",
  extraSmall: "4px"
};

// lib/circular-progress/theme.ts
var circularProgressTheme = (theme) => {
  switch (theme.name) {
    case "dark": {
      return {
        default: {
          background: theme.palette.t1.system.slate,
          foreground: theme.palette.t1.system.white
        },
        brand: {
          background: theme.palette.t1.primary.orange75,
          foreground: theme.palette.t1.primary.orange30
        },
        stepper: {
          background: theme.palette.t1.system.silver,
          foreground: theme.palette.t1.secondary.blue40
        }
      };
    }
    case "light": {
      return {
        default: {
          background: theme.palette.t1.secondary.blue20,
          foreground: theme.palette.t1.secondary.blue80
        },
        brand: {
          background: theme.palette.t1.primary.orange10,
          foreground: theme.palette.t1.primary.orange50
        },
        stepper: {
          background: theme.palette.t1.secondary.blue30,
          foreground: theme.palette.t1.secondary.blue60
        }
      };
    }
  }
};
var StyledCircularProgressWrapper = (0, import_material.styled)(
  "div"
)(({
  theme,
  size,
  color
}) => {
  const palette = circularProgressTheme(theme);
  return {
    position: "relative",
    width: `${SIZE_MAP[size]}`,
    height: `${SIZE_MAP[size]}`,
    stroke: `${palette[color].background}`,
    circle: {
      strokeWidth: `${STROKE_WIDTH[size]}`,
      fill: "transparent"
    },
    ".MuiCircularProgress-root": {
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      color: `${palette[color].foreground}`
    }
  };
});
var StyledStepperCircularProgressWrapper = (0, import_material.styled)("div")(({
  theme,
  color
}) => {
  const palette = circularProgressTheme(theme);
  return {
    position: "relative",
    width: "24px",
    height: "24px",
    strokeWidth: "2.5",
    stroke: palette.default.background,
    svg: {
      position: "absolute",
      left: 0
    },
    circle: {
      fill: "transparent"
    },
    "&.T1-CircularProgressWrapper-Stepper": {
      stroke: palette.stepper.background
    },
    ".T1-CircularProgress-Stepper": {
      stroke: palette.stepper.foreground
    },
    ".MuiCircularProgress-root": {
      maxWidth: "100%",
      maxHeight: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      color: palette[color].foreground
    }
  };
});

// lib/circular-progress/component.tsx
var import_material2 = require("@mui/material");
var import_jsx_runtime = require("react/jsx-runtime");
var CircularProgress = ({
  color = "default",
  size = "medium",
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    StyledCircularProgressWrapper,
    {
      size,
      color,
      className: "T1-CircularProgress-wrapper",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "svg",
          {
            className: "CircularProgress-background",
            viewBox: "22 22 44 44",
            xmlns: "http://www.w3.org/2000/svg",
            style: { maxWidth: "100%", maxHeight: "100%" },
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "44", cy: "44", r: "20.2" })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_material2.CircularProgress, { ...props, size: SIZE_MAP[size] })
      ]
    }
  );
};
