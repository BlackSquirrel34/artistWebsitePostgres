import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'
import { Homepage, Page } from '@/payload-types'

import { fileURLToPath } from 'url'

import config from '@/payload.config'
import HeroBlock from '@/blocks/hero/HeroBlock'
import PageNotFound from '@/components/PageNotFound'
import News, { NewsItem } from '@/components/Homepage/News'
import { extractNews } from '@/utils/extractNews'
import FallbackImage from '@/components/Homepage/FallbackImage'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  const homepage_api_data = await payload.findGlobal({
    slug: 'homepage',
  })

  if (!homepage_api_data) {
    return <PageNotFound />
  }

  // further do some data crunching to turn json into a news-props for news component
  // Function to extract news data
  const news: NewsItem[] = extractNews(homepage_api_data)
  // console.log('news queried', news)

  // Initialize heroBlockData as null
  let heroBlockData = null

  // Check if featuredimage exists
  /* if (homepage_api_data.featuredimage) {
    // Find the hero block inside featuredimage
    heroBlockData = homepage_api_data.featuredimage.find((block) => block.blockType === 'hero')
  } */

  if (homepage_api_data.featuredimage && homepage_api_data.featuredimage.length > 0) {
    // Find the first block with blockType 'hero'
    heroBlockData = homepage_api_data.featuredimage.find((block) => block.blockType === 'hero')
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="w-full sm:w-11/12 md:w-4/5 lg:w-2/3 mx-auto px-8 md:px-12 lg:px-24 pb-12 md:pb-24">
        {/*    <div>{homepage_api_data && <pre>{JSON.stringify(homepage_api_data, null, 2)}</pre>}</div> */}
        {heroBlockData ? (
          <HeroBlock block={heroBlockData} key={heroBlockData.id} />
        ) : (
          <FallbackImage />
        )}

        <News news={news} />
      </div>
    </div>
  )
}
