/// <reference types="react" />
import type { TimeValuesType } from "./types";
import "jotai/vanilla";
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
}) => import("react/jsx-runtime").JSX.Element, useMyAtom: typeof import("jotai").useAtom;
export declare const clockValues: {
    hours: number;
    minutes: number;
    aa: string[];
    timeZone: string[];
};
export declare const initialTimeValuesAtomStartingValue: TimeValuesType;
export declare const initialTimeValuesAtom_: import("jotai").PrimitiveAtom<TimeValuesType> & {
    init: TimeValuesType;
};
export declare const timeValuesAtom_: import("jotai").WritableAtom<TimeValuesType, [typeof import("jotai/utils").RESET | import("jotai").SetStateAction<TimeValuesType>], void>;
export declare const unconfirmedInputValueAtom_: import("jotai").Atom<string>;
export declare const inputValueAtom_: import("jotai").PrimitiveAtom<string> & {
    init: string;
};
