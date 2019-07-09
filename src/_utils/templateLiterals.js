const genericTemplateLiteral = (transformFn = x => x) => (strings, ...values) =>
	strings.reduce((acc, el, i) => acc + transformFn(el) + (values[i] || ""), "");

const html = genericTemplateLiteral(str => str.trim());

module.exports = { html };
