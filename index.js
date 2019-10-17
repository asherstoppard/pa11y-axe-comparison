const runReport = require('./src/runReport')
const generateOutput = require('./src/generateOutput')
const cliOutput = require('./src/cliOutput')

execute = async () => {
	const data = await runReport()
	await generateOutput(data)
	const code = await cliOutput(data)
	process.exit(code)
}

module.exports = execute()
