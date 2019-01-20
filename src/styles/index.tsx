import { styled } from "linaria/react";

export const PrintOnly = styled.div`
	@media not print {
		display: none;
	}
`;

export const ScreenOnly = styled.div`
	@media not screen {
		display: none;
	}
`;
