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
          <h1 className="text-2xl text-bold pt-4 pb-8">Datenschutzerklärung</h1>

          <p className="pb-2">
            Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der
            EU-Datenschutzgrundverordnung (DSGVO), ist:
          </p>

          <p className="pb-8">
            {name}
            <br />
            {street}
            <br />
            {postcode_town}
          </p>

          <h2 className="text-xl text-bold pb-4">Ihre Betroffenenrechte</h2>
          <p className="pb-4">
            Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten können Sie jederzeit
            folgende Rechte ausüben:
          </p>

          <ul>
            <li>Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung,</li>
            <li>Berichtigung unrichtiger personenbezogener Daten,</li>
            <li> Löschung Ihrer bei uns gespeicherten Daten,</li>
            <li>
              Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher
              Pflichten noch nicht löschen dürfen,
            </li>
            <li>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns und</li>
            <li>
              Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder
              einen Vertrag mit uns abgeschlossen haben.
            </li>
          </ul>

          <p className="pt-8 pb-8">
            Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung
            für die Zukunft widerrufen. Sie können sich jederzeit mit einer Beschwerde an die für
            Sie zuständige Aufsichtsbehörde wenden. Ihre zuständige Aufsichtsbehörde richtet sich
            nach dem Bundesland Ihres Wohnsitzes, Ihrer Arbeit oder der mutmaßlichen Verletzung.
            Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit Anschrift
            finden Sie unter:
            www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html.
          </p>

          <h2 className="text-xl text-bold pb-4">
            Zwecke der Datenverarbeitung durch die verantwortliche Stelle und Dritte
          </h2>
          <p className="pb-4">
            Wir verarbeiten Ihre personenbezogenen Daten nur zu den in dieser Datenschutzerklärung
            genannten Zwecken. Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als
            den genannten Zwecken findet nicht statt. Wir geben Ihre persönlichen Daten nur an
            Dritte weiter, wenn:
          </p>

          <ul>
            <li>Sie Ihre ausdrückliche Einwilligung dazu erteilt haben,</li>
            <li>die Verarbeitung zur Abwicklung eines Vertrags mit Ihnen erforderlich ist,</li>
            <li>
              die Verarbeitung zur Erfüllung einer rechtlichen Verpflichtung erforderlich ist,
            </li>
            <li>
              und kein Grund zur Annahme besteht, dass Sie ein überwiegendes schutzwürdiges
              Interesse an der Nichtweitergabe Ihrer Daten haben.
            </li>
          </ul>

          <h2 className="pt-8 text-xl text-bold pb-4">Löschung bzw. Sperrung der Daten</h2>
          <p className="pb-8">
            Wir halten uns an die Grundsätze der Datenvermeidung und Datensparsamkeit. Wir speichern
            Ihre personenbezogenen Daten daher nur so lange, wie dies zur Erreichung der hier
            genannten Zwecke erforderlich ist oder wie es die vom Gesetzgeber vorgesehenen
            vielfältigen Speicherfristen vorsehen. Nach Fortfall des jeweiligen Zweckes bzw. Ablauf
            dieser Fristen werden die entsprechenden Daten routinemäßig und entsprechend den
            gesetzlichen Vorschriften gesperrt oder gelöscht.
          </p>

          <h2 className="text-xl text-bold pb-4">Änderung unserer Datenschutzbestimmungen</h2>
          <p className="pb-8">
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den
            aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in
            der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren
            erneuten Besuch gilt dann die neue Datenschutzerklärung.
          </p>

          <h2 className="text-xl text-bold pb-4">Fragen an den Datenschutzbeauftragten</h2>
          <p className="pb-4">
            Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden
            Sie sich direkt an die für den Datenschutz verantwortliche Person in unserer
            Organisation:
          </p>

          <p className="pb-8">
            {name}
            <br />
            {street}
            <br />
            {postcode_town}
          </p>

          <p className="pb-4 italic">
            Die Datenschutzerklärung wurde mit dem Datenschutzerklärungs-Generator der activeMind AG
            erstellt.
          </p>
        </div>
      </div>
    </div>
  )
}
