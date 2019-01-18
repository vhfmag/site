import { textColor, themeColor, backgroundColor } from "../utils/consts";
import { kebabCase } from "lodash";

export interface ITheme {
	backgroundColor: string;
	themeColor: string;
	textColor: string;
	rootPadding: string;
	sidebarWidth: string;
}

export const darkTheme: ITheme = {
	textColor,
	backgroundColor,
	themeColor,
	rootPadding: "16px",
	sidebarWidth: "270px",
};

export const fromTheme = (field: keyof ITheme) => `var(--${kebabCase(field)})`;
