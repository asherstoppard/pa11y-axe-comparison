import {
	runReport,
	generateOutput,
	cliOutput
} from './src'

const baseUrl = 'https://www.milesandlincoln.com'

const urls = [
	'/',
	'/styles',
	'/projects'
].map(path => `${baseUrl}${path}`)

const execute = async () => {
	const data = await runReport(urls)
	await generateOutput(data)
	const code = await cliOutput(data)
	process.exit(code)
}

export default execute()
