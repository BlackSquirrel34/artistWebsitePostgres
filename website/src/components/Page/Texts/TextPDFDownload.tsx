import { Text } from '@/payload-types'
// react pdf icon
import { FaFilePdf } from 'react-icons/fa'
import Link from 'next/link'

export default function TextPDFDownload({ text }: { text: Text }) {
  // const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

  const pdfUrl = typeof text.pdf !== 'number' && text.pdf?.url ? `${text.pdf.url}` : ''

  return (
    <Link href={pdfUrl} target="_blank" rel="noopener noreferrer" className="flex items-center m-2">
      <FaFilePdf className="text-red-500 text-xl" />
    </Link>
  )
}
