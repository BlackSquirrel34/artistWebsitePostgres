import { Page } from '@/payload-types'
import { Text } from '@/payload-types'
import PageNotFound from '../PageNotFound'
import TextPDFDownload from './Texts/TextPDFDownload'
import TOC from './Texts/Toc'
import RichText from './Texts/RichText'
import ScrollToTop from './Texts/ScrollToTop'
import TextTopCitation from './Texts/TextTopCitation'

export default function TextsOnly({ page }: { page: Page }) {
  // page.texts can be (number | Text)[] | null | undefined
  const rawTexts = page.texts ?? []

  // keep only actual Text objects (filter out numeric relation IDs and nulls)
  const texts: Text[] = rawTexts.filter(
    (t): t is Text => typeof t !== 'number' && t !== null && typeof t === 'object',
  )

  if (!texts || texts.length === 0) {
    return <PageNotFound />
  }

  return (
    <div className="mt-4 p-4 bg-gray-100 rounded overflow-x-auto">
      {/* TOC with extra padding */}
      <TOC texts={texts} />

      {/* Texts with spacing */}
      {texts.map((text) => (
        <div key={text.id} id={`text-${text.id}`} className="py-4">
          <h3 className="font-bold pb-4">{text.title}</h3>
          <h4 className="pb-4">{text.subtitle}</h4>
          <h4 className="italic pb-4">{text.author}</h4>
          {text.pdf && (
            <p>
              <TextPDFDownload text={text} />
            </p>
          )}
          {text['top-citation'] && (
            <div>
              <TextTopCitation text={text} />
            </div>
          )}
          {text.layout?.[0] && <RichText layout={text.layout[0]} />}
          <ScrollToTop />
        </div>
      ))}
    </div>
  )
}
