import pa11y from 'pa11y'

/**
 * Runs given URL's through the pa11y binary
 * @param urls {array} - Array of URL's to test
 * @returns {Promise<array>}
 */
const runReport = urls => Promise.all(
	urls
		.map(async url => await pa11y(url, {
			// includeWarnings: true,
			// includeNotices: true
			standard: 'WCAG2A'
		}))
)

export default runReport
