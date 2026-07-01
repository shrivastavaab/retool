import { ReactNode } from "react";
import { useIntl } from "react-intl";
import type { CMSProps, CMSOptions, NestedMessages, NestedValue } from "./types";
export declare function flattenMessages(obj: NestedValue | NestedMessages, parentKey?: string, result?: Record<string, string>): Record<string, string>;
/**
 * Crea un mapeador completo de etiquetas HTML para usar con ReactIntl
 * Cada etiqueta se mapea a una función que renderiza la etiqueta con su contenido
 *
 * @example
 * const htmlTags = createHTMLTagsMapper();
 * // Uso con formatMessage: intl.formatMessage({ id: 'message' }, htmlTags)
 * // Si el mensaje es: "Click <a>here</a> for <strong>more info</strong>"
 * // Se renderizará: Click <a>here</a> for <strong>more info</strong>
 */
export declare const createHTMLTagsMapper: () => Record<string, (chunks: ReactNode) => JSX.Element>;
/**
 * Instancia predeterminada del mapeador de etiquetas HTML
 * Lista para usar directamente con ReactIntl
 */
export declare const htmlTagsMapper: Record<string, (chunks: ReactNode) => JSX.Element>;
export declare const CMSProvider: (props: CMSProps) => import("react/jsx-runtime").JSX.Element;
export declare const useGetCMSContent: () => ({ contentId, key, fallbackContent, values, enableHTMLTags, }: CMSOptions) => React.ReactNode;
export declare const useGetCMSArrayContent: () => ({ contentId, keys, fallbackContent, values, enableHTMLTags, }: Omit<CMSOptions, "key"> & {
    keys: string[];
}) => React.ReactNode;
export { useIntl };
