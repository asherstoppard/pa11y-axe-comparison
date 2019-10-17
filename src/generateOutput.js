const fse = require('fs-extra')
const Handlebars = require('handlebars')

const generateOutput = async report => {
	// return console.log(JSON.stringify(report, null, 2))
	const source = await fse.readFile(`${__dirname}/template/index.html`)
	const template = Handlebars.compile(source.toString())
	await fse.outputFile(`${__dirname}/../report/index.html`, template({report}))
}

module.exports = generateOutput
