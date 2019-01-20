import React from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";

export interface CodeProps extends React.HTMLProps<HTMLPreElement> {
	codeString: string;
	language: Language;
}

const tsCodes = ["js", "jsx", "ts", "tsx"];

export const Code = ({ codeString, language, ...props }: CodeProps) => {
	return (
		<Highlight
			{...defaultProps}
			code={codeString}
			language={tsCodes.includes(language) ? "typescript" : language}
		>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<pre className={className} style={style} {...props}>
					{tokens.map((line, i) => (
						<div {...getLineProps({ line, key: i })}>
							{line.map((token, key) => (
								<span {...getTokenProps({ token, key })} />
							))}
						</div>
					))}
				</pre>
			)}
		</Highlight>
	);
};
