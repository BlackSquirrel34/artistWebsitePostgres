'use client'

import React, { useState, useEffect, JSX } from 'react'

// this one should take an array og globals (sic) and map over them when rendering.
interface GlobalOnlyProps {
  globals: Record<string, any>[] | null
}

export default function GlobalOnly({ globals }: GlobalOnlyProps) {
  const [loadedGlobals, setLoadedGlobals] = useState<Record<string, any>[] | null>(null)

  useEffect(() => {
    if (globals) {
      setLoadedGlobals(globals)
    }
  }, [globals])

  if (loadedGlobals === null) {
    return <div>Loading globals...</div>
  }
  if (loadedGlobals === undefined || loadedGlobals.length === 0) {
    return <div>No globals found.</div> // Handle empty or undefined cases
  }

  return (
    <div>
      <div className="mt-4 p-4 bg-gray-100 rounded overflow-x-auto">
        {loadedGlobals?.map((global, index) => (
          <div key={index}>
            {/* if there's a contact global present in the array, we'll render it */}
            {global.contactDetails && typeof global.contactDetails === 'object' && (
              <div>
                {/* Extract values using optional chaining and safe property access */}
                <p>{global.contactDetails?.name || 'N/A'}</p>
                <p>{global.contactDetails?.address || 'N/A'}</p>
                <p>{global.contactDetails?.email || 'N/A'}</p>
              </div>
            )}

            {/*       if there's a cvEvents global present, we'll render it */}
            {Array.isArray(global.cvEvents) &&
              global.cvEvents.map((event, index) => (
                <div key={index}>
                  <p>
                    <strong>{event.year}</strong> {event.description}
                  </p>
                </div>
              ))}
            {/* if the global with the years with exhibitions is present, render this one */}
            {global.exhibYears && (
              <>
                <h1 className="text-2xl">Einzelausstellungen (Auswahl)</h1>
                {global.exhibYears.map(
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
            )}

            {/* if the global with the years participated in exhibitions is present, render this one */}
            {global.yearExhibPart && (
              <>
                <h1 className="text-2xl">Ausstellungsbeteiligungen (Auswahl)</h1>
                {global.yearExhibPart.map(
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
            )}

            {/* if the global with tacquisitions is present, render this one */}
            {global.acquisitionEvents && (
              <>
                <h1 className="text-2xl">Ankäufe</h1>
                {global.acquisitionEvents.map(
                  (
                    event: {
                      year: string
                      description: string
                    },
                    index: number,
                  ) => (
                    <div key={index}>
                      <p>
                        <strong>{event.year}</strong> {event.description}
                      </p>
                    </div>
                  ),
                )}
              </>
            )}

            {/*     {Object.entries(global).map(([key, value]) => (
              <div key={key}>
                <b>{key}:</b> {JSON.stringify(value)}
              </div>
            ))} */}
          </div>
        ))}
      </div>
    </div>
  )
}
