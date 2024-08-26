export default {
	async fetch(request, env) {
		const url = new URL(request.url);

		// Only intercept requests to the root
		if (url.pathname === "/") {
			const lang = getPreferredLanguage(
				request.headers.get("Accept-Language"),
			);
			return Response.redirect(`${url.origin}/${lang}/`, 302);
		}

		// For all other requests, just pass them through
		return env.ASSETS.fetch(request);
	},
};

function getPreferredLanguage(acceptLanguage = "") {
	const supportedLanguages = ["pt", "es"];
	const preferredLanguages = acceptLanguage
		.split(",")
		.map((lang) =>
			lang.trim().split(";")[0].toLowerCase().slice(0, 2),
		);

	for (const lang of preferredLanguages) {
		if (supportedLanguages.includes(lang)) {
			return lang;
		}
	}

	return "es"; // Default to Spanish
}
