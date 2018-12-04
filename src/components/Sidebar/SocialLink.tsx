import * as React from "react";
import styled from "styled-components";
import { textColor, themeColor } from "../../utils/consts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Social_2 } from "../../graphql-types";

const StyledSocialLink = styled.a`
	font-size: 1.5em;
	color: ${textColor} !important;

	&:active,
	&:hover {
		color: ${themeColor} !important;
	}
`;

export interface ISocialLinkProps extends Social_2 {
	rel?: string;
}

export const SocialLink: React.SFC<ISocialLinkProps> = ({
	rel = "me noopener noreferrer",
	url,
	icon,
	serviceName,
}) => {
	const iconNameParts = icon!.split(" ");

	return (
		<StyledSocialLink rel={rel} className="u-url" href={url!}>
			<FontAwesomeIcon
				icon={
					(iconNameParts.length === 1
						? iconNameParts[0]
						: iconNameParts) as any
				}
				title={serviceName!}
				alt={serviceName!}
			/>
		</StyledSocialLink>
	);
};
