const React = require("react");
const ReactDOM = require("react-dom");

exports.onClientEntry = () => {
	if (process.env.NODE_ENV !== "production") {
		const axe = require("react-axe");
		axe(React, ReactDOM, 1000);
		console.log("react-axe, everyone!");
	}
};
