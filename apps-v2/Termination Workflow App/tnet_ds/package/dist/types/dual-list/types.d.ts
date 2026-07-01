export type DualListItem = {
    id: string | number;
    label: string;
    selected: boolean;
};
export type DualListList = DualListItem[];
export type DualListLists = [DualListItem[], DualListItem[]];
export type DualListProps = {
    lists: DualListLists;
    onChange?: (lists: DualListLists) => void;
    listTitles?: [string, string];
};
export type ListContainerProps = {
    list: DualListItem[];
    onChange?: (list: DualListList, index: number) => void;
    listIndex: number;
    title?: string;
};
