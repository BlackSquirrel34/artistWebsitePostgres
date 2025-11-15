import { Text } from '@/payload-types'
import { FaFilePdf } from 'react-icons/fa'

export default function TextPDFDownload({ text }: { text: Text }) {
  const pdfUrl =
    typeof text.pdf !== 'number' && text.pdf?.url
      ? text.pdf.url // Use the URL as is from the source
      : ''

  // A more robust check to ensure it's an absolute URL with a protocol
  const absolutePdfUrl = pdfUrl && !pdfUrl.startsWith('http') ? `https://${pdfUrl}` : pdfUrl

  return (
    <a
      href={absolutePdfUrl} // Assign the guaranteed absolute URL here
      className="flex items-center m-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaFilePdf className="text-red-500 text-xl" />
      <span className="ml-1 text-sm">PDF herunterladen</span>
    </a>
  )
}
