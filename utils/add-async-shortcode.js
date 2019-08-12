// This is a utility function that takes a shortcode in Eleventy's default format. This returns an
// array that can be destructured and passed into the function. It's currently only been tested with
// Nunjucks.
module.exports = function addSyncShortcode(tag, shortcodeFunction) {
	return this.addNunjucksTag(tag, nunjucksEngine => {
		return {
			tags: [tag],

			parse(parser, nodes) {
				let token = parser.nextToken();
				let args = parser.parseSignature(null, true);

				parser.advanceAfterBlockEnd(token.value);
				return new nodes.CallExtensionAsync(this, "run", args);
			},

			run(context, parameter, callback) {
				Promise.resolve(shortcodeFunction(parameter)).then(html => {
					callback(null, new nunjucksEngine.runtime.SafeString(html));
				});
			},
		};
	});
};
