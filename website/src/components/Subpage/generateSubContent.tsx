import { getPayload } from 'payload'
import React, { JSX } from 'react'
import PageNotFound from '@/components/PageNotFound'
import config from '@/payload.config'
import ImagesSubpage from '@/components/Subpage/ImagesSubpage'

export async function generateSubpageContent(subslug: string): Promise<JSX.Element> {
  console.log('Generating content for subslug:', subslug)

  // we need to ensure we'll return a <notFound /> jsx in case nothing matches the slug and we'd
  // otherwise return null
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // is there a subpage with this slug?
  const {
    docs: [subpage],
  } = await payload.find({
    collection: 'subpages',
    where: {
      slug: { equals: subslug },
    },
  })
  console.log('Fetched subpage:', subpage)

  return new Promise((resolve) => {
    // there is either a page or global with that slug

    if (subpage) {
      // Determine which Page component to render based on page data
      const hasImages = Array.isArray(subpage.layout) && subpage.layout.length > 0

      if (hasImages) {
        resolve(<ImagesSubpage subpage={subpage} />)
      } else {
        resolve(<p>No content available for slug {subslug}</p>)
      }
    } else {
      resolve(<PageNotFound />)
    }
  })
}
