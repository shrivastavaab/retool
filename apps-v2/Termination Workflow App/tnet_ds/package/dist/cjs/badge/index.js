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

// lib/badge/index.ts
var badge_exports = {};
__export(badge_exports, {
  Badge: () => Badge,
  badgeTheme: () => badgeTheme
});
module.exports = __toCommonJS(badge_exports);

// lib/badge/component.tsx
var import_material2 = require("@mui/material");
var import_icons_material = require("@mui/icons-material");

// lib/layout/index.ts
var import_material = require("@mui/material");

// lib/utils/components.tsx
var import_jsx_runtime = require("react/jsx-runtime");

// lib/utils/index.ts
var omitCustomProps = (obj = {}, keys) => {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    if (!keys.includes(key)) {
      result[key] = value;
    }
  }
  return result;
};

// lib/badge/component.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var Badge = ({
  badgeContent,
  variant = "standard",
  slotProps,
  ...rest
}) => {
  const getBadgeContent = (variant2) => {
    switch (variant2) {
      case "add":
        return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_icons_material.Add, {});
      case "info":
        return "i";
      case "remove":
        return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_icons_material.Remove, {});
      default:
        return badgeContent;
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_material2.Badge,
    {
      anchorOrigin: {
        vertical: "top",
        horizontal: "right"
      },
      variant,
      badgeContent: getBadgeContent(variant),
      "aria-label": `badge ${variant}`,
      tabIndex: 0,
      ...rest,
      slotProps: {
        badge: {
          className: `T1-badge-${variant}`,
          ...slotProps?.badge
        },
        ...omitCustomProps(slotProps, ["badge"])
      }
    }
  );
};

// lib/badge/theme.ts
var badgeTheme = (theme) => {
  switch (theme.name) {
    case "dark": {
      return {
        bgColor: theme.palette.t1.primary.orange40,
        hoverBgColor: theme.palette.t1.primary.orange45,
        textColor: theme.palette.t1.system.white,
        variant: {
          color: theme.palette.t1.system.dark80,
          add: {
            bgColor: theme.palette.t1.accent.green30,
            hoverBgColor: theme.palette.t1.accent.green20
          },
          info: {
            bgColor: theme.palette.t1.info.info20,
            hoverBgColor: theme.palette.t1.secondary.blue30
          },
          remove: {
            bgColor: theme.palette.t1.error.error30,
            hoverBgColor: theme.palette.t1.error.error20
          },
          legend: {
            bgColor: theme.palette.t1.system.cloudy,
            contentColor: theme.palette.t1.system.ink
          },
          icon: {
            bgColor: theme.palette.t1.system.ink,
            borderColor: theme.palette.t1.system.dark30,
            contentColor: theme.palette.t1.system.white,
            outlineColor: theme.palette.t1.system.ink
          },
          online: {
            bgColor: theme.palette.t1.success.success40,
            bgColorHover: theme.palette.t1.primary.orange40,
            border: theme.palette.t1.system.ink
          }
        }
      };
    }
    case "light":
    default: {
      return {
        bgColor: theme.palette.t1.primary.orange60,
        hoverBgColor: theme.palette.t1.primary.orange50,
        textColor: theme.palette.t1.system.white,
        variant: {
          color: theme.palette.t1.system.white,
          add: {
            bgColor: theme.palette.t1.success.success40,
            hoverBgColor: theme.palette.t1.success.success50
          },
          info: {
            bgColor: theme.palette.t1.info.info30,
            hoverBgColor: theme.palette.t1.info.info40
          },
          remove: {
            bgColor: theme.palette.t1.error.error40,
            hoverBgColor: theme.palette.t1.error.error50
          },
          legend: {
            bgColor: theme.palette.t1.secondary.blue80,
            contentColor: theme.palette.t1.system.white
          },
          icon: {
            bgColor: theme.palette.t1.system.white,
            borderColor: theme.palette.t1.system.cloudy,
            contentColor: theme.palette.t1.system.black,
            outlineColor: theme.palette.t1.system.white
          },
          online: {
            bgColor: theme.palette.t1.success.success40,
            bgColorHover: theme.palette.t1.primary.orange60,
            border: theme.palette.t1.system.white
          }
        }
      };
    }
  }
};
