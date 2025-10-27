'use client'
// import { getImages2 } from '@/utils/apiMock2'
import { ImageT } from '@/utils/types'
import { useRef } from 'react'
// next image instead of img for optimization
import Image from 'next/image'

import type { LightGallery } from 'lightgallery/lightgallery'
import LightGalleryComponent from 'lightgallery/react'
// import styles
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
// import plugins
import lgZoom from 'lightgallery/plugins/zoom'

interface APIResponsiveGridGalleryProps {
  api_images: ImageT[] // from types, not mockAPI, that's important
}

export default function APIResponsiveGridGallery({ api_images }: APIResponsiveGridGalleryProps) {
  // console.log('### api_images: ', api_images)
  const lightboxRef = useRef<LightGallery | null>(null)

  // const images = getImages2()
  const images = api_images

  const gridColumnCountLarge = 12
  const gridColumnCountMedium = 6
  const gridColumnCountSmall = 1

  // Compute spans for each image based on some rules
  const imagesWithSpans = images.map((img) => {
    const aspectRatio = img.width / img.height
    let colSpanLarge, colSpanMedium

    // for images in landscape orientation
    if (aspectRatio >= 2) {
      colSpanLarge = Math.round((2 / 3) * gridColumnCountLarge) // 8
      colSpanMedium = gridColumnCountMedium // full width
    } else if (aspectRatio <= 0.7) {
      // for images in mroe portrait-like orienation
      colSpanLarge = Math.round((1 / 3) * gridColumnCountLarge) // 4
      colSpanMedium = Math.round((1 / 2) * gridColumnCountMedium) // 3
    } else {
      colSpanLarge = Math.round((1 / 2) * gridColumnCountLarge) // 6
      colSpanMedium = Math.round((1 / 2) * gridColumnCountMedium) // 3
    }

    return {
      ...img,
      colSpanLarge,
      colSpanMedium,
    }
  })

  return (
    <div className="p-4 max-w-[1200px] mx-auto">
      {/* Large layout: visible only on lg+ screens */}
      <div
        className="hidden lg:grid lg:min-w-[800px] gap-4"
        style={{
          gridTemplateColumns: `repeat(${gridColumnCountLarge}, minmax(0, 1fr))`,
        }}
      >
        {imagesWithSpans.map((img, index) => (
          <div
            key={index}
            style={{ gridColumn: `span ${img.colSpanLarge}` }}
            className="overflow-hidden rounded"
          >
            <Image
              src={img.url}
              alt={img.alt}
              width={img.width}
              height={img.height}
              className="w-full h-auto"
              // we want to trigger lightgallery
              onClick={() => lightboxRef.current?.openGallery(index)}
            />
          </div>
        ))}
      </div>

      {/* Medium layout: visible only on md+ lg- screens */}
      <div
        className="hidden md:grid lg:hidden gap-2"
        style={{
          gridTemplateColumns: `repeat(${gridColumnCountMedium}, minmax(0, 1fr))`,
        }}
      >
        {imagesWithSpans.map((img, index) => (
          <div
            key={index}
            style={{ gridColumn: `span ${img.colSpanMedium}` }}
            className="overflow-hidden rounded"
          >
            <Image
              width={img.width}
              height={img.height}
              src={img.url}
              alt={img.name}
              className="w-full h-auto"
              // we want to trigger lightgallery
              onClick={() => lightboxRef.current?.openGallery(index)}
            />
          </div>
        ))}
      </div>

      {/* Small screens: visible only on sm- screens */}
      <div
        className="block md:hidden"
        style={{
          gridTemplateColumns: `repeat(${gridColumnCountSmall}, minmax(0, 1fr))`,
        }}
      >
        {images.map((img, index) => (
          <div key={index} className="overflow-hidden rounded">
            <Image
              width={img.width}
              height={img.height}
              src={img.url}
              alt={img.alt}
              className="w-full h-auto py-2" // we want to trigger lightgallery
              onClick={() => lightboxRef.current?.openGallery(index)}
            />
          </div>
        ))}
      </div>

      {/* LightGallery component for lightbox functionality */}
      <LightGalleryComponent
        onInit={(ref) => {
          if (ref) {
            lightboxRef.current = ref.instance
          }
        }}
        speed={500}
        plugins={[lgZoom]}
        escKey
        dynamic
        dynamicEl={images.map((image) => ({
          src: image.url,
          thumb: image.url,
          subHtml: `<h4>${image.title ?? 'untitled'}</h4><p>${image.description ?? 'no description'}</p>`,
        }))}
      />
    </div>
  )
}
