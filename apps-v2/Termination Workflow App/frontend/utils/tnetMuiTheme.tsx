import { useEffect, useState, type ReactNode } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const fontRegular = "Centra No2, Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif";
const fontMedium = fontRegular;
const fontBold = fontRegular;

function textStyle(fontSize: string, lineHeight: string) {
  return {
    regular: { fontSize, lineHeight, fontFamily: fontRegular },
    medium: { fontSize, lineHeight, fontFamily: fontMedium },
    bold: { fontSize, lineHeight, fontFamily: fontBold },
  };
}

const typographyScale = {
  h1: textStyle("3rem", "3.5rem"),
  h1sm: textStyle("2.25rem", "2.75rem"),
  h2: textStyle("2.25rem", "2.75rem"),
  h2sm: textStyle("1.875rem", "2.25rem"),
  h3: textStyle("1.875rem", "2.25rem"),
  h3sm: textStyle("1.5rem", "2rem"),
  h4: textStyle("1.5rem", "2rem"),
  h4sm: textStyle("1.25rem", "1.75rem"),
  h5: textStyle("1.25rem", "1.75rem"),
  h5sm: textStyle("1.125rem", "1.5rem"),
  h6: textStyle("1.125rem", "1.5rem"),
  h6sm: textStyle("1rem", "1.5rem"),
  caption: textStyle("0.75rem", "1rem"),
  paragraph: {
    xl: textStyle("1.25rem", "1.75rem"),
    lg: textStyle("1.125rem", "1.5rem"),
    md: textStyle("0.875rem", "1.25rem"),
    sm: textStyle("0.8125rem", "1.125rem"),
    xs: textStyle("0.75rem", "1rem"),
  },
};

const lightTheme = createTheme({
  name: "light",
  palette: {
    typography: {
      color: "#242936",
      disabledColor: "#B3BDC7",
    },
    status: {
      text: "#242936",
      active: "#008531",
      inProgress: "#0070E0",
      denied: "#E01021",
      warning: "#FF8C22",
      pending: "#FFD649",
      expired: "#B3BDC7",
      inactive: "#B3BDC7",
    },
  },
  typography: {
    fontFamily: fontRegular,
    ...typographyScale,
  },
  breakpoints: {
    values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536, smTypo: 640 },
  },
} as Parameters<typeof createTheme>[0]);

const darkTheme = createTheme({
  name: "dark",
  palette: {
    typography: {
      color: "#FFFFFF",
      disabledColor: "#6E7789",
    },
    status: {
      text: "#FFFFFF",
      active: "#33E173",
      inProgress: "#56ABFF",
      denied: "#E01021",
      warning: "#FF8C22",
      pending: "#FFD649",
      expired: "#B3BDC7",
      inactive: "#B3BDC7",
    },
  },
  typography: {
    fontFamily: fontRegular,
    ...typographyScale,
  },
  breakpoints: {
    values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536, smTypo: 640 },
  },
} as Parameters<typeof createTheme>[0]);

export function TNetMuiThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains("dark"));

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return <ThemeProvider theme={isDark ? darkTheme : lightTheme}>{children}</ThemeProvider>;
}
