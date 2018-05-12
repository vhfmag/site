import * as React from "react";

export const LinkedData: React.SFC<{ data: object }> = ({ data }) => (
	<script type="application/ld+json">{JSON.stringify(data)}</script>
);
