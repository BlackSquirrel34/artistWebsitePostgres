import React from 'react'

interface ExhibPartProps {
  yearExhibPart: Array<{ year: string; exhibitions: { description: string; katalog: boolean }[] }>
}

export default function ExhibParts({ yearExhibPart }: ExhibPartProps) {
  return (
    <>
      <h1 className="text-2xl">Ausstellungsbeteiligungen (Auswahl)</h1>
      {yearExhibPart.map(
        (
          yearData: {
            year: string
            exhibitions: {
              description: string
              katalog: boolean
            }[]
          },
          index: number,
        ) => (
          <div key={index}>
            <h3 className="text-xl">{yearData.year}</h3>
            {yearData.exhibitions.map(
              (
                exhibition: {
                  description: string
                  katalog: boolean
                },
                subIndex: number,
              ) => (
                <div key={subIndex}>
                  <p>{exhibition.description}</p>
                  {exhibition.katalog && ' K'}
                </div>
              ),
            )}
          </div>
        ),
      )}
    </>
  )
}
