import styled from "styled-components";
import { Float } from "../Float";

export const Highlight = styled<{ size?: "small" | "medium" | "large" }>(Float)`
	font-size: ${({ size }) =>
		size === "small" ? "1.25em" : size === "medium" ? "1.5em" : "2em"};
	line-height: 1;
`;
