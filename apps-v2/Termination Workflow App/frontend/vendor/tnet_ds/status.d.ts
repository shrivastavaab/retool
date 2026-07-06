import type { ReactNode, ReactElement } from "react";

type StatusVariant = "active" | "inProgress" | "denied" | "warning" | "pending" | "expired" | "inactive";

export function Status(props: {
  variant: StatusVariant;
  size?: "large" | "small";
  children?: ReactNode;
}): ReactElement;

export const statusTheme: unknown;
