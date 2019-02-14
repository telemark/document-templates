const test = require('ava')
const getTemplate = require('../../index')
const templates = require('../../templates/avtaler.json')

const expectedData = {
  file: 'elevpc.docx',
  name: 'Avtale om leasing-pc fra Telemark fylkeskommune',
  dueDays: 75,
  dueDate: false,
  expireDate: false,
  expireDays: false,
  requireDigitalSignature: true,
  requireGuardianSignature: true,
  requireGuardianConsent: true,
  dropManualDistribution: false,
  archive: {
    Category: 'Dokument ut',
    SignOff: true,
    AccessCode: '13',
    Paragraph: 'Offl §13 jfr Fvl §13.1',
    NoarkClassificationCode: 'B31',
    Status: 'J',
    Title: 'Leieavtale elev-pc'
  },
  distribution: {
    kunDigitalLevering: true,
    lenker: [
      {
        ledetekst: 'Mer informasjon:',
        urlLenke: 'https://www.telemark.no/Vaare-tjenester/Utdanning/For-elever/PC-i-skolen',
        urlTekst: 'PC i skolen'
      },
      {
        ledetekst: 'Se også:',
        urlLenke: 'https://www.telemark.no/Vaare-tjenester/Utdanning/For-elever/PC-i-skolen/Artikler/Leasing-PC',
        urlTekst: 'Leasing PC'
      },
      {
        ledetekst: 'Prøveordning:',
        urlLenke: 'https://www.telemark.no/Vaare-tjenester/Utdanning/For-elever/PC-i-skolen/Artikler/Egen-PC-proeveordning',
        urlTekst: 'Bruk egen PC'
      }
    ]
  }
}

test('It returns data if template exists', t => {
  Object.keys(templates).forEach(template => t.truthy(getTemplate({ domain: 'avtaler', templateId: template })))
})

test('It returns expected metadata', t => {
  let template = getTemplate({ domain: 'avtaler', templateId: 'elevpc' })
  delete template.filePath
  t.deepEqual(expectedData, template, 'Data OK')
})

test('Requires input - options object', t => {
  const error = t.throws(() => getTemplate())

  t.is(error.message, 'Missing required input: options object')
})

test('Requires input - options.domain', t => {
  const error = t.throws(() => getTemplate({}))

  t.is(error.message, 'Missing required input: options.domain')
})

test('Requires input - options.templateId', t => {
  const error = t.throws(() => getTemplate({ domain: 'avtaler' }))

  t.is(error.message, 'Missing required input: options.templateId')
})

test('Throws if domain does not exist', t => {
  const error = t.throws(() => getTemplate({ domain: 'finnes-ikke', templateId: 'finnes-ikke' }))

  t.is(error.message, 'Cannot find module \'./templates/finnes-ikke.json\'')
})

test('Throws if template does not exist', t => {
  const error = t.throws(() => getTemplate({ domain: 'avtaler', templateId: 'finnes-ikke' }))

  t.is(error.message, 'Template not found')
})