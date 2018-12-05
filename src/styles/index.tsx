import styled from "../styles/styled";

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
