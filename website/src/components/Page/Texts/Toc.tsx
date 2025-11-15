import { Text } from '@/payload-types'
import Link from 'next/link'

export default function TOC({ texts }: { texts: Text[] }) {
  return (
    <div className="mb-16" id="toc">
      <ul className="list-none">
        {texts.map((text) => {
          const pdfUrl = typeof text.pdf !== 'number' && text.pdf?.url ? `${text.pdf.url}` : ''

          return (
            <li key={text.id} className="mb-2">
              <Link href={`#text-${text.id}`} className="hover:underline">
                <strong>{text.title}</strong>
              </Link>{' '}
              {pdfUrl && (
                <>
                  {' '}
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    [PDF]
                  </a>
                </>
              )}
              <div>
                <span className="italic">{text.author}</span>
                {text.position && <> ({text.position})</>}
                {text.extrainfo && (
                  <>
                    {text.position ? ', ' : ', '}
                    {text.extrainfo}
                  </>
                )}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
