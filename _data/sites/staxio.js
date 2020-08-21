module.exports = {
	name: "stax.io", // optional, falls back to object key
	description: "Stax public web site",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	// skip: !process.env.CONTEXT || process.env.SITE_NAME !== "speedlify",
	options: {
		frequency: 60 * 1, // 1 hour
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "run",
    // Data directory, results go into `_data/manual` instead of `_data/results`
		useManualResultsDir: false,
	},
	urls: [
		"https://www.stax.io/",
		"https://www.stax.io/careers/",
		"https://www.stax.io/docs/",
		"https://www.stax.io/blog/2020-02-26-why-we-built-stax-frombespoke-buildsto-automated-best-practice-deployments/",
	]
};
