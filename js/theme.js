function setTheme(theme) {
	document.body.dataset.theme = theme;
	localStorage.setItem("theme", theme);
}

function loadTheme() {
	if (typeof localStorage !== "undefined") {
		const persistedTheme = localStorage.getItem("theme");

		if (persistedTheme) {
			setTheme(persistedTheme);
		}
	}
}

loadTheme();

function onLoad() {
	loadTheme();
	const wrapper = document.getElementById("theme-selector-wrapper");

	if (wrapper) {
		const buttons = wrapper.querySelectorAll(".theme-button input");
		buttons.forEach(button =>
			button.addEventListener("input", _ev => {
				const theme = button.parentElement.dataset.theme;
				setTheme(theme);
			}),
		);
	}
}

window.onload = onLoad;
document.addEventListener("turbolinks:load", onLoad);
