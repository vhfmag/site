const wrapper = document.getElementById("theme-selector-wrapper");

function setTheme(theme) {
	document.body.dataset.theme = theme;
}

const supportsColorScheme = (() => {
	try {
		return (
			matchMedia("(prefers-color-scheme: dark)").matches ||
			matchMedia("not (prefers-color-scheme: dark)").matches
		);
	} catch (_err) {
		return false;
	}
})();

if (wrapper) {
	const buttons = wrapper.querySelectorAll(".theme-button");
	buttons.forEach(button =>
		button.addEventListener("click", _ev => {
			const theme = button.dataset.theme;
			setTheme(theme);
			localStorage.setItem("theme", theme);
		}),
	);

	wrapper.attributes.removeNamedItem("hidden");

	if (typeof localStorage !== "undefined") {
		const persistedTheme = localStorage.getItem("theme");

		if (persistedTheme) {
			setTheme(persistedTheme);
		}
	}

	if (supportsColorScheme) {
		wrapper.querySelector("[data-theme=auto]").attributes.removeNamedItem("hidden");
	}
}
