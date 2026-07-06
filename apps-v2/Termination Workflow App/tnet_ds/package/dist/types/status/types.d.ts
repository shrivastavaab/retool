import React from "react";
export type StatusVariant = "active" | "inProgress" | "denied" | "warning" | "pending" | "expired" | "inactive";
export type StatusProps = {
    variant: "active" | "inProgress" | "denied" | "warning" | "pending" | "expired" | "inactive";
    size?: "large" | "small";
    children?: React.ReactNode;
};
export type StatusType = {
    text: string;
    active: string;
    inProgress: string;
    denied: string;
    warning: string;
    pending: string;
    expired: string;
    inactive: string;
};
