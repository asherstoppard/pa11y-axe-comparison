import pa11y from 'pa11y'
import { URL } from 'url'

const baseUrl = 'https://www.milesandlincoln.com'

const paths = [
	'/',
	'/styles',
	'/projects'
]

const runReport = () => Promise.all(
	paths
		.map(path => `${baseUrl}${path}`)
		.map(async url => await pa11y(url, {
			includeWarnings: true,
			includeNotices: true
		}))
)

export default runReport
