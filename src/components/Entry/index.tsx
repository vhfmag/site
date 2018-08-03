import * as React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import { renderAst } from "../../utils/customComponents";
import { IEntryHeaderProps, EntryHeader } from "../EntryHeader";

type IEntryProps = HTMLOrString & IEntryHeaderProps;

const StyledEntry = styled.article`
	.footnotes {
		clear: both;

		li {
			p {
				margin: 0;
				display: inline;
			}
		}
	}
`;

export class Entry extends React.Component<IEntryProps> {
	public render() {
		const { content, htmlAst, ...headerProps } = this.props;

		return (
			<StyledEntry className="h-entry">
				<Helmet title={headerProps.title} />
				<EntryHeader {...headerProps} isFullPage={true} />
				<section className="e-content">
					{content ? <p>{content}</p> : renderAst(htmlAst)}
				</section>
			</StyledEntry>
		);
	}
}
