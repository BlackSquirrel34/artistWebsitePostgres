import { Subpage } from '@/payload-types'
import APIResponsiveGridGallery from '../Gallery/APIRespGrid'
import { ImageT } from '@/utils/types'
import React from 'react'

// we won't ever meet a global with imges only
export default function ImagesSubpage({ subpage }: { subpage: Subpage }) {
  // need to extract the images from the subpage
  // populate our data structure

  // Extract images from the page
  const images: ImageT[] = React.useMemo(() => {
    if (!subpage?.layout) return []

    const imageBlocks = subpage.layout.filter(
      (block): block is { blockType: 'image'; image: any } => block?.blockType === 'image',
    )

    return imageBlocks.map((block) => {
      const media = block.image
      return {
        id: media.id,
        alt: media.alt ?? '', // provide default alt text if missing
        name: media.filename ?? 'unknown',
        url: media.url ?? 'unknown',
        filename: media.filename ?? 'unknown',
        width: media.width ?? 100, // default width
        height: media.height ?? 100, // default height
      } as ImageT
    })
  }, [subpage])

  return (
    <div>
      {/*  <div>Hello from images only</div> */}
      <div>
        <APIResponsiveGridGallery api_images={images} />
      </div>

      {/* <pre className="mt-4 p-4 bg-gray-100 rounded overflow-x-auto">
           {JSON.stringify(page, null, 2)}
         </pre> */}
    </div>
  )
}
