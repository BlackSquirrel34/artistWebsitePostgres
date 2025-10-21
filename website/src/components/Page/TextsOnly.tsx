/* import { Page } from '@/payload-types'

// could be a page with texts only OR a global
export default function TextsOnly({ page }: { page: Page }) {
  // stil some todos left here
  // needs to to pre-processing: grab the slug and render dedicated sub-components.
  // we first need to ensure this has a slug-property.
  // that should eb the case, otherwise we wouldn't have come so far.

  // then cases for the slug that point to a global: /biographie, /ausstellungen, /kontakt
  // extract the json fields we'rei nterested in, give that as a prop to the resp. sub-components.

  return (
    <div>
      <pre className="mt-4 p-4 bg-gray-100 rounded overflow-x-auto">
        {JSON.stringify(page, null, 2)}
      </pre>
    </div>
  )
} */

import { Page } from '@/payload-types'
import { Text } from '@/payload-types'
import PageNotFound from '../PageNotFound'
export default function TextsOnly({ page }: { page: { texts?: Text[] } }) {
  const { texts } = page

  if (!texts || texts.length === 0) {
    return <PageNotFound />
  }

  // Now TypeScript knows texts is Text[]

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
