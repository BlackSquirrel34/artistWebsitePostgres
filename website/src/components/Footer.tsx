import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-3">
      <div className="container mx-auto flex items-center justify-center px-4 py-3">
        {/* Centered link */}
        <Link href="/">
          <div className="hover:text-white">Impressum und Datenschutzerklärung</div>
        </Link>
      </div>
    </footer>
  )
}
