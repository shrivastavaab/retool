// lib/link/component.tsx
import { Link as MuiLink } from "@mui/material";
import { jsx } from "react/jsx-runtime";
var Link = ({
  disabled = false,
  size = "large",
  className,
  children,
  onClick,
  ...rest
}) => /* @__PURE__ */ jsx(
  MuiLink,
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
export {
  Link,
  linkTheme
};
