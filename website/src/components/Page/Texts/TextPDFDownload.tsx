import { Text } from '@/payload-types'
// react pdf icon
import { FaFilePdf } from 'react-icons/fa'

export default function TextPDFDownload({ text }: { text: Text }) {
  const pdfUrl = typeof text.pdf !== 'number' && text.pdf?.url ? `${text.pdf.url}` : ''

  return (
    <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="flex items-center m-2">
      <FaFilePdf className="text-red-500 text-xl" />
    </a>
  )
}
