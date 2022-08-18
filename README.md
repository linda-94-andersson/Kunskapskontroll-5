# CAT PAGE

A site where you can look at cats.

https://kunskapskontroll-5.netlify.app

## Skills used for this project
* HTML
* SCSS
* SASS
* Gulp
* JavaScript
* jQuery
* API
* Snowpack
* Netlify

## Requirements

Ni ska bygga ett mer “riktigt projekt” i kursens sista Kunskapskontroll. Detta kommer träna er i användning av hämtning av data från en extern webbtjänst/API via fetch. Uppgiften kommer även hjälpa er att förstå hur Node och NPM platsar i en modern hemsidas verktygslåda. Det sistnämnda kommer leda till att ni blir skickligare användare av terminalen, vilket kommer underlätta för er senare i utbildningen.

Precis som tidigare så kommer detta även kräva en del från er vad gäller tolkandet av en kravspecifikation.

Vad som ska byggas är en hemsida som visar information om katter från https://thecatapi.com/ (Links to an external site.), vilket är en öppen webbtjänst som bl. a kan returnera en lista av bilder på katter! Vad som behövs för att komma igång med den här webbtjänsten är en API nyckel, vilket vi får gratis om vi signar upp med email och lösenord. Allt detta sker på länken ovan, och vi ska tillsammans förstå hur detta kan göras så att ni kan komma igång.

OBS! Gratis för den här webbtjänsten är 10,000 requests / month. Det är ingen risk att ni överskrider detta, men det är alltid bra att känna till gränsen. Om ni råkar skriva någon oändlig loop som gör massor av anrop så kan det vara så att ni slår i taket och ej får ett svar pga att de har begränsat er åtkomst till tjänsten.

URL:en som vi kommer integrera mot ser ut som följande:

https://api.thecatapi.com/v1/images/search (Links to an external site.)

och den är dokumenterad på följande länk: https://docs.thecatapi.com/pagination (Links to an external site.)

För att kunna göra ett anrop så behövs att en HTTP header skickas med i formatet “x-api-key”: <API_KEY>.

### För att uppnå Godkänt är kraven att:

* Hemsidan ska innehålla en HTML-sida, nämligen index.html.

* Den här sidan ska innehålla två knappar, “Previous” och “Next”.

* När användaren först öppnar hemsidan så syns dessa två knappar.

* Utöver dessa två knappar så ska en lista av 12 bilder på katter synas direkt, som har hämtats från URL:en som är beskriven ovan. Det är dokumenterat på https://docs.thecatapi.com/pagination (Links to an external site.) hur du kan välja hur många du vill få tillbaka i ditt svar. Du använder query param limit.

* Utöver att välja hur många bilder du vill få tillbaka i ditt svar, så stöder även webbtjänsten att konfigurera bläddrandet från en sida till en annan. Detta är också dokumenterat via query param page.

* Vid laddning av sidan så kommer 12 katter alltså att visas. I det här skedet så befinner vi oss enligt tjänsten på “sida 0”. Detta vill vi visa på vår hemsida i form av “Showing page 0”.

* Som du kan tänka dig så går det inte att bläddra bakåt från sida 0. När sidan först laddas så ska knappen “Previous” vara disabled, dvs. ej klickbar.

* Vid klick på knappen “Next” så ska vi hämta 12 nya bilder från webbtjänsten genom att “gå till nästa sida”. Så fort vi befinner oss på sida 1 så aktiveras även knappen “Previous”. “Previous” ska alltså vara disabled på sida 0, men annars ska båda knapparna vara enabled/klickbara.

* Vid bläddrandet av en sida till en annan så ska “Showing page <PAGE>” att uppdateras.

* När ni först börjar använda webbtjänsten så lär ni märka att det verkar som att ni får tillbaks “random bilder” även fast ni bläddrar tillbaka till en sida ni redan besökt. Detta är eftersom ni har glömt att sätta order som query param. Läs om detta på https://docs.thecatapi.com/pagination#pagination--ordering (Links to an external site.). Ni ska använda order för att få “förutsägbart bläddrande”. Ni ska använda asc som värde för order. Detta betyder att svaren kommer i “stigande” ordning.

* Projektet ska vara uppsatt med Node, NPM och Snowpack som vi har gått igenom. Detta innebär att ni ska ha kört npm init och att ni har installerat Snowpack med NPM. När jag laddar ner ert projekt lokalt så ska jag kunna skriva npm run build för att titta på projektet (alltså det som dyker upp i katalogen build).

* Inget krav på “optimering” av bygg-steget build, men en rekommendation är att använda det “inbyggda” stödet som vi lärde oss om i veckan.

* Det är helt okej att installera andra paket än bara Snowpack för att bygga er lösning. jQuery, Lodash är två exempel vi har tittat på, men som ni märkt så är ekosystemet inom NPM oändligt.

* Inget krav på hur JS skrivs (traditionell extern JS-fil, inline JS, ESM etc). Jag rekommenderar moduler + extern JS-fil, då det “håller isär” HTML och logiken bättre än att blanda allting i samma fil.

* Inget krav på hur HTML skrivs (men semantisk HTML är fortfarande en bra rekommendation)

* Inget krav på hur CSS skrivs, men en rekommendation är fortfarande att strukturera projektet enligt “funktioner” som vi lärde oss i Kunskapskontroll 1.

* Inget krav på presentation eller design av hemsidan. Bygg det hur “fult” eller “snyggt” som ni vill. Det är ingenting som betygssätts. Det är funktionen som är viktig.

* Leverans av projektet sker via .zip i Canvas. Leveransen ska innehålla hela projektets kod, dvs. inte endast vad som skapas vid npm run build. Detta är eftersom att jag själv kommer installera ert projekt och köra detta script. Ta gärna bort node_modules och build innan ni skapar er .zip då detta kommer att minska storleken på er .zip. Detta är inget krav dock.

* Länk till GitHub kommer ej att tillåtas som leveransalternativ, men det uppmuntras att ni använder det som ett verktyg under tiden ni utvecklar projektet. Versionshantering är alltid en bra sak.

### För att uppnå Väl Godkänt är kraven (utöver ovan nämnda krav för Godkänt):

* Om användaren är offline när ett anrop har gjorts till webbtjänsten så ska programmet hantera detta. Exempelvis genom att visa “Something went wrong while fetching data from the server” för användaren.

* När ett anrop till webbtjänsten är “in progress” så vill vi visa detta på något sätt för användaren. Exempelvis “Loading…” eller en “spinner ikon” är vanliga lösningar här. När anropet är färdigt så kommer denna text att försvinna och ersättas med antingen bilderna som returnerats från webbtjänsten, eller felmeddelandet beskrivet ovan (om användaren är offline). 

* Under tiden ett anrop är pågående så ska även knapparna “Previous” och “Next” vara disabled.

* Bläddrande från en sida till en annan medan användaren är offline är OK. Då ska “Showing page <PAGE>” uppdateras och ett anrop ska ske varje gång användaren klickar på “Previous” eller “Next”. Tanken är att hemsidan ska fortsätta “försöka” hämta en ny sida i hopp om att hen får internet snart, i takt med att hen bläddrar.

* Om webbtjänsten returnerar statuskoder som 404 eller 500 så behöver detta ej hanteras av hemsidan, utan “offline” är den enda situationen ni behöver hantera.

## Pre-requisites

Before you proceed to install you need to have following tools installd:
- [Node](https://nodejs.org/en/)

## How to install

In order to install you need to run:
```
npm install 
```
## How to run project locally (on your computer)

To setup a local development server, run:

```
npm start
```

## How to build a production bundle

To build tha app for production, run:

```
npm run build