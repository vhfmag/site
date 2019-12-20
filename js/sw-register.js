if ("serviceWorker" in navigator) {
	navigator.serviceWorker
		.getRegistrations()
		.then(sws => Promise.all(sws.map(sw => sw.unregister())));
}
