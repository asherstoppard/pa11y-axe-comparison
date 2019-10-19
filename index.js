import {
	runReport,
	generateOutput,
	cliOutput
} from './src'

const baseUrl = 'https://asherstoppard.com'

/**
 * URL's to test
 * @type {string[]}
 */
const urls = [
	'/',
	// '/styles',
	// '/projects'
].map(path => `${baseUrl}${path}`)

/**
 * Execute function for the pa11y suite
 * @returns {Promise<void>}
 */
const execute = async () => {
	const data = await runReport(urls)
	await generateOutput(data)
	const code = await cliOutput(data)
	process.exit(code)
}

export default execute()
