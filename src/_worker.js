export default {
	async fetch(request, env) {
		const url = new URL(request.url);

		// Only intercept requests to the root
		if (url.pathname === "/") {
			const accept_language =
				request.headers.get("Accept-Language") || "";
			let lang = "en"; // Default to English

			if (accept_language.startsWith("de")) {
				lang = "de";
			} else if (accept_language.startsWith("es")) {
				lang = "es";
			}

			// Redirect to the appropriate language version
			return Response.redirect(`${url.origin}/${lang}/`, 302);
		}

		// For all other requests, just pass them through
		return env.ASSETS.fetch(request);
	},
};
