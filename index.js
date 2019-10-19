import {
	runReport,
	generateOutput,
	cliOutput
} from './src'

const execute = async () => {
	const data = await runReport()
	await generateOutput(data)
	const code = await cliOutput(data)
	process.exit(code)
}

export default execute()
