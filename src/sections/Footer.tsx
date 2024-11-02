import React, { useState } from 'react'

const Footer:React.FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <section className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
        <div className='text-white-500 gap-2'>
            <p>
            © 2024 SKOPE KOMMUNIKATION. 
            </p>
            <p>
            Alla rättigheter förbehållna.
            </p>
        </div>
        <div className='flex gap-3'>
            <div className='social-icon'>
                <img src="/assets/linkedin.svg" alt="linkedin"className='w-1/2 h-1/2' />
            </div>
            <div className='social-icon'>
                <img src="/assets/instagram.svg" alt="instagram"className='w-1/2 h-1/2' />
            </div>
            <div className='social-icon'>
                <img src="/assets/x-icon.svg" alt="x"className='w-1/2 h-1/2' />
            </div>
        </div>
        <div>
            <p className='text-white-500 underline cursor-pointer' onClick={() => setIsOpen(true)}>
                Integritetspolicy
            </p>
            <p className='text-white-500'>
                Page created by <a href="https://fredriks-portfolio.web.app/"><span className='underline'>FredDev</span></a>
            </p>
        </div>
        {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 max-w-2xl max-h-screen overflow-y-auto">
            <h2 className="text-2xl font-semibold mb-4">Integritetspolicy</h2>
            <h3 className='text-xl font-semibold mb-3'>Inledning</h3>
            <p className="text-gray-700">
            Vi respekterar din integritet och har åtagit oss att skydda dina personuppgifter. Denna integritetspolicy förklarar hur Skope kommunikation AB,
            organisationsnummer 559470-2507 samlar in, använder, bevarar och skyddar dina uppgifter när du besöker vår hemsida skope.se.
            </p>
            <h3 className='text-xl font-semibold mt-3 mb-3'>Data vi samlar in</h3>
            <p className="text-gray-700">
            Vi samlar in och behandlar följande data om dig:
            </p>
            <p className='text-gray-700 font-bold'>- Kontaktinformation: <span className='text-gray-700 font-normal'> När du fyller i formulär på vår webbplats, 
                som kontaktformulär eller nyhetsbrevsprenumerationer, samlar vi in personlig information såsom namn, e-postadress och telefonnummer.</span>
            </p>
            <p className='text-gray-700 font-bold'>- Användardata: <span className='text-gray-700 font-normal'> Vi kan samla in information om ditt besök och hur du interagerar med vår webbplats, 
                inklusive geografisk plats, webbläsartyp, källa till ditt besök, längd på besöket och visade sidor.</span>
            </p>
            <p className='text-gray-700 font-bold'>- Teknisk data: <span className='text-gray-700 font-normal'>  Vi kan samla in teknisk information som IP-adress, webbläsartyp och -version, 
                tidszon och plats, operativsystem och plattform.</span>
            </p>
            <h3 className='text-xl font-semibold mt-3 mb-3'>Hur vi använder din data</h3>
            <p className="text-gray-700">
                Vi använder insamlade uppgifter för att:
            </p>
            <p className='text-gray-700'>
            - Tillhandahålla och förbättra vår webbplats och tjänster.
            </p>
            <p className='text-gray-700'>
            - Skicka information om våra tjänster och erbjudanden, om du har godkänt detta.
            </p>
            <p className='text-gray-700'>
            - Förstå hur vår webbplats används för att förbättra användarupplevelsen.
            </p>
            <h3 className='text-xl font-semibold mt-3 mb-3'>Delning av dina data</h3>
            <p className='text-gray-700'>
                Vi delar inte dina personuppgifter med tredje parter utan ditt uttryckliga samtycke, förutom i följande fall:
            </p>
            <p className='text-gray-700'>
            - För att följa lagliga förpliktelser eller svara på juridiska processer.   
            </p>
            <p className='text-gray-700'>
            - För att skydda rättigheter och säkerhet för vårt företag, våra användare och allmänheten. 
            </p>
            <h3 className='text-xl font-semibold mt-3 mb-3'>Dina rättigheter</h3>
            <p className='text-gray-700'>
            Som användare har du rätt att:
            </p>
            <p className='text-gray-700'>
            - Begära tillgång till och rättelse eller radering av dina personuppgifter.
            </p>
            <p className='text-gray-700'>
            - Invända mot behandlingen av dina personuppgifter.
            </p>
            <p className='text-gray-700'>
            - Begära begränsning av behandlingen av dina personuppgifter.
            </p>
            <p className='text-gray-700'>
            - Begära överföring av dina personuppgifter.
            </p>
            <p className='text-gray-700'>
            Om du har några frågor eller förfrågningar angående denna integritetspolicy, vänligen kontakta oss på: info@skope.se.
            </p>
            <h3 className='text-xl font-semibold mt-3 mb-3'>Ändringar i denna policy</h3>
            <p className='text-gray-700'>
            Vi kan uppdatera denna integritetspolicy från tid till annan. Vi kommer att meddela dig om några väsentliga ändringar genom att publicera den nya policyn på vår webbplats.
            </p>
            <h3 className='text-xl font-semibold mt-3 mb-3'>Vår cookiepolicy</h3>
            <p className='text-gray-700'>
            På Skope respekterar vi din integritet och strävar efter att vara transparenta om vår användning av cookies på vår webbplats. En cookie är en liten textfil som lagras på din enhet
            när du besöker en webbplats. Den hjälper oss att förbättra din användarupplevelse och samla in statistik för webbanalys.
            </p>
            <h4 className='text-md font-semibold'>Typer av cookies vi använder</h4>
            <p className='text-gray-700 font-semibold'>Nödvändiga cookies: <span className='font-normal'>Dessa cookies är viktiga för att webbplatsens grundläggande funktioner, såsom vårt 
                kontaktformulär, ska fungera korrekt. De samlar inte in någon personlig information.</span>
            </p>
            <p className='text-gray-700 font-semibold'>Prestanda och analyscookies: <span className='font-normal'>Dessa cookies används för att samla in anonym information om hur 
                besökare interagerar med vår webbplats. Detta inkluderar antalet besökare, vilka sidor som är populära, och hur besökare rör sig på webbplatsen.</span>
            </p>
            <h3 className='text-xl font-semibold mt-3 mb-3'>Ditt samtycke och val</h3>
            <p className='text-gray-700'>
            När du besöker vår webbplats för första gången kommer en cookie-banner att informera dig om vår användning av cookies och be om ditt samtycke. Du kommer att ha möjlighet att godkänna 
            alla cookies, endast nödvändiga cookies eller avböja. Du kan ändra dina cookie-inställningar när som helst genom att klicka på cookie-inställningsikonen som finns tillgänglig på vår webbplats
            nere i vänstra hörnet. Observera att om du väljer att inte acceptera cookies, kan detta påverka din upplevelse och vissa funktioner på webbplatsen kan bli begränsade.
            Har du frågor eller funderingar om vår användning av cookies är du välkommen att kontakta oss på: info@skope.se. Vi lagrar alla cookiemedgivanden i fem år.
            </p>
            <button
              className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Stäng
            </button>
          </div>
        </div>
      )}
    </section>
    
  )
}

export default Footer