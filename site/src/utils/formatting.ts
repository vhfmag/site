const dateFormatter = new Intl.DateTimeFormat("pt-br", {
	dateStyle: "short",
	timeStyle: undefined,
});

export function formatDate(unparsedDate: Date | string | number): string {
	return dateFormatter.format(new Date(unparsedDate));
}

const dateTimeFormatter = new Intl.DateTimeFormat("pt-br", {
	dateStyle: "short",
	timeStyle: "short",
});

export function formatDateTime(unparsedDate: Date | string | number): string {
	return dateTimeFormatter.format(new Date(unparsedDate));
}

export const formatDateISO = (unparsedDate: Date | string | number): string =>
	new Date(unparsedDate).toISOString();
