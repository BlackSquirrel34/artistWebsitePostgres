import { footer } from '@/payload-generated-schema'
import Link from 'next/link'

export default function Footer() {
  const footerText = process.env.FOOTER_TEXT
  const footerSignature = process.env.FOOTER_SIGNATURE
  const signatureLink = process.env.FOOTER_SIGNATURE_LINK || '/'

  return (
    <footer className="bg-gray-900 text-gray-400 py-3">
      <div className="container mx-auto flex flex-col items-center justify-center px-4 py-3">
        {/* footerText on its own line, centered */}
        <p className="hover:text-white mb-2 text-center">{footerText}</p>
        {/* footerSignature on its own line, centered */}
        <Link href={signatureLink}>
          <p className="hover:text-white text-center">{footerSignature}</p>
        </Link>
      </div>
    </footer>
  )
}
