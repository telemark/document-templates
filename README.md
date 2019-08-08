# document-templates

Templates for document generation

# Usage

```JavaScript
const getTemplate = require('document-templates')

console.log(getTemplate({ domain: 'avtaler', templateId: 'elevpc' }))
```

returns

```JavaScript
{ 
  "file": "elevpc.docx",
  "name": "Avtale om leasing-pc fra Telemark fylkeskommune",
  "dueDays": 75,
  "dueDate": false,
  "expireDate": false,
  "expireDays": false,
  "requireDigitalSignature": true,
  "requireGuardianSignature": true,
  "requireGuardianConsent": true,
  "dropManualDistribution": false,
  "archive": {
    "Title": "Leieavtale elev-pc",
    "Category": "Dokument ut",
    "SignOff": true,
    "AccessCode": "13",
    "Paragraph": "Offl §13 jfr Fvl §13.1",
    "NoarkClassificationCode": "B31",
    "Status": "J",
  },
  "distribution": {
    "kunDigitalLevering": true,
    "lenker": [
      {
        "ledetekst": "Mer informasjon:",
        "urlLenke": "https://www.telemark.no/Vaare-tjenester/Utdanning/For-elever/PC-i-skolen",
        "urlTekst": "PC i skolen"
      },
      {
        "ledetekst": "Se også:",
        "urlLenke": "https://www.telemark.no/Vaare-tjenester/Utdanning/For-elever/PC-i-skolen/Artikler/Leasing-PC",
        "urlTekst": "Leasing PC"
      },
      {
        "ledetekst": "Prøveordning:",
        "urlLenke": "https://www.telemark.no/Vaare-tjenester/Utdanning/For-elever/PC-i-skolen/Artikler/Egen-PC-proeveordning",
        "urlTekst": "Bruk egen PC"
      }
    ]
  },
  "agreementService": {
    "serviceUrl": "https://avtaler.api.service.t-fk.no/agreements"
  }
}
```

# Description

- [Avtaler](docs/avtaler.md)
- [MinElev](docs/minelev.md)
- [Tilskudd](docs/tilskudd.md)
- [Vigo](docs/vigo.md)

# License

[MIT](LICENSE)
