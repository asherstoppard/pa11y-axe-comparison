const runReport = require('./src/runReport')
const generateOutput = require('./src/generateOutput')

execute = async () => {
	const data = await runReport()
	await generateOutput(data)
}

module.exports = execute()
