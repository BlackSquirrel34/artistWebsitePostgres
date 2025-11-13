'use client'

import Acquisitions from '@/globals/components/Acquisitions'
import Contact from '@/globals/components/Contact'
import CV from '@/globals/components/CV'
import Exhibitions from '@/globals/components/Exhibitions'
import ExhibParts from '@/globals/components/ExhibParts'
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
          <div key={index} className="mt-10 mb-14">
            {/* if there's a contact global present in the array, we'll render it */}
            {global.contactDetails && typeof global.contactDetails === 'object' && (
              <Contact contactDetails={global.contactDetails} />
            )}

            {/*       if there's a cvEvents global present, we'll render it */}
            {Array.isArray(global.cvEvents) && <CV cvEvents={global.cvEvents} />}
            {/* if the global with the years with exhibitions is present, render this one */}
            {global.exhibYears && <Exhibitions exhibYears={global.exhibYears} />}

            {/* if the global with the years participated in exhibitions is present, render this one */}
            {global.yearExhibPart && <ExhibParts yearExhibPart={global.yearExhibPart} />}

            {/* if the global with tacquisitions is present, render this one */}
            {global.acquisitionEvents && (
              <Acquisitions acquisitionEvents={global.acquisitionEvents} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
