import * as React from "react";

export const generateLinkedDataTag = (data: object) => (
	<script type="application/ld+json">{JSON.stringify(data)}</script>
);
