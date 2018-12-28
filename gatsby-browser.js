const React = require("react");
const ReactDOM = require("react-dom");
const { anchorate } = require("anchorate");

exports.onRouteUpdate = () => {
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

exports.onClientEntry = () => {
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
