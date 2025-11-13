import React from 'react'

interface AcquisitionProps {
  acquisitionEvents: Array<{ year: string; description: string }>
}

export default function Acquisitions({ acquisitionEvents }: AcquisitionProps) {
  return (
    <>
      <h1 className="text-2xl">Ankäufe</h1>
      {acquisitionEvents.map(
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
  )
}
