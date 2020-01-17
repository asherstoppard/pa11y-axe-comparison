import chalk from 'chalk'

/**
 * Chalk formatting for pa11y type outputs
 * @type {function} - CLI Formatter
 */
const formatters = {
	notice: chalk.cyan,
	warning: chalk.yellow,
	error: chalk.red
}

export default formatters
