import { getPayload } from 'payload'
import React, { JSX } from 'react'
import PageNotFound from '@/components/PageNotFound'
import config from '@/payload.config'
import { getGlobalsBySlug } from './fetchGlobalsBySlug'
import CombinedPage from '@/components/Page/CombinedPage'
import ImagesOnly from '@/components/Page/ImagesOnly'
import TextsOnly from '@/components/Page/TextsOnly'
import GlobalOnly from '@/components/Page/GlobalOnly'

export async function generateContent(slug: string): Promise<JSX.Element> {
  console.log('Generating content for slug:', slug)

  // we need to ensure we'll return a <notFound /> jsx in case nothing matches the slug and we'd
  // otherwise return null
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // is there a page with this slug?
  const {
    docs: [page],
  } = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: slug },
    },
  })
  console.log('Fetched page:', page)

  // are there one or several globals with this slug?
  const found_globals = await getGlobalsBySlug(slug)

  return new Promise((resolve) => {
    // there is either a page or global with that slug
    if (page || found_globals.length > 0) {
      if (page) {
        // Determine which Page component to render based on page data
        const hasImages = Array.isArray(page.image) && page.image.length > 0
        const hasTexts = Array.isArray(page.texts) && page.texts.length > 0

        if (hasImages && hasTexts) {
          resolve(<CombinedPage page={page} />)
        } else if (hasImages) {
          resolve(<ImagesOnly page={page} />)
        } else if (hasTexts) {
          resolve(<TextsOnly page={page} />)
        } else {
          resolve(<p>No content available for slug {slug}</p>)
        }
      } else if (found_globals.length > 0) {
        resolve(<GlobalOnly globals={found_globals} />)
      }
      // unreachble code??
      resolve(<div>Hello, this is a slug corresponding to a page or global: {slug}!</div>)
    } else {
      // we found neither a page nor a global?
      resolve(<PageNotFound />)
    }
  })

  /* const renderBlock = (block: Page['layout'][0]) => {
    switch (block.blockType) {
      case 'hero':
        return <HeroBlock block={block} key={block.id} />
      case 'image':
        return <ImageBlock block={block} key={block.id} />
      default:
        return null
    }
  } */
}
