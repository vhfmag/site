import { DateTime, Interval } from "luxon";

export const name = "Victor Magalhães";
export const url = "https://victormagalhaes.codes";
export const email = "vhfmag@pm.me";
export const age = Math.trunc(
	Interval.fromDateTimes({ year: 1994, month: 3, day: 26 }, DateTime.now()).toDuration("years")
		.years,
);
