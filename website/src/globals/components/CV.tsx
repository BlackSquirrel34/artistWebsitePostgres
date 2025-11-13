import React from 'react'

interface EventType {
  year: string
  description: string
}
interface CVProps {
  cvEvents: EventType[]
}

export default function CV({ cvEvents }: CVProps) {
  if (!Array.isArray(cvEvents)) {
    return <div>Keine Angaben vorhanden</div>
  }

  return (
    <>
      {cvEvents.map((event, index) => (
        <div key={index}>
          <p>
            <strong>{event.year}</strong> {event.description}
          </p>
        </div>
      ))}
    </>
  )
}
