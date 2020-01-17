import fse from 'fs-extra'
import Handlebars from 'handlebars'

/**
 * Generates report based on array of pa11y reports
 * @returns {Promise<void>} - Result of report generation
 */
const runReport = async () => {
	const source = await fse.readFile(`${__dirname}/template/index.html`)
	const results = await fse.readFile(`${__dirname}/report/results.json`)
	const report = JSON.parse(results.toString())
	const template = Handlebars.compile(source.toString())
	const node = report[0].violations[0].nodes[0]
	console.log({type: typeof node, node})
	await fse.outputFile(`${__dirname}/report/index.html`, template({ report }))
}

export default runReport()

