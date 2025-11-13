import { footer } from '@/payload-generated-schema'
import Link from 'next/link'

export default function Footer() {
  const footerText = process.env.FOOTER_TEXT
  const footerSignature = process.env.FOOTER_SIGNATURE
  const signatureLink = process.env.SIGNATURE_LINK || '/'

  return (
    <footer className="bg-gray-900 text-gray-400 py-3">
      <div className="container mx-auto flex items-center justify-center px-4 py-3">
        {/* Centered link */}
        <div className="hover:text-white pb-2">{footerText}</div>
        <Link href={signatureLink}>
          <div className="hover:text-white">{footerSignature}</div>
        </Link>
      </div>
    </footer>
  )
}
