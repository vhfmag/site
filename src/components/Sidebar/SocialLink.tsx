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
	url: string;
	serviceName: string;
	icon: string;
}

export const SocialLink: React.SFC<ISocialLinkProps> = ({ url, icon }) => (
	<StyledSocialLink rel="me noopener" className="u-url" href={url}>
		<i className={`fa ${icon}`} />
	</StyledSocialLink>
);
