import {
	textColor,
	themeColor,
	backgroundColor,
	responsiveBreakpoint,
} from "../utils/consts";

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

export const fromTheme = (field: keyof ITheme) => (props: { theme: ITheme }) =>
	props.theme[field];
