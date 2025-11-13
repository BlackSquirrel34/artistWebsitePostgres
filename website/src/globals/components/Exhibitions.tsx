import React from 'react'
interface ExhibYearsProps {
  exhibYears: Array<{ year: string; exhibitions: { description: string; katalog?: boolean }[] }>
}

export default function Exhibitions({ exhibYears }: ExhibYearsProps) {
  return (
    <>
      <h1 className="text-2xl">Einzelausstellungen (Auswahl)</h1>
      {exhibYears.map(
        (
          yearData: {
            year: string
            exhibitions: {
              description: string
              katalog?: boolean
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
                  katalog?: boolean
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
