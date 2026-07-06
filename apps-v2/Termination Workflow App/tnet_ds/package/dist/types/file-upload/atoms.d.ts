/// <reference types="react" />
import { FileUploadFile } from "./types";
import "jotai/vanilla";
export declare const filesAtom: import("jotai").PrimitiveAtom<FileUploadFile[]> & {
    init: FileUploadFile[];
};
export declare const setFilesAtom: import("jotai").WritableAtom<unknown, [newVal: FileUploadFile[]], void>;
export declare const updateFileAtom: import("jotai").WritableAtom<unknown, [file: FileUploadFile], void>;
export declare const deleteFileAtom: import("jotai").WritableAtom<unknown, [fileName: string], void>;
export declare const errorAtom: import("jotai").WritableAtom<string, unknown[], unknown>;
export declare const setErrorAtom: import("jotai").WritableAtom<unknown, [newValue: string], void>;
export declare const Provider: ({ store, initialValues, children, }: {
    store?: {
        get: <Value>(atom: import("jotai").Atom<Value>) => Value;
        set: <Value_1, Args extends unknown[], Result>(atom: import("jotai").WritableAtom<Value_1, Args, Result>, ...args: Args) => Result;
        sub: (atom: import("jotai").Atom<unknown>, listener: () => void) => () => void;
        dev_subscribe_store: (l: (action: {
            type: "write";
            flushed: Set<import("jotai").Atom<unknown>>;
        } | {
            type: "async-write";
            flushed: Set<import("jotai").Atom<unknown>>;
        } | {
            type: "sub";
            flushed: Set<import("jotai").Atom<unknown>>;
        } | {
            type: "unsub";
        } | {
            type: "restore";
            flushed: Set<import("jotai").Atom<unknown>>;
        }) => void, rev: 2) => () => void;
        dev_get_mounted_atoms: () => IterableIterator<import("jotai").Atom<unknown>>;
        dev_get_atom_state: (a: import("jotai").Atom<unknown>) => {
            d: Map<import("jotai").Atom<unknown>, any & ({
                e: unknown;
            } | {
                v: unknown;
            })>;
        } & ({
            e: unknown;
        } | {
            v: unknown;
        });
        dev_get_mounted: (a: import("jotai").Atom<unknown>) => {
            l: Set<() => void>;
            t: Set<import("jotai").Atom<unknown>>;
            u?: () => void;
        };
        dev_restore_atoms: (values: Iterable<readonly [import("jotai").Atom<unknown>, unknown]>) => void;
    } | {
        get: <Value_2>(atom: import("jotai").Atom<Value_2>) => Value_2;
        set: <Value_1_1, Args_1 extends unknown[], Result_1>(atom: import("jotai").WritableAtom<Value_1_1, Args_1, Result_1>, ...args: Args_1) => Result_1;
        sub: (atom: import("jotai").Atom<unknown>, listener: () => void) => () => void;
        dev_subscribe_store?: never;
        dev_get_mounted_atoms?: never;
        dev_get_atom_state?: never;
        dev_get_mounted?: never;
        dev_restore_atoms?: never;
    };
    initialValues?: Iterable<readonly [import("jotai").WritableAtom<unknown, any[], any>, unknown]>;
    children: import("react").ReactNode;
}) => import("react/jsx-runtime").JSX.Element, useAtomValue: typeof import("jotai").useAtomValue, useSetAtom: typeof import("jotai").useSetAtom;
