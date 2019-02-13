const test = require('ava')
const { readdirSync } = require('fs')

test('All files are available', async t => {
  const content = readdirSync('templates')
  const templates = content.filter(item => /.json/.test(item))
  templates.forEach(template => {
    const domain = template.replace('.json', '')
    const index = require(`../../templates/${template}`)
    const files = readdirSync(`templates/${domain}`)
    const allFiles = Object.values(index).map(template => template.file)
    allFiles.forEach(template => {
      t.deepEqual(files.includes(template), true, `${template} ok`)
    })
  })
})
