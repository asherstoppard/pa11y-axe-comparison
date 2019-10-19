import chalk from 'chalk'
import cowsay from 'cowsay'
import formatters from './formatters'

/**
 * Outputs test results to the CLI
 * @param reports {array} - Array of pa11y reports
 * @returns {number} - Exit code
 */
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
	const hasFailed = count.error > 0
	console.log('Pa11y test complete')
	console.log(cowsay.say({ ...(hasFailed ? {text: chalk.red('FAILED'), e: 'xx'} : {text: chalk.greenBright('PASSED')})}))
	if(hasFailed) {
		console.log('Test Results')
		console.log(Object.entries(count).map(([key, val]) =>
			val > 0 ? formatters[key](`${val} ${key}s`) : ''
		).join(' '))
		return 2
	}
	return 0
}

export default cliOutput
