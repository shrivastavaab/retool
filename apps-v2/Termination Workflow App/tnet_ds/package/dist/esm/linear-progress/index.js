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
import { LinearProgress as MuiLinearProgress2 } from "@mui/material";
import { jsx } from "react/jsx-runtime";
var LinearProgress = ({
  size = "md",
  className,
  ...rest
}) => /* @__PURE__ */ jsx(
  MuiLinearProgress2,
  {
    ...rest,
    className: `T1-linearProgress-${size} ${className ?? ""}`
  }
);
export {
  LinearProgress,
  MuiLinearProgress
};
