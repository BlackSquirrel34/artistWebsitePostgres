import React from 'react'

interface AcquisitionProps {
  acquisitionEvents: Array<{ year: string; description: string }>
}

export default function Acquisitions({ acquisitionEvents }: AcquisitionProps) {
  return (
    <>
      <h1 className="text-2xl mb-8 text-center">Ankäufe</h1>
      {acquisitionEvents.map((event, index) => (
        <div key={index} className="flex items-baseline mb-2">
          {/* Dot indicator in the same column as years, aligned to the right */}
          <div className="w-[12.5%] flex justify-end pr-2">
            <div className="w-1 h-1 rounded-full bg-black"></div> {/* Dot */}
          </div>
          {/* Description in the wide column, aligned with exhibition descriptions */}
          <div className="w-[87.5%] pl-4">
            <p>{event.description}</p>
          </div>
        </div>
      ))}
    </>
  )
}
