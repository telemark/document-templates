# Maler

Modulen inneholder maler for varsler og elevsamtaler

# Maler - Varsler

Modulen inneholder 3 maler for varsel og 2 for interne notater dersom det skal distribueres varsel til elever med hemmelig adresse eller
elever hvor man ikke har fått foresattes adresse fra folkeregisteret.

Varselmalene er [atferd](../templates/atferd.docx), [fag](../templates/fag.docx) og [orden](../templates/orden.docx).

Notatmalene er [hemmelig-adresse](../templates/hemmelig-adresse.docx) og [foresatte](../templates/foresatte.docx)

## Atferd

Denne malen benyttes dersom det er fare for nedsatt karakter i oppførsel.

Koder som benyttes:

- ```{navnElev}``` Elevens fulle navn
- ```{navnAvsender}``` Navn på den som sender varselet
- ```{navnSkole}``` Skolens navn
- ```{tlfSkole}``` Skolens telefonnummer
- ```{dato}``` Dato for produksjon av varselet på formatet dd.mm.åååå
- ```{Arsak}``` Årsak(er) til at varselet sendes. Kan inneholde flere linjer adskilt med ```\n```
- ```{varselPeriode}``` Halvårsvurdering 1. termin, 2. termin eller standpunktkarakter
- ```{skoleAar}``` Hvilket skoleår

## Fag

Denne malen benyttes dersom det er fare for nedsatt karakter i ett eller flere fag.

Koder som benyttes:

- ```{navnElev}``` Elevens fulle navn
- ```{navnAvsender}``` Navn på den som sender varselet
- ```{navnSkole}``` Skolens navn
- ```{tlfSkole}``` Skolens telefonnummer
- ```{dato}``` Dato for produksjon av varselet på formatet dd.mm.åååå
- ```{Arsak}``` Årsak(er) til at varselet sendes. Kan inneholde flere linjer adskilt med ```\n```
- ```{fag}``` Fag varselet omfatter. Kan inneholde flere linjer adskilt med ```\n```
- ```{varselPeriode}``` Halvårsvurdering 1. termin, 2. termin eller standpunktkarakter
- ```{skoleAar}``` Hvilket skoleår

## Orden

Denne malen benyttes dersom det er fare for nedsatt karakter i orden.

Koder som benyttes:

- ```{navnElev}``` Elevens fulle navn
- ```{navnAvsender}``` Navn på den som sender varselet
- ```{navnSkole}``` Skolens navn
- ```{tlfSkole}``` Skolens telefonnummer
- ```{dato}``` Dato for produksjon av varselet på formatet dd.mm.åååå
- ```{Arsak}``` Årsak(er) til at varselet sendes. Kan inneholde flere linjer adskilt med ```\n```
- ```{varselPeriode}``` Halvårsvurdering 1. termin, 2. termin eller standpunktkarakter
- ```{skoleAar}``` Hvilket skoleår

## Hemmelig adresse

Denne malen benyttes dersom varselet skal distribueres til elever med hemmelig adresse.

I slike tilfeller vil det produseres og arkiveres et varsel som vanlig, men det sendes et internt notat via sak/arkiv-systemet til elevens skole.
Deretter vil varselet bli skrevet ut og distribuert etter gjeldende avtale for den enkelte elev.

Koder som benyttes:

- ```{dato}``` Dato for produksjon av notatet på formatet dd.mm.åååå
- ```{navnElev}``` Elevens fulle navn
- ```{klasseElev}``` Elevens klasse
- ```{navnAvsender}``` Navn på den som sender varselet
- ```{navnSkole}``` Skolen som skal distribuere varselet

## Ikke lik folkeregistrert adresse

Denne malen benyttes dersom varselet skal distribueres til foresatte og ingen av de man fant på dsf har lik adresse som eleven.

I slike tilfeller vil det produseres og arkiveres et varsel som vanlig, men det sendes et internt notat via sak/arkiv-systemet til elevens skole.
Deretter vil varselet bli skrevet ut og distribuert etter gjeldende avtale for den enkelte elev.

Koder som benyttes:

- ```{dato}``` Dato for produksjon av notatet på formatet dd.mm.åååå
- ```{navnElev}``` Elevens fulle navn
- ```{klasseElev}``` Elevens klasse
- ```{navnAvsender}``` Navn på den som sender varselet
- ```{navnSkole}``` Skolen som skal distribuere varselet

# Maler - Elevsamtaler

Maler for å dokumentere avholdt samtale eller avslått tilbud om samtale.
I tillegg et internt notat som benyttes ved hemmelig adresse

## Samtale

Denne malen benyttes for å dokumentere avholdt samtale

Koder som benyttes:

- ```{dato}``` Dato for produksjon av dokumentet på formatet dd.mm.åååå
- ```{datoSamtale}``` Dato gjennomført samtale på formatet dd.mm.åååå
- ```{navnElev}``` Elevens fulle navn
- ```{navnAvsender}``` Navn på den som har avholdt samtalen
- ```{navnSkole}``` Skolen eleven går på


## Ikke samtale

Denne malen benyttes for å dokumentere at tilbudt samtale ikke er mottat

Koder som benyttes:

- ```{dato}``` Dato for produksjon av dokumentet på formatet dd.mm.åååå
- ```{datoSamtale}``` Dato gjennomført samtale på formatet dd.mm.åååå
- ```{navnElev}``` Elevens fulle navn
- ```{navnAvsender}``` Navn på den som har avholdt samtalen
- ```{navnSkole}``` Skolen eleven går på
- ```{tlfSkole}``` Skolens telefonnummer

## Hemmelig adresse ikke samtale

Internt notat ang manuell distribusjon av kvittering for avslått samtale

## Notat

Denne malen benyttes for å skrive notater til elevmappa.

Koder som benyttes:

- ```{dato}``` Dato for notatet
- ```{innholdNotat}``` Notatets innhold
- ```{navnElev}``` Elevens navn
- ```{navnAvsender}``` Lærers navn
- ```{navnSkole}``` Skolens navn


# Maler - YFF

Maler for ulike skjemaer tilknyttet YFF.

## Tilbakemelding

Denne malen benyttes for å dokumentere tilbakemelding fra bedrift til elev

Koder som benyttes:

- ```{navnElev}``` Elevens fulle navn
- ```{fodselsdatoElev}``` Elevens fødselsdato på formatet dd.mm.åååå
- ```{utdanningprogramElev}``` Elevens utdanningsprogram
- ```{navnSkole}``` Skolen eleven går på
- ```{dato}``` Dato for produksjon av dokumentet på formatet dd.mm.åååå
- ```{navnArbeidssted}``` Navn på bedrift/organisasjon
- ```{tidsromInformasjonsbrev}``` Tidsrom for utplassering
- ```{skoleAar}``` Skoleår
- ```{kompetansemaalElevenslokalelaereplan}``` Elevens kompetansemål
- ```{fravaerantalldager}``` Antall dager fravær
- ```{fravaerantalltimer}``` Antall timer fravær
- ```{navnAvsender}``` Navn på lærer
- ```{tlfSkole}``` Skolens telefonnummer

## Informasjonsskriv

Denne malen benyttes for å dokumentere avtale mellom bedrift, skole og elev

Koder som benyttes:

- ```{navnElev}``` Elevens fulle navn
- ```{navnArbeidssted}``` Navn på arbeidssted
- ```{navnSkole}``` Skolen eleven går på
- ```{dato}``` Dato for produksjon av dokumentet på formatet dd.mm.åååå
- ```{utdanningsprogram}``` Utdanningsprogram for eleven
- ```{skoleAar}``` Skoleår
- ```{tidsrom}``` Tidsrom for utplasseringen
- ```{arbeidstid}``` Arbeidstid under utplassering
- ```{fodselsdatoElev}``` Elevens fødselsdato på formatet dd.mm.ååå
- ```{tlfElev}``` Elevens telefonnummer
- ```{epostElev}``` Elevens e-post
- ```{navnPaarorende}``` Navn på elevens pårørende
- ```{tlfPaarorende}``` Telefonnummer for elevens pårørende
- ```{epostPaarorende}``` E-post for elevens pårørende
- ```{kontaktpersonArbeidssted}``` Kontaktperson for eleven på utplasseringsstedet
- ```{tlfKontaktperson}``` Telefonnummer til elevens kontaktperson på utplasseringsstedet
- ```{epostKontaktperson}``` e-post til elevens kontaktperson på utplasseringsstedet
- ```{navnLaerer}``` Elevens lærer
- ```{tlfLaerer}``` Telefonnummer til elevens lærer
- ```{epostLaerer}``` E-post til elevens lærer
- ```{navnAvsender}``` Navn på lærer
- ```{tlfSkole}``` Telefonnummer yil elevens skole
- ```{kopiTilEpost}``` Viser om noen har fått dokumentet i kopi pr e-post

## Lokal læreplan

Denne malen benyttes for å dokumentere elevens lokale læreplan

Koder som benyttes:

- ```{skole}``` Skolens navn
- ```{skoleAar}``` Skoleår
- ```{navnElev}``` Navn elev
- ```{fødselsnrElev}``` Fødselsnummer elev
- ```{tlfElev}``` Telefonnummer elev
- ```{utdanningsprogramElev}``` Elevens utdanningsprogram
- ```{laereplan}```	 Læreplanen
- ```{navnLaerer}``` Navn lærer
- ```{tlfLaerer}``` Telefonnummer lærer
- ```{navnArbeidssted}``` Navn på arbeidssted
- ```{tlfArbeidssted}``` Telefonnummer arbeidssted
- ```{tidsromInformasjonsbrev}``` Tidsrom for utplassering
- ```{kontaktpersonArbeidssted}``` Kontaktperson arbeidssted
- ```{tlfArbeidssted}``` Telefonnummer arbeidssted
- ```{Kompetansemaal}``` Kompetansemål
- ```{Samarbeid med andre skoler}``` Samarbeid
- ```{Ungdomsbedrift}``` Ungdomsbedrift
- ```{Fellesfag}``` Fellesfag
- ```{navnAvsender}``` Lærerenes navn
- ```{navnSkole}``` Skolens navn
- ```{tlfSkole}``` Skolens telefonnummer

# Maler - Lærekontrakt

Maler for ulike skjemaer tilknyttet lærekontrakter.

## Kontrakt signert

Denne malen benyttes for følgebrev når lærekontrakt er signert

Koder som benyttes:

- ```{navnElev}``` Elevens fulle navn
- ```{adresseElev}``` Elevens gateadresse, folkeregistrert bosted
- ```{postnummerElev}``` Elevens postnummer, folkeregistrert bosted
- ```{poststedElev}``` Elevens poststed, folkeregistrert bosted
- ```{dato}``` Dato for produksjon av dokumentet på formatet dd.mm.åååå

## Kontrakt signert - hemmelig adresse

Denne malen benyttes for følgebrev når lærekontrakt er signert og eleven har hemmelig adresse eller man ikke får treff hos folkeregisteret

Koder som benyttes:

- ```{navnElev}``` Elevens fulle navn
- ```{dato}``` Dato for produksjon av dokumentet på formatet dd.mm.åååå