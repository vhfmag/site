import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Social_2 } from "../../graphql-types";
import s from "./SocialLink.module.scss";

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
		<a
			rel={rel}
			href={url!}
			className={s.socialLink}
			itemProp="sameAs"
			title={serviceName!}
			aria-label={serviceName!}
		>
			<FontAwesomeIcon
				icon={(iconNameParts.length === 1 ? iconNameParts[0] : iconNameParts) as any}
			/>
		</a>
	);
};
