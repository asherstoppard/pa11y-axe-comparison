import fse from 'fs-extra'
import Handlebars from 'handlebars'

const generateOutput = async report => {
	const source = await fse.readFile(`${__dirname}/template/index.html`)
	const template = Handlebars.compile(source.toString())
	await fse.outputFile(`${__dirname}/../report/index.html`, template({report}))
}

export default generateOutput
