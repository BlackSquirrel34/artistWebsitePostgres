import React from 'react'
interface ExhibYearsProps {
  exhibYears: Array<{ year: string; exhibitions: { description: string; katalog?: boolean }[] }>
}

export default function Exhibitions({ exhibYears }: ExhibYearsProps) {
  return (
    <>
      <h1 className="text-2xl mb-8 text-center">Einzelausstellungen (Auswahl)</h1>
      {/* Container for all year+exhibitions blocks */}
      <div className="flex flex-col space-y-4">
        {exhibYears.map((yearData, index) => (
          // Wrap each year with its exhibitions, align items to baseline
          <div key={index} className="flex items-baseline">
            {/* Year part - narrow, takes 1/8 of width, aligns baseline */}
            <div className="w-[15%] sm:w-[12.5%] flex justify-center p-2">
              <h3 className="text-base md:text-base xl:text-xl">{yearData.year}</h3>
            </div>
            {/* Exhibitions part - wide, takes remaining space */}
            <div className="w-[85%] sm:w-[87.5%] pl-4">
              {yearData.exhibitions.map((exhibition, subIndex) => (
                <div key={subIndex} className="mb-2 flex items-baseline pr-4">
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
