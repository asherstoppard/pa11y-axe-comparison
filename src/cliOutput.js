const chalk = require('chalk')

const cliOutput = reports => {
	const count = reports.reduce((acc, { issues }) => {
		const { warning, notice, error } = issues.reduce((acc, { type }) => (
			{...acc, [type]: acc[type] + 1}
		), { warning: 0, notice: 0, error: 0})
		return {
			...acc,
			warning: acc.warning + warning,
			notice: acc.notice + notice,
			error: acc.error + error
		}
	}, {
		warning: 0, notice: 0, error: 0
	})
	if (count.notice > 0) console.log(chalk.cyan(`Pa11y: Found ${count.notice} notices`))
	if (count.warning > 0) console.log(chalk.yellow(`Pa11y: Found ${count.warning} warnings`))
	if (count.error > 0) {
		console.log(chalk.red(`Pa11y: Found ${count.error} errors`))
		return 2
	}
	return 0
}

module.exports = cliOutput
