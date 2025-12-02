import Link from 'next/link'

export default function Footer() {
  const footerText = process.env.FOOTER_TEXT
  const footerSignature = process.env.FOOTER_SIGNATURE
  const signatureLink = process.env.FOOTER_SIGNATURE_LINK || '/'

  return (
    <footer className="bg-gray-900 text-gray-400 py-3">
      <div className="container mx-auto flex flex-col items-center justify-center px-4 py-3">
        {/* footerText on its own line, centered */}
        <p className="text-center">{footerText}</p>
        <div className="flex mx-auto py-3 gap-8">
          <Link href="/impressum" className="">
            <p className="hover:text-white text-center">Impressum</p>
          </Link>
          <Link href="/datenschutz" className="">
            <p className="hover:text-white text-center">Datenschutzerklärung</p>
          </Link>
        </div>

        {/* footerSignature on its own line, centered */}
        <Link href={signatureLink}>
          <p className="hover:text-white text-center">{footerSignature}</p>
        </Link>
      </div>
    </footer>
  )
}
