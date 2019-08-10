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
  const document = domain[options.templateId.toLowerCase()]

  if (!document) {
    throw new Error('Template not found')
  }

  if (document.file) {
    document.filePath = path.join(__dirname, `templates/${options.domain}`, document.file)
  } else {
    document.filePath = false
  }

  return document
}
