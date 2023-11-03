// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyFunction = (...args: any[]) => any;

export type UnionOfArrayToArrayOfUnion<T extends unknown[]> = T[number][];

export const unionOfArrayToArrayOfUnion = <T extends unknown[]>(arr: T): T[number][] => arr;
