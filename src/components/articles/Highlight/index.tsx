import * as React from "react";
import { Float, IFloatProps } from "../Float";
import s from "./style.module.scss";

export interface HighlightProps extends Omit<IFloatProps, "size"> {
	size?: "small" | "medium";
}

export const Highlight = ({ size, className, ...floatProps }: HighlightProps) => (
	<Float {...floatProps} className={`${className} ${(size && s[size]) || ""}`} />
);
