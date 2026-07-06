export type RatingScaleProps = {
    maxRating: 5 | 7;
    onRatingChange: (rating: number) => void;
    selectedRating?: number;
    labels: string[];
};
type sectionType = {
    sectionColor: string;
    backgroundColor: {
        default: string;
        disabled: string;
        selected: string;
    };
};
export interface RatingScaleType {
    backgroundColor: {
        default: string;
        disabled: string;
    };
    border: {
        default: string;
        hover: string;
        active: string;
        selected: string;
        disabled: string;
        focus: string;
    };
    first: sectionType;
    second: sectionType;
    third: sectionType;
    fourth: sectionType;
    fifth: sectionType;
    sixth: sectionType;
    seventh: sectionType;
}
export {};
