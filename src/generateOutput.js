import fse from 'fs-extra'
import Handlebars from 'handlebars'

/**
 * Generates report based on array of pa11y reports
 * @param report {array} - Array of pa11y reports
 * @returns {Promise<void>} - Result of report generation
 */
const generateOutput = async report => {
	const source = await fse.readFile(`${__dirname}/template/index.html`)
	const template = Handlebars.compile(source.toString())
	await fse.outputFile(`${__dirname}/../report/index.html`, template({report}))
}

export default generateOutput
