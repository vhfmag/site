import * as React from "react";
import * as ReactDOM from "react-dom";
import { anchorate } from "anchorate";

import "prismjs/themes/prism-okaidia.css";
import "./submodules/cssremedy/quotes.css";
import "./submodules/cssremedy/remedy.css";

export const onRouteUpdate = () => {
	anchorate({
		/**
		 * @param {HTMLElement | undefined} element
		 */
		scroller: function(element) {
			if (!element) return false;
			element.scrollIntoView({ behavior: "smooth" });
			return true;
		},
	});
};

export const onServiceWorkerUpdateReady = () => {
	window.location.reload();
};

export const onClientEntry = () => {
	if (process.env.NODE_ENV !== "production") {
		const axe = require("react-axe");
		axe(React, ReactDOM, 1000);
	}

	if (typeof _paq !== "undefined" && typeof ReportingObserver !== "undefined") {
		const paq = _paq;
		const observer = new ReportingObserver(
			reports => {
				for (const report of reports) {
					console.log({ report });
					paq.push([
						"trackEvent",
						"ReportingObserver",
						report.type,
						JSON.stringify(report),
					]);
				}
			},
			{ buffered: true },
		);

		observer.observe();
	}
};
