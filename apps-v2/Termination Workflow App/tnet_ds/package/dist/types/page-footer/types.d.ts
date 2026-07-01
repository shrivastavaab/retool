export type PageFooterType = {
    text: string;
    background: string;
    border: string;
};
type Link = {
    label: string;
    href: string;
};
export type PageFooterProps = {
    text: string;
    links: Link[];
};
export {};
