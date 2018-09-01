import * as React from "react";
import styled from "styled-components";
import { textColor, themeColor } from "../../utils/consts";

const StyledSocialLink = styled.a`
	font-size: 1.5em;
	color: ${textColor} !important;

	&:active,
	&:hover {
		color: ${themeColor} !important;
	}
`;

export interface ISocialLinkProps {
	rel?: string;
	url: string;
	serviceName: string;
	icon: string;
}

export const SocialLink: React.SFC<ISocialLinkProps> = ({
	rel = "me noopener noreferrer",
	url,
	icon,
	serviceName,
}) => (
	<StyledSocialLink rel={rel} className="u-url" href={url}>
		<i className={icon} role="img" title={serviceName} />
	</StyledSocialLink>
);
