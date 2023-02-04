import { DateTime, Interval } from "luxon";
import { canonicalUrl } from "./site";

export const name = "Victor Magalhães";
export const url = canonicalUrl;
export const email = "vhfmag@pm.me";
export const age = Math.trunc(
	Interval.fromDateTimes({ year: 1994, month: 3, day: 26 }, DateTime.now()).toDuration("years")
		.years,
);
