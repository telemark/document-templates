const path = require('path')

module.exports = options => {
  if (!options) {
    throw new Error('Missing required input: options object')
  }

  if (!options.domain) {
    throw new Error('Missing required input: options.domain')
  }

  if (!options.templateId) {
    throw new Error('Missing required input: options.templateId')
  }

  const domain = require(`./templates/${options.domain}.json`)
  let document = domain[options.templateId]

  if (!document) {
    throw new Error('Template not found')
  }

  document.filePath = path.join(__dirname, `templates/${options.domain}`, document.file)

  return document
}
