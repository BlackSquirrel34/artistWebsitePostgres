import React from 'react'

interface ExhibPartProps {
  yearExhibPart: Array<{ year: string; exhibitions: { description: string; katalog: boolean }[] }>
}

export default function ExhibParts({ yearExhibPart }: ExhibPartProps) {
  return (
    <>
      <h1 className="text-2xl mb-8 text-center">Ausstellungsbeteiligungen (Auswahl)</h1>
      {/* Main container with flex column for each year and exhibitions */}
      <div className="flex flex-col space-y-4">
        {yearExhibPart.map((yearData, index) => (
          // Container for each year's data, align baseline
          <div key={index} className="flex items-baseline">
            {/* Year label - narrow, aligned to baseline */}
            <div className="w-[12.5%] flex justify-center p-2">
              <h3 className="text-xl">{yearData.year}</h3>
            </div>
            {/* Exhibitions list - wide, aligned to baseline */}
            <div className="w-[87.5%] pl-4">
              {yearData.exhibitions.map((exhibition, subIndex) => (
                <div key={subIndex} className="mb-2 flex items-baseline">
                  <p className="mr-2">{exhibition.description}</p>
                  {exhibition.katalog && <span className="font-bold">K</span>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
