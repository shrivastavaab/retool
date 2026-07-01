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

// lib/icon-button/index.ts
var icon_button_exports = {};
__export(icon_button_exports, {
  IconButton: () => IconButton,
  MuiIconButton: () => MuiIconButton2,
  iconButtonTheme: () => iconButtonTheme
});
module.exports = __toCommonJS(icon_button_exports);

// lib/icon-button/component.tsx
var import_material2 = require("@mui/material");

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

// lib/icon-button/component.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var IconButton = (props) => {
  const propsWithDefault = {
    variant: "transparent",
    shape: "circle",
    ...props
  };
  const {
    variant = "transparent",
    shape = "circle",
    children,
    className,
    ...rest
  } = propsWithDefault;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_material2.IconButton,
    {
      className: `T1-icon-button MuiIconButton-${variant} MuiIconButton-${shape} ${className}`,
      ...omitCustomProps(rest, ["disableRipple", "disableFocusRipple"]),
      sx: props.sx,
      disableRipple: true,
      disableFocusRipple: true,
      children
    }
  );
};

// lib/icon-button/theme.ts
var iconButtonTheme = (theme) => {
  switch (theme.name) {
    case "dark": {
      return {
        primary: {
          default: {
            body: theme.palette.t1.primary.orange40,
            text: theme.palette.t1.primary.orange80
          },
          hover: {
            body: theme.palette.t1.primary.orange45
          },
          focus: {
            body: theme.palette.t1.primary.orange30,
            outline: `dashed 1px ${theme.palette.outline}`
          },
          active: {
            body: theme.palette.t1.primary.orange30
          },
          disabled: {
            body: theme.palette.t1.primary.orange75
          }
        },
        secondary: {
          default: {
            body: theme.palette.t1.transparent,
            border: theme.palette.t1.primary.orange40,
            text: theme.palette.t1.primary.orange40
          },
          hover: {
            body: theme.palette.t1.transparent,
            border: theme.palette.t1.primary.orange45,
            text: theme.palette.t1.primary.orange45
          },
          focus: {
            body: theme.palette.t1.transparent,
            outline: `dashed 1px ${theme.palette.outline}`,
            border: theme.palette.t1.primary.orange30
          },
          active: {
            body: theme.palette.t1.transparent,
            border: theme.palette.t1.primary.orange30,
            text: theme.palette.t1.primary.orange30
          },
          disabled: {
            border: theme.palette.t1.primary.orange75,
            text: theme.palette.t1.primary.orange75
          }
        },
        tertiary: {
          default: {
            body: theme.palette.t1.system.ink,
            outline: `1px solid ${theme.palette.t1.system.slate}`,
            text: theme.palette.t1.system.white
          },
          hover: {
            body: theme.palette.t1.system.slate,
            outline: `1px solid ${theme.palette.t1.system.slate}`
          },
          focus: {
            body: theme.palette.t1.system.dark60,
            outline: `1px dashed ${theme.palette.outline}`
          },
          active: {
            body: theme.palette.t1.system.dark60,
            outline: `1px solid ${theme.palette.t1.system.slate}`
          },
          disabled: {
            outline: `1px solid ${theme.palette.t1.system.slate}`,
            text: theme.palette.t1.system.pewter
          }
        },
        transparent: {
          default: {
            body: theme.palette.t1.transparent,
            text: theme.palette.t1.secondary.blue40
          },
          hover: {
            body: theme.palette.t1.transparent,
            border: theme.palette.t1.system.slate,
            text: theme.palette.t1.secondary.blue50
          },
          focus: {
            body: theme.palette.t1.transparent,
            outline: `dashed 1px ${theme.palette.outline}`,
            text: theme.palette.t1.secondary.blue60
          },
          active: {
            body: theme.palette.t1.transparent,
            text: theme.palette.t1.secondary.blue30
          },
          disabled: {
            text: theme.palette.t1.system.pewter
          }
        },
        transparentReverse: {
          default: {
            body: theme.palette.t1.transparent,
            text: theme.palette.t1.secondary.blue60
          },
          hover: {
            body: theme.palette.t1.secondary.blue10,
            text: theme.palette.t1.secondary.blue50
          },
          focus: {
            outline: `dashed 1px ${theme.palette.outline}`,
            text: theme.palette.t1.secondary.blue70
          },
          active: {
            text: theme.palette.t1.secondary.blue70
          },
          disabled: {
            text: theme.palette.t1.system.silver
          }
        },
        contrast: {
          default: {
            body: theme.palette.t1.system.white,
            text: theme.palette.t1.system.ink
          },
          hover: {
            body: theme.palette.t1.system.cloudy
          },
          focus: {
            body: theme.palette.t1.system.misty,
            outline: `dashed 1px ${theme.palette.outline}`
          },
          active: {
            body: theme.palette.t1.system.misty
          },
          disabled: {
            body: theme.palette.t1.system.dark30,
            text: theme.palette.t1.system.ink
          }
        },
        contrastOutline: {
          default: {
            body: theme.palette.t1.system.dark70,
            border: theme.palette.t1.system.white,
            text: theme.palette.t1.system.white
          },
          hover: {
            body: theme.palette.t1.system.dark70,
            border: theme.palette.t1.system.cloudy,
            text: theme.palette.t1.system.cloudy
          },
          focus: {
            body: theme.palette.t1.system.dark70,
            outline: `dashed 1px ${theme.palette.outline}`,
            border: theme.palette.t1.system.misty,
            text: theme.palette.t1.system.misty
          },
          active: {
            body: theme.palette.t1.system.dark70,
            border: theme.palette.t1.system.misty,
            text: theme.palette.t1.system.misty
          },
          disabled: {
            border: theme.palette.t1.system.dark30,
            text: theme.palette.t1.system.dark30
          }
        },
        elevated: {
          default: {
            body: theme.palette.t1.system.ink,
            text: theme.palette.t1.system.white
          },
          hover: {
            body: theme.palette.t1.system.slate,
            text: theme.palette.t1.system.white
          },
          focus: {
            body: theme.palette.t1.system.ink,
            outline: `dashed 1px ${theme.palette.outline}`,
            text: theme.palette.t1.system.white
          },
          active: {
            text: theme.palette.t1.system.white
          },
          disabled: {
            text: theme.palette.t1.system.pewter
          }
        },
        header: {
          default: {
            body: theme.palette.t1.transparent,
            text: theme.palette.t1.system.cloudy
          },
          hover: {
            body: theme.palette.t1.system.dark70
          },
          focus: {
            body: theme.palette.t1.system.dark70,
            outline: `dashed 1px ${theme.palette.outline}`
          },
          active: {
            body: theme.palette.t1.system.dark70
          },
          disabled: {
            body: theme.palette.t1.system.dark60,
            text: theme.palette.t1.system.pewter
          }
        },
        input: {
          default: {
            body: theme.palette.t1.transparent,
            text: theme.palette.t1.system.white
          },
          hover: {
            body: theme.palette.t1.system.dark70
          },
          focus: {
            body: theme.palette.t1.system.dark70,
            outline: `dashed 1px ${theme.palette.outline}`
          },
          active: {
            body: theme.palette.t1.system.dark70
          },
          disabled: {
            body: theme.palette.t1.system.dark60,
            text: theme.palette.t1.system.pewter
          }
        }
      };
    }
    case "light":
    default: {
      return {
        primary: {
          default: {
            body: theme.palette.t1.primary.orange60,
            text: theme.palette.t1.system.white
          },
          hover: {
            body: theme.palette.t1.primary.orange50
          },
          focus: {
            body: theme.palette.t1.primary.orange70,
            outline: `dashed 1px ${theme.palette.outline}`
          },
          active: {
            body: theme.palette.t1.primary.orange70
          },
          disabled: {
            body: theme.palette.t1.primary.orange20
          }
        },
        secondary: {
          default: {
            body: theme.palette.t1.system.white,
            border: theme.palette.t1.primary.orange60,
            text: theme.palette.t1.primary.orange60
          },
          hover: {
            body: theme.palette.t1.system.white,
            border: theme.palette.t1.primary.orange50,
            text: theme.palette.t1.primary.orange50
          },
          focus: {
            body: theme.palette.t1.system.white,
            outline: `dashed 1px ${theme.palette.outline}`,
            border: theme.palette.t1.primary.orange70
          },
          active: {
            body: theme.palette.t1.system.white,
            border: theme.palette.t1.primary.orange70,
            text: theme.palette.t1.primary.orange70
          },
          disabled: {
            border: theme.palette.t1.primary.orange20,
            text: theme.palette.t1.primary.orange20
          }
        },
        tertiary: {
          default: {
            body: theme.palette.t1.system.misty,
            outline: `1px solid ${theme.palette.t1.transparent}`,
            text: theme.palette.t1.system.ink
          },
          hover: {
            body: theme.palette.t1.system.cloudy,
            outline: `1px solid ${theme.palette.t1.transparent}`
          },
          focus: {
            body: theme.palette.t1.system.offWhite,
            outline: `1px dashed ${theme.palette.outline}`
          },
          active: {
            body: theme.palette.t1.system.offWhite,
            outline: `1px solid ${theme.palette.t1.transparent}`
          },
          disabled: {
            outline: `1px solid ${theme.palette.t1.transparent}`,
            text: theme.palette.t1.system.silver
          }
        },
        transparent: {
          default: {
            body: theme.palette.t1.transparent,
            text: theme.palette.t1.secondary.blue60
          },
          hover: {
            body: theme.palette.t1.secondary.blue10,
            border: theme.palette.t1.transparent,
            text: theme.palette.t1.secondary.blue50
          },
          focus: {
            body: theme.palette.t1.transparent,
            outline: `dashed 1px ${theme.palette.outline}`,
            text: theme.palette.t1.secondary.blue40
          },
          active: {
            body: theme.palette.t1.transparent,
            text: theme.palette.t1.secondary.blue70
          },
          disabled: {
            text: theme.palette.t1.system.silver
          }
        },
        transparentReverse: {
          default: {
            body: theme.palette.t1.transparent,
            text: theme.palette.t1.secondary.blue40
          },
          hover: {
            body: theme.palette.t1.system.ink,
            text: theme.palette.t1.secondary.blue50
          },
          focus: {
            outline: `dashed 1px ${theme.palette.outline}`,
            text: theme.palette.t1.secondary.blue30
          },
          active: {
            text: theme.palette.t1.secondary.blue30
          },
          disabled: {
            text: theme.palette.t1.system.pewter
          }
        },
        contrast: {
          default: {
            body: theme.palette.t1.system.dark70,
            text: theme.palette.t1.system.white
          },
          hover: {
            body: theme.palette.t1.system.dark80
          },
          focus: {
            body: theme.palette.t1.system.dark60,
            outline: `dashed 1px ${theme.palette.outline}`
          },
          active: {
            body: theme.palette.t1.system.dark60
          },
          disabled: {
            body: theme.palette.t1.system.cloudy,
            text: theme.palette.t1.system.pewter
          }
        },
        contrastOutline: {
          default: {
            body: theme.palette.t1.system.white,
            border: theme.palette.t1.system.dark70,
            text: theme.palette.t1.system.dark70
          },
          hover: {
            body: theme.palette.t1.system.white,
            border: theme.palette.t1.system.dark80,
            text: theme.palette.t1.system.dark80
          },
          focus: {
            body: theme.palette.t1.system.white,
            outline: `dashed 1px ${theme.palette.outline}`,
            border: theme.palette.t1.system.dark60,
            text: theme.palette.t1.system.dark60
          },
          active: {
            body: theme.palette.t1.system.white,
            border: theme.palette.t1.system.dark60,
            text: theme.palette.t1.system.dark60
          },
          disabled: {
            border: theme.palette.t1.system.cloudy,
            text: theme.palette.t1.system.cloudy
          }
        },
        elevated: {
          default: {
            body: theme.palette.t1.system.white,
            text: theme.palette.t1.system.ink
          },
          hover: {
            body: theme.palette.t1.system.offWhite,
            text: theme.palette.t1.system.ink
          },
          focus: {
            body: theme.palette.t1.system.white,
            outline: `dashed 1px ${theme.palette.outline}`,
            text: theme.palette.t1.system.ink
          },
          active: {
            body: theme.palette.t1.system.misty,
            text: theme.palette.t1.system.ink
          },
          disabled: {
            text: theme.palette.t1.system.silver
          }
        },
        header: {
          default: {
            body: theme.palette.t1.transparent,
            text: theme.palette.t1.system.pewter
          },
          hover: {
            body: theme.palette.t1.system.offWhite
          },
          focus: {
            body: theme.palette.t1.system.offWhite,
            outline: `dashed 1px ${theme.palette.outline}`
          },
          active: {
            body: theme.palette.t1.system.offWhite
          },
          disabled: {
            body: theme.palette.t1.transparent,
            text: theme.palette.t1.system.silver
          }
        },
        input: {
          default: {
            body: theme.palette.t1.transparent,
            text: theme.palette.t1.system.ink
          },
          hover: {
            body: theme.palette.t1.system.offWhite
          },
          focus: {
            body: theme.palette.t1.system.offWhite,
            outline: `dashed 1px ${theme.palette.outline}`
          },
          active: {
            body: theme.palette.t1.system.offWhite
          },
          disabled: {
            body: theme.palette.t1.transparent,
            text: theme.palette.t1.system.silver
          }
        }
      };
    }
  }
};
var MuiIconButton2 = {
  styleOverrides: {
    root: ({ theme }) => {
      const palette = iconButtonTheme(theme);
      return {
        cursor: "pointer",
        "&.Mui-disabled": {
          pointerEvents: "auto",
          cursor: "not-allowed"
        },
        "&.MuiIconButton-square": {
          borderRadius: "0.25rem"
        },
        "&.MuiIconButton-circle": {
          borderRadius: "50%"
        },
        "&.MuiIconButton-primary": {
          backgroundColor: palette.primary.default.body,
          svg: {
            color: palette.primary.default.text
          },
          ":hover, &.Mui-focusVisible:hover, &.Mui-hoverVisible": {
            backgroundColor: palette.primary.hover.body
          },
          "&.Mui-focusVisible": {
            outline: palette.primary.focus.outline,
            backgroundColor: palette.primary.focus.body
          },
          ":active, &.Mui-activeVisible": {
            backgroundColor: palette.primary.active.body
          },
          "&.Mui-disabled": {
            backgroundColor: palette.primary.disabled.body
          },
          "&.MuiIconButton-sizeSmall": {
            padding: theme.spacing(1.5),
            svg: {
              width: "20px",
              height: "20px"
            }
          }
        },
        "&.MuiIconButton-secondary": {
          backgroundColor: palette.secondary.default.body,
          border: `1.5px solid ${palette.secondary.default.border}`,
          svg: {
            color: palette.secondary.default.text
          },
          ":hover, &.Mui-focusVisible:hover, &.Mui-hoverVisible": {
            backgroundColor: palette.secondary.hover.body,
            borderColor: palette.secondary.hover.border,
            svg: {
              color: palette.secondary.hover.text
            }
          },
          "&.Mui-focusVisible": {
            backgroundColor: palette.secondary.focus.body,
            outline: palette.secondary.focus.outline,
            borderColor: palette.secondary.focus.border
          },
          ":active, &.Mui-activeVisible": {
            backgroundColor: palette.secondary.active.body,
            borderColor: palette.secondary.active.border,
            svg: {
              color: palette.secondary.active.text
            }
          },
          "&.Mui-disabled": {
            borderColor: palette.secondary.disabled.border,
            svg: {
              color: palette.secondary.disabled.text
            }
          }
        },
        "&.MuiIconButton-tertiary": {
          backgroundColor: palette.tertiary.default.body,
          outline: palette.tertiary.default.outline,
          svg: {
            color: palette.tertiary.default.text
          },
          ":hover, &.Mui-focusVisible:hover, &.Mui-hoverVisible": {
            backgroundColor: palette.tertiary.hover.body,
            outline: palette.tertiary.hover.outline,
            svg: {
              color: palette.tertiary.hover.text
            }
          },
          "&.Mui-focusVisible": {
            backgroundColor: palette.tertiary.focus.body,
            outline: palette.tertiary.focus.outline,
            borderColor: palette.tertiary.focus.border
          },
          ":active, &.Mui-activeVisible": {
            backgroundColor: `${palette.tertiary.active.body}!important`,
            outline: palette.tertiary.active.outline,
            svg: {
              color: palette.tertiary.active.text
            }
          },
          "&.Mui-disabled": {
            outline: palette.tertiary.disabled.outline,
            svg: {
              color: palette.tertiary.disabled.text
            }
          }
        },
        "&.MuiIconButton-transparent": {
          backgroundColor: palette.transparent.default.body,
          svg: {
            color: palette.transparent.default.text
          },
          ":hover, &.Mui-focusVisible:hover, &.Mui-hoverVisible": {
            backgroundColor: palette.transparent.hover.body,
            borderColor: palette.transparent.hover.border,
            svg: {
              color: palette.transparent.hover.text
            }
          },
          "&.Mui-focusVisible": {
            backgroundColor: palette.transparent.focus.body,
            outline: palette.transparent.focus.outline,
            svg: {
              color: palette.transparent.focus.text
            }
          },
          ":active, &.Mui-activeVisible": {
            backgroundColor: palette.transparent.active.body,
            svg: {
              color: palette.transparent.active.text
            }
          },
          "&.Mui-disabled": {
            backgroundColor: palette.transparent.default.body,
            svg: {
              color: palette.transparent.disabled.text
            },
            ":hover, :active": {
              backgroundColor: palette.transparent.default.body,
              svg: {
                color: palette.transparent.disabled.text
              }
            }
          }
        },
        "&.MuiIconButton-transparentReverse": {
          backgroundColor: palette.transparentReverse.default.body,
          border: `1.5px solid ${palette.transparentReverse.default.border}`,
          svg: {
            color: palette.transparentReverse.default.text
          },
          ":hover, &.Mui-focusVisible:hover, &.Mui-hoverVisible": {
            backgroundColor: palette.transparentReverse.hover.body,
            borderColor: palette.transparentReverse.hover.border,
            svg: {
              color: palette.transparentReverse.hover.text
            }
          },
          "&.Mui-focusVisible": {
            backgroundColor: palette.transparentReverse.focus.body,
            outline: palette.transparentReverse.focus.outline,
            svg: {
              color: palette.transparentReverse.focus.text
            }
          },
          ":active, &.Mui-activeVisible": {
            backgroundColor: palette.transparentReverse.active.body,
            svg: {
              color: palette.transparentReverse.active.text
            }
          },
          "&.Mui-disabled": {
            svg: {
              color: palette.transparentReverse.disabled.text
            }
          }
        },
        "&.MuiIconButton-contrast": {
          backgroundColor: palette.contrast.default.body,
          border: `1.5px solid ${palette.contrast.default.border}`,
          svg: {
            color: palette.contrast.default.text
          },
          ":hover, &.Mui-focusVisible:hover, &.Mui-hoverVisible": {
            backgroundColor: palette.contrast.hover.body,
            svg: {
              color: palette.contrast.hover.text
            }
          },
          "&.Mui-focusVisible": {
            backgroundColor: palette.contrast.focus.body,
            outline: palette.contrast.focus.outline,
            svg: {
              color: palette.contrast.focus.text
            }
          },
          ":active, &.Mui-activeVisible": {
            backgroundColor: palette.contrast.active.body,
            svg: {
              color: palette.contrast.active.text
            }
          },
          "&.Mui-disabled": {
            backgroundColor: palette.contrast.disabled.body,
            svg: {
              color: palette.contrast.disabled.text
            }
          }
        },
        "&.MuiIconButton-contrastOutline": {
          backgroundColor: palette.contrastOutline.default.body,
          border: `1.5px solid ${palette.contrastOutline.default.border}`,
          svg: {
            color: palette.contrastOutline.default.text
          },
          ":hover, &.Mui-focusVisible:hover, &.Mui-hoverVisible": {
            backgroundColor: palette.contrastOutline.hover.body,
            borderColor: palette.contrastOutline.hover.border,
            svg: {
              color: palette.contrastOutline.hover.text
            }
          },
          "&.Mui-focusVisible": {
            backgroundColor: palette.contrastOutline.focus.body,
            outline: palette.contrastOutline.focus.outline,
            borderColor: palette.contrastOutline.focus.border,
            svg: {
              color: palette.contrastOutline.focus.text
            }
          },
          ":active, &.Mui-activeVisible": {
            backgroundColor: palette.contrastOutline.active.body,
            borderColor: palette.contrastOutline.active.border,
            svg: {
              color: palette.contrastOutline.active.text
            }
          },
          "&.Mui-disabled": {
            borderColor: palette.contrastOutline.disabled.border,
            svg: {
              color: palette.contrastOutline.disabled.text
            }
          }
        },
        "&.MuiIconButton-elevated": {
          boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.20)",
          backgroundColor: palette.elevated.default.body,
          border: `1.5px solid ${palette.elevated.default.border}`,
          svg: {
            color: palette.elevated.default.text
          },
          ":hover, &.Mui-focusVisible:hover, &.Mui-hoverVisible": {
            backgroundColor: palette.elevated.hover.body,
            borderColor: palette.elevated.hover.border,
            svg: {
              color: palette.elevated.hover.text
            }
          },
          "&.Mui-focusVisible": {
            backgroundColor: palette.elevated.focus.body,
            svg: {
              color: palette.elevated.focus.text
            },
            outline: palette.elevated.focus.outline
          },
          ":active, &.Mui-activeVisible": {
            backgroundColor: palette.elevated.active.body,
            svg: {
              color: palette.elevated.active.text
            }
          },
          "&.Mui-disabled": {
            backgroundColor: palette.elevated.default.body,
            borderColor: palette.elevated.disabled.border,
            svg: {
              color: palette.elevated.disabled.text
            },
            ":hover, :active": {
              backgroundColor: palette.elevated.default.body,
              borderColor: palette.elevated.disabled.border,
              svg: {
                color: palette.elevated.disabled.text
              }
            }
          }
        },
        "&.MuiIconButton-header, &.MuiIconButton-input": {
          backgroundColor: palette.header.default.body,
          svg: {
            color: palette.header.default.text
          },
          ":hover, &.Mui-focusVisible:hover, &.Mui-hoverVisible": {
            backgroundColor: palette.header.hover.body
          },
          "&.Mui-focusVisible": {
            backgroundColor: palette.header.focus.body,
            outline: palette.header.focus.outline,
            svg: {
              color: palette.header.focus.text
            }
          },
          ":active, &.Mui-activeVisible": {
            backgroundColor: palette.header.active.body
          },
          "&.Mui-disabled": {
            backgroundColor: palette.header.disabled.body,
            svg: {
              color: palette.header.disabled.text
            }
          }
        },
        "&.MuiIconButton-header": {
          width: "48px",
          height: "48px"
        },
        "&.MuiIconButton-input": {
          padding: theme.spacing(1.5),
          svg: {
            width: "24px",
            height: "24px",
            color: palette.input.default.text
          },
          width: "36px",
          height: "36px",
          "&.MuiIconButton-sizeSmall": {
            svg: {
              width: "20px",
              height: "20px"
            },
            width: "28px",
            height: "28px"
          }
        }
      };
    }
  }
};
