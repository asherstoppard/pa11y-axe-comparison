import chalk from 'chalk'

const formats = {
	notice: chalk.cyan,
	warning: chalk.yellow,
	error: chalk.red
}

const cliOutput = reports => {
	const count = reports.reduce((rootAcc, { issues }) => {
		const issueCount = issues.reduce((acc, { type }) => (
			{...acc, [type]: acc[type] ? acc[type] + 1 : 1}
		), {})
		return {
			...rootAcc,
			...Object.entries(issueCount).reduce((acc, [key, val]) => ({
				...acc,
				[key]: rootAcc[key] ? rootAcc[key] + val : val
			}), {})
		}
	}, {})
	console.log('Pa11y test complete')
	console.log(Object.entries(count).map(([key, val]) => val > 0 ? formats[key](`${val} ${key}s`) : '').join(' '))
	return count.error > 0 ? 2 : 0
}

export default cliOutput
