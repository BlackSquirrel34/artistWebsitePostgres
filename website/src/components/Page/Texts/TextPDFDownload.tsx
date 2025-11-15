'use client'

import { Text } from '@/payload-types'
// react pdf icon
import { FaFilePdf } from 'react-icons/fa'

export default function TextPDFDownload({ text }: { text: Text }) {
  // ensure URL is there
  const pdfUrl = typeof text.pdf !== 'number' && text.pdf?.url ? `${text.pdf.url}` : ''

  const handleDownloadClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (pdfUrl) {
      event.preventDefault() // Tells Next.js not to handle the link
      window.open(pdfUrl, '_blank', 'noopener noreferrer') // opens URL manually
    }
  }

  return (
    <a
      href={pdfUrl}
      onClick={handleDownloadClick} // deals with the click event
      // target="_blank" and rel="noopener noreferrer" are redundancies here
      // as we're using window.open, but added for clarity
      className="flex items-center m-2"
    >
      <FaFilePdf className="text-red-500 text-xl" />
      <span className="ml-1 text-sm">PDF herunterladen</span>
    </a>
  )
}
