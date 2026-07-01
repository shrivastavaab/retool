export type SignatureProps = {
    width?: number | string;
    height?: number | string;
    onEnd?: (Base64URLString: string) => void;
    onReset?: () => void;
};
export type SignatureType = {
    border: {
        default: string;
        hover: string;
        active: string;
    };
    underline: {
        default: string;
        hover: string;
    };
    penColor: string;
};
