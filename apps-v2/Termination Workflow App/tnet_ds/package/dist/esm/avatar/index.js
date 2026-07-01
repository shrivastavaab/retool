// lib/avatar/component.tsx
import {
  Avatar as MuiAvatar,
  AvatarGroup as MuiAvatarGroup
} from "@mui/material";

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

// lib/avatar/component.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var Avatar = ({
  size = "medium",
  color = "orange",
  badge,
  ...props
}) => {
  return badge ? /* @__PURE__ */ jsx3(
    Badge,
    {
      badgeContent: badge.content,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right"
      },
      ...omitCustomProps(badge.props, ["anchorOrigin"]),
      children: /* @__PURE__ */ jsx3(
        MuiAvatar,
        {
          "data-testid": "avatar-badge",
          className: `${props.className ?? ""} T1-avatar-${size} T1-avatar-${color}`,
          ...omitCustomProps(props, ["className"]),
          variant: "circular"
        }
      )
    }
  ) : /* @__PURE__ */ jsx3(
    MuiAvatar,
    {
      "data-testid": "avatar-without-badge",
      className: `${props.className ?? ""} T1-avatar-${size} T1-avatar-${color}`,
      ...omitCustomProps(props, ["className"])
    }
  );
};
var AvatarGroup = ({
  color = "orange",
  size = "medium",
  spacing = "medium",
  ...props
}) => {
  return /* @__PURE__ */ jsx3(
    MuiAvatarGroup,
    {
      "data-testid": "avatar-group",
      className: `${props.className ?? ""} T1-avatarGroup-${size} T1-avatarGroup-${color} T1-avatarGroup-spacing-${spacing}`,
      ...omitCustomProps(props, ["className"])
    }
  );
};
export {
  Avatar,
  AvatarGroup
};
