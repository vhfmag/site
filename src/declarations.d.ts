declare type DeepNonNullable<T> = { [K in keyof T]-?: DeepNonNullable<T[K]> };
declare type NonNullableNode = NonNullable<React.ReactNode>;
declare type Omit<T extends object, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

declare interface GatsbyPaginatorProps<T> {
	first: boolean;
	last: boolean;
	index: number;
	pageCount: number;
	group: Array<T>;
	pathPrefix: string;
	additionalContext: { [key: string]: any };
}

declare interface IAuthor {
	name: string;
	url?: string;
}

type ObjectOmit<Obj, Props extends keyof Obj> = Pick<Obj, Exclude<keyof Obj, Props>>;

declare var _paq: undefined | { push(args: [string, string, string, any]): void };

interface IReport {
	id: string;
	type: string;
	url: string;
	body: {
		message: string;
		lineNumber: number;
		columnNumber: number;
		sourceFile: number;
		anticipatedRemoval: boolean;
	};
}

interface IReportObserverOptions {
	types?: string[];
	buffered?: boolean;
}

class ReportingObserverClass {
	constructor(
		handler: (reports: IReport[], observer: this) => void,
		options?: IReportObserverOptions,
	);

	observe(): void;
	disconnect(): void;
}

declare const ReportingObserver: undefined | typeof ReportingObserverClass;
