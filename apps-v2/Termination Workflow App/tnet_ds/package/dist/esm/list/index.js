// lib/list/component.tsx
import React from "react";
import {
  List as MuiList,
  ListItem as MuiListItem,
  ListItemIcon as MuiListItemIcon,
  ListItemText as MuiListItemText
} from "@mui/material";
import { jsx } from "react/jsx-runtime";
var List = React.forwardRef(
  ({ children, ...rest }, ref) => {
    return /* @__PURE__ */ jsx(MuiList, { ...rest, ref, children });
  }
);
var ListItem = React.forwardRef(
  ({
    children,
    className,
    variant = "primary",
    highlight,
    ...rest
  }, ref) => {
    return /* @__PURE__ */ jsx(
      MuiListItem,
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
var ListItemText = React.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsx(MuiListItemText, { ...props, ref });
  }
);
var ListItemIcon = React.forwardRef(
  ({ children, ...rest }, ref) => {
    return /* @__PURE__ */ jsx(MuiListItemIcon, { ...rest, ref, children });
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
export {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  listTheme
};
