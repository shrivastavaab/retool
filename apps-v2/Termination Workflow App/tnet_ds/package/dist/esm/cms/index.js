// lib/cms/component.tsx
import { useEffect, useMemo, useState, createElement } from "react";
import { useIntl, IntlProvider } from "react-intl";
import { jsx } from "react/jsx-runtime";
function flattenMessages(obj, parentKey = "", result = {}) {
  const processArray = (array, baseKey) => {
    array.forEach((item, index) => {
      const arrayKey = `${baseKey}.${index}`;
      if (typeof item === "string" || typeof item === "number" || typeof item === "boolean") {
        result[arrayKey] = String(item);
      } else {
        flattenMessages(item, arrayKey, result);
      }
    });
  };
  if (typeof obj === "object" && !Array.isArray(obj)) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const newKey = parentKey ? `${parentKey}.${key}` : key;
        const value = obj[key];
        if (typeof value === "object" && value !== null && Array.isArray(value)) {
          processArray(value, newKey);
        } else if (typeof value === "object" && value !== null) {
          flattenMessages(value, newKey, result);
        } else {
          result[newKey] = typeof value !== "string" ? String(value) : value;
        }
      }
    }
  } else if (typeof obj === "object" && obj !== null) {
    const baseKey = parentKey || "0";
    processArray(obj, baseKey.slice(0, -2));
  }
  return result;
}
var createHTMLTagsMapper = () => {
  const htmlTags = [
    // Document structure
    "html",
    "head",
    "body",
    "title",
    "meta",
    "link",
    "style",
    "script",
    "noscript",
    "base",
    // Sections
    "header",
    "nav",
    "main",
    "section",
    "article",
    "aside",
    "footer",
    "address",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    // Grouping content
    "div",
    "p",
    "hr",
    "pre",
    "blockquote",
    "ol",
    "ul",
    "li",
    "dl",
    "dt",
    "dd",
    "figure",
    "figcaption",
    // Text-level semantics
    "a",
    "em",
    "strong",
    "small",
    "mark",
    "del",
    "ins",
    "q",
    "cite",
    "abbr",
    "dfn",
    "time",
    "code",
    "var",
    "samp",
    "kbd",
    "sub",
    "sup",
    "i",
    "b",
    "u",
    "s",
    "span",
    "br",
    "wbr",
    "bdi",
    "bdo",
    "ruby",
    "rt",
    "rp",
    // Embedded content
    "img",
    "iframe",
    "embed",
    "object",
    "param",
    "video",
    "audio",
    "source",
    "track",
    "map",
    "area",
    "svg",
    "math",
    // Tabular data
    "table",
    "caption",
    "colgroup",
    "col",
    "tbody",
    "thead",
    "tfoot",
    "tr",
    "td",
    "th",
    // Forms
    "form",
    "fieldset",
    "legend",
    "label",
    "input",
    "button",
    "select",
    "datalist",
    "optgroup",
    "option",
    "textarea",
    "output",
    "progress",
    "meter",
    // Interactive elements
    "details",
    "summary",
    "dialog",
    // Web Components
    "slot",
    "template",
    // Deprecated but still used
    "center",
    "font",
    "big",
    "small",
    "tt"
  ];
  const mapper = {};
  htmlTags.forEach((tag) => {
    mapper[tag] = (chunks) => createElement(tag, {}, chunks);
  });
  return mapper;
};
var htmlTagsMapper = createHTMLTagsMapper();
var CMSProvider = (props) => {
  const propsWithDefault = useMemo(
    () => ({
      lang: navigator.language || "en-us",
      ...props
    }),
    [props]
  );
  const [localeData, setLocaleData] = useState();
  useEffect(() => {
    fetch(
      `${propsWithDefault.appUrl}/design-system/1_0_0/${propsWithDefault.lang}/dist/${propsWithDefault.appName}/application.json`
    ).then((res) => res.json()).then((res) => {
      setLocaleData({ en: res });
    }).catch((err) => {
      console.error(err);
      setLocaleData({ en: {} });
    });
  }, [propsWithDefault]);
  const languageWithoutRegionCode = propsWithDefault.lang.toLowerCase().split(/[_-]+/)[0];
  const messages = localeData ? localeData[languageWithoutRegionCode] || localeData.en : {};
  return localeData ? /* @__PURE__ */ jsx(
    IntlProvider,
    {
      messages: flattenMessages(messages),
      locale: propsWithDefault.lang,
      defaultLocale: "en",
      children: propsWithDefault.children
    },
    propsWithDefault.lang
  ) : /* @__PURE__ */ jsx("div", {});
};
var useGetCMSContent = () => {
  const intl = useIntl();
  return ({
    contentId,
    key,
    fallbackContent = "Content not found",
    values,
    enableHTMLTags = false
  }) => {
    const id = key || null;
    const messageId = `${contentId}${id}`;
    const notFoundMarker = `__CMS_NOT_FOUND__${messageId}__`;
    const formatValues = enableHTMLTags ? { ...htmlTagsMapper, ...values } : values;
    const cmsMessage = intl.formatMessage(
      {
        id: messageId,
        defaultMessage: notFoundMarker
      },
      formatValues
    );
    return cmsMessage === notFoundMarker ? fallbackContent : cmsMessage;
  };
};
export {
  CMSProvider,
  createHTMLTagsMapper,
  htmlTagsMapper,
  useGetCMSContent,
  useIntl
};
