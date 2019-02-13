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

  const templates = require(`./templates/${options.domain}.json`)

  if (!templates) {
    throw new Error('Domain not found')
  }

  let document = templates[options.id]

  if (!document) {
    throw new Error('Template not found')
  }

  document.filePath = path.join(__dirname, `templates/${options.domain}`, document.file)

  return document
}
