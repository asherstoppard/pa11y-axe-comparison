import pa11y from 'pa11y'

const runReport = urls => Promise.all(
	urls
		.map(async url => await pa11y(url, {
			includeWarnings: true,
			includeNotices: true
		}))
)

export default runReport
