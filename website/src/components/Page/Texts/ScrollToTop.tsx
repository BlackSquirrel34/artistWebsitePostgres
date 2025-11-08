'use client'
import Link from 'next/link'

export default function ScrollToTop() {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <Link href="#" onClick={scrollToTop} className="hover:underline inline-block mt-4">
      Nach oben
    </Link>
  )
}
