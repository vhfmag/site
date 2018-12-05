import * as StyledModule from "styled-components";
import { ITheme } from "./theme";

const {
	default: styled,
	css,
	keyframes,
	createGlobalStyle,
	withTheme,
	ThemeProvider,
	ThemeConsumer,
	ThemeContext,
	isStyledComponent,
	ServerStyleSheet,
	StyleSheetManager,
}: StyledModule.ThemedStyledComponentsModule<ITheme> = StyledModule;

export default styled;
export {
	css,
	keyframes,
	createGlobalStyle,
	withTheme,
	ThemeProvider,
	ThemeConsumer,
	ThemeContext,
	isStyledComponent,
	ServerStyleSheet,
	StyleSheetManager,
};
