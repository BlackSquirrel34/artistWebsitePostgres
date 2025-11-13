import React from 'react'

interface ContactProps {
  contactDetails: Record<string, any>
}

export default function Contact({ contactDetails }: ContactProps) {
  return (
    <div>
      {/* Extract values using optional chaining and safe property access */}
      <p>{contactDetails?.name || 'N/A'}</p>
      <p>{contactDetails?.address || 'N/A'}</p>
      <p>{contactDetails?.email || 'N/A'}</p>
    </div>
  )
}
