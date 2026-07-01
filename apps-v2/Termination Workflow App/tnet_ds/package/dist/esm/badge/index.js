// lib/badge/component.tsx
import { Badge as MuiBadge } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

// lib/layout/index.ts
import { Box, Stack, Grid2 } from "@mui/material";

// lib/utils/components.tsx
import { jsx } from "react/jsx-runtime";

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
import { jsx as jsx2 } from "react/jsx-runtime";
var Badge = ({
  badgeContent,
  variant = "standard",
  slotProps,
  ...rest
}) => {
  const getBadgeContent = (variant2) => {
    switch (variant2) {
      case "add":
        return /* @__PURE__ */ jsx2(Add, {});
      case "info":
        return "i";
      case "remove":
        return /* @__PURE__ */ jsx2(Remove, {});
      default:
        return badgeContent;
    }
  };
  return /* @__PURE__ */ jsx2(
    MuiBadge,
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
export {
  Badge,
  badgeTheme
};
