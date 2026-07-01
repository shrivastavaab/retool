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

// lib/avatar/index.ts
var avatar_exports = {};
__export(avatar_exports, {
  Avatar: () => Avatar,
  AvatarGroup: () => AvatarGroup
});
module.exports = __toCommonJS(avatar_exports);

// lib/avatar/component.tsx
var import_material3 = require("@mui/material");

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

// lib/avatar/component.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var Avatar = ({
  size = "medium",
  color = "orange",
  badge,
  ...props
}) => {
  return badge ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    Badge,
    {
      badgeContent: badge.content,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right"
      },
      ...omitCustomProps(badge.props, ["anchorOrigin"]),
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        import_material3.Avatar,
        {
          "data-testid": "avatar-badge",
          className: `${props.className ?? ""} T1-avatar-${size} T1-avatar-${color}`,
          ...omitCustomProps(props, ["className"]),
          variant: "circular"
        }
      )
    }
  ) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_material3.Avatar,
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_material3.AvatarGroup,
    {
      "data-testid": "avatar-group",
      className: `${props.className ?? ""} T1-avatarGroup-${size} T1-avatarGroup-${color} T1-avatarGroup-spacing-${spacing}`,
      ...omitCustomProps(props, ["className"])
    }
  );
};
