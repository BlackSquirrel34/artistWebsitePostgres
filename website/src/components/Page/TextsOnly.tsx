import { Page } from '@/payload-types'
import { Text } from '@/payload-types'
import PageNotFound from '../PageNotFound'

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

  // Helper to get the first paragraph's text content
  const getFirstParagraphText = (layout: any[]) => {
    if (!layout || layout.length === 0) return ''
    const firstBlock = layout[0]
    if (firstBlock && firstBlock.blockType === 'richtext' && firstBlock.content?.root?.children) {
      const firstChild = firstBlock.content.root.children[0]
      if (firstChild?.children && firstChild.children.length > 0) {
        return firstChild.children[0].text || ''
      }
    }
    return ''
  }

  return (
    <div className="mt-4 p-4 bg-gray-100 rounded overflow-x-auto">
      {/* TOC with extra padding */}
      <div className="mb-16">
        <h2 className="font-bold mb-4">Table of Contents</h2>
        <ul className="list-disc list-inside">
          {texts.map((text) => (
            <li key={text.id} className="mb-2">
              <strong>{text.title}</strong> by {text.author}
            </li>
          ))}
        </ul>
      </div>

      {/* Texts with spacing */}
      {texts.map((text) => (
        <div key={text.id} className="py-4">
          <h3 className="font-bold pb-4">{text.title}</h3>
          <p>{getFirstParagraphText(text.layout ?? [])}</p>
        </div>
      ))}
    </div>
  )
}
