import { styled } from "linaria/react";
import { Float } from "../Float";
import { withProps } from "../../../utils/types";

export const Highlight = styled(withProps<{ size?: "small" | "medium" }, typeof Float>(Float))`
	font-size: ${({ size }) => (size === "small" ? "1.25em" : size === "medium" ? "1.5em" : "2em")};
	line-height: 1;
`;
