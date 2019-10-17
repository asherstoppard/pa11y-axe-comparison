const pa11y = require('pa11y')

const baseUrl = 'https://www.milesandlincoln.com'
const basePath = ''

const paths = [
	'/',
	'/styles',
	'/projects'
]

const runReport = () => Promise.all(
	paths
		.map(path => `${baseUrl}${basePath}${path}`)
		.map(async url => await pa11y(url, {
			includeWarnings: true,
			includeNotices: true
		}))
)

module.exports = runReport
