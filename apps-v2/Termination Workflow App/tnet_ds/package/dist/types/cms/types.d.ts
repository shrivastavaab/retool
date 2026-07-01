/// <reference types="react" />
import type { MakeOptional } from "../utils";
export type Lang = "en" | "es" | "fr" | "zh" | "ja" | "de" | "it" | "pt";
export type LocaleDataType = {
    [K in Lang]?: NestedObject | NestedObjectArray;
} | null;
export type LangProp = "en-us" | "en-gb" | "es-es" | "fr-ca" | "zh-cn" | "ja-jp" | "de-de" | "it-it" | "pt-br";
export type CMSProps = React.PropsWithChildren<{
    appName: string;
    appUrl: string;
    lang?: LangProp;
}>;
export type CMSProviderProps = React.PropsWithChildren<MakeOptional<CMSProps, "lang">>;
export type NestedObject = {
    [key: string]: string | number | boolean | NestedObject | NestedObjectArray;
};
export type NestedObjectArray = Array<string | number | boolean | NestedObject>;
export type NestedMessages = NestedObject | NestedObjectArray | undefined;
export type NestedValue = NestedObject | NestedObjectArray | number | string | boolean | undefined;
export type CMSOptions = {
    contentId: string;
    fallbackContent?: React.ReactNode;
    key?: string;
    values?: Record<string, string | number | React.ReactNode | ((chunks: React.ReactNode) => React.ReactNode)>;
    enableHTMLTags?: boolean;
};
