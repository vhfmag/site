import { textColor, themeColor, backgroundColor, responsiveBreakpoint } from "../utils/consts";
import { kebabCase } from "lodash";

export interface ITheme {
	backgroundColor: string;
	themeColor: string;
	textColor: string;
	rootPadding: string;
	sidebarWidth: string;
	responsiveBreakpoint: string;
}

export const darkTheme: ITheme = {
	textColor,
	backgroundColor,
	themeColor,
	responsiveBreakpoint,
	rootPadding: "16px",
	sidebarWidth: "270px",
};

export const fromTheme = (field: keyof ITheme) => `var(--${kebabCase(field)})`;
