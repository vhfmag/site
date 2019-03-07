import * as React from "react";
import { styled } from "linaria/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Social_2 } from "../../graphql-types";
import { fromTheme } from "../../styles/theme";

const StyledSocialLink = styled.a`
	font-size: 1.5em;
	color: ${fromTheme("themeColor")} !important;
	box-shadow: none !important;

	&:active,
	&:hover,
	&:focus {
		color: ${fromTheme("textColor")} !important;
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
		<StyledSocialLink
			rel={rel}
			href={url!}
			className="u-url"
			itemProp="sameAs"
			title={serviceName!}
			aria-label={serviceName!}
		>
			<FontAwesomeIcon
				icon={(iconNameParts.length === 1 ? iconNameParts[0] : iconNameParts) as any}
			/>
		</StyledSocialLink>
	);
};
