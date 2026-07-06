import type { BoxProps } from "@mui/material";
export type CarouselProps = {
    images: string[];
    variant?: "primary" | "secondary";
};
export type CarouselType = {
    primary: {
        color: string;
    };
    secondary: {
        color: string;
    };
    focus: string;
};
export type StyledCarouselSlideProps = BoxProps & {
    currentIndex: number;
    variant?: "primary" | "secondary";
};
