import React from 'react'

export default async function HomePage() {
  const name = process.env.IMPRESSUM_NAME
  const street = process.env.IMPRESSUM_STREET
  const postcode_town = process.env.IMPRESSUM_POSTCODE_TOWN
  const mail = process.env.IMPRESSUM_MAIL

  return (
    // commented out  min-h-screen to prevent excess whitespace on homepage
    <div className="flex flex-col  min-h-screen bg-white">
      <div className="w-full sm:w-11/12 md:w-4/5 lg:w-2/3 mx-auto mt-20 px-8 md:px-12 lg:px-24 lg:pb-36 md:pb-24">
        <div className="mt-4 p-4 bg-gray-100 rounded overflow-x-auto">
          <h1 className="text-2xl text-bold pt-4 pb-8">Impressum</h1>

          <p className="pb-8">
            {name}
            <br />
            {street}
            <br />
            {postcode_town}
            <br />
            {mail}
          </p>

          <h2 className="text-xl text-bold pb-4">Urheberrecht</h2>
          <p className="pb-8">
            Die hier abrufbaren Inhalte und Dateien sind urheberrechtlich geschützt und dürfen nicht
            verwendet werden. Änderung, kommerzielle Nutzung, Weitergabe oder sonstige weitergehende
            Nutzung stellen einen Urheberrechtsverstoß dar.
          </p>

          <h2 className="text-xl text-bold pb-4">Haftungsausschluss (Disclaimer)</h2>
          <p className="pb-4">
            Die bereitgestellten Informationen auf dieser Website wurden sorgfältig geprüft und
            werden regelmäßig aktualisiert. Jedoch kann keine Garantie dafür übernommen werden, dass
            alle Angaben zu jeder Zeit vollständig, richtig und in letzter Aktualität dargestellt
            sind. Dies gilt insbesondere für alle Verbindungen ("Links") zu anderen Websites, auf
            die direkt oder indirekt verwiesen wird. Alle Angaben können ohne vorherige Ankündigung
            geändert, entfernt oder ergänzt werden.
          </p>
        </div>
      </div>
    </div>
  )
}
