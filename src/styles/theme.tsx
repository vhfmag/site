import { textColor, themeColor, backgroundColor } from "../utils/consts";

export interface ITheme {
	backgroundColor: string;
	themeColor: string;
	textColor: string;
}

export const darkTheme: ITheme = {
	textColor,
	backgroundColor,
	themeColor,
};

export const lightTheme: ITheme = {
	textColor: backgroundColor,
	backgroundColor: textColor,
	themeColor: "hsla(125, 51%, 32%, 1)",
};
