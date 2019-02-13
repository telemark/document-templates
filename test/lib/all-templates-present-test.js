const test = require('ava')
const { readdir } = require('fs').promises

test('All files are available', async t => {
  const content = await readdir('templates')
  const templates = content.filter(item => /.json/.test(item))
  templates.forEach(async template => {
    const domain = template.replace('.json', '')
    const index = require(`../../templates/${template}`)
    const files = await readdir(`templates/${domain}`)
    const allFiles = Object.values(index).map(template => template.file)
    allFiles.forEach(template => {
      t.deepEqual(files.includes(template), true, `${template} ok`)
    })
  })
})
