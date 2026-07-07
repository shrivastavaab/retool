import type { ElementType, ReactElement, ReactNode } from "react";

type TypographyVariant =
  | "input"
  | "cardTitle"
  | "tooltip"
  | "success"
  | "breadcrumbs"
  | "calendarHeader"
  | "calendarWeekIndicators?"
  | "paragraph"
  | "caption"
  | "overline"
  | "paragraphXl"
  | "paragraphLg"
  | "paragraphMd"
  | "paragraphSm"
  | "paragraphXs"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

export function Typography(props: {
  variant?: TypographyVariant;
  weight?: "regular" | "medium" | "bold";
  className?: string;
  children?: ReactNode;
  component?: ElementType;
}): ReactElement;

export const typographyTheme: unknown;
