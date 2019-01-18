import * as React from "react";
import { groupBy } from "lodash";
import { WebMention, WebMentionProperty } from "../../utils/webmention";
import { formatDate } from "../../utils/utils";
import styled from "../../styles/styled";

export interface WebMentionsProps {
	mentions: WebMention[];
}

interface WebMentionProps {
	mention: WebMention;
}

const descriptors: { [K in WebMentionProperty]: { singular: string; plural: string } } = {
	"in-reply-to": { plural: "respostas", singular: "resposta" },
	"like-of": { plural: "likes", singular: "like" },
	"mention-of": { plural: "menções", singular: "menção" },
	"repost-of": { plural: "reposts", singular: "repost" },
	rsvp: { plural: "confirmações de presença", singular: "confirmação de presença" },
};

const getDescriptor = (prop: WebMentionProperty, n: number) =>
	descriptors[prop][n === 1 ? "singular" : "plural"];

const WebMentionsSection = styled.section`
	> section > ul {
		margin: 0;

		> li {
			list-style: none;
		}
	}

	.in-reply-to + .in-reply-to {
		margin-top: 2em;
	}
`;

const MentionArticle = styled.article`
	> p {
		margin-top: 0.5em;
	}
`;

const MentionHeader = styled.header`
	display: grid;
	grid-template-columns: max-content auto;
	grid-template-areas: "photo name" "photo metadata";
	justify-content: flex-start;
	grid-column-gap: 1em;

	--image-size: 4em;

	img {
		margin: 0;
		width: var(--image-size);
		height: var(--image-size);
		object-fit: cover;
		object-position: center;
		grid-area: photo;
	}

	a {
		grid-area: name;
	}

	.metadata {
		grid-area: metadata;

		* + * {
			&:before {
				content: " - ";
			}
		}
	}
`;

function Mention({ mention }: WebMentionProps) {
	const isSimple = ["like-of", "repost-of"].includes(mention["wm-property"]);

	return (
		<MentionArticle className="u-comment h-cite">
			<MentionHeader className="">
				{mention.author.photo && <img src={mention.author.photo} />}
				<a className="u-author h-card" href={mention.author.url}>
					{mention.author.name}
				</a>
				<div className="metadata">
					{mention.url && (
						<a className="u-url" href={mention.url}>
							Ver original
						</a>
					)}
					{!isSimple && mention.published && (
						<time className="dt-published" dateTime={mention.published}>
							{formatDate(mention.published)}
						</time>
					)}
				</div>
			</MentionHeader>
			{!isSimple &&
				mention.content &&
				mention.content.text &&
				(mention.content.html ? (
					<p
						className="e-content p-name"
						dangerouslySetInnerHTML={{ __html: mention.content.html }}
					/>
				) : (
					<p className="e-content p-name">{mention.content.text}</p>
				))}
		</MentionArticle>
	);
}

export function WebMentions({ mentions }: WebMentionsProps) {
	const grouped = groupBy(mentions, m => m["wm-property"]);

	return (
		<WebMentionsSection>
			{Object.entries(grouped).map(([prop, ms]) => (
				<section key={prop}>
					<h3>
						{ms.length} {getDescriptor(prop as WebMentionProperty, ms.length)}
					</h3>
					<ul>
						{ms.map(mention => (
							<li key={mention["wm-id"]} className={mention["wm-property"]}>
								<Mention mention={mention} />
							</li>
						))}
					</ul>
				</section>
			))}
		</WebMentionsSection>
	);
}
