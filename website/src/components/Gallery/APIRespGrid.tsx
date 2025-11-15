'use client'

import { ImageT } from '@/utils/types'
import { useState } from 'react'
// next image instead of img for optimization
import Image from 'next/image'

// yet-another-react-lightbox
import { Lightbox } from 'yet-another-react-lightbox'
import { Captions, Zoom } from 'yet-another-react-lightbox/plugins'
import '@/styles/global.css'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/captions.css'
import NextJsImage from './Lightbox'

interface APIResponsiveGridGalleryProps {
  api_images: ImageT[]
}

export default function APIResponsiveGridGallery({ api_images }: APIResponsiveGridGalleryProps) {
  // State for lightbox
  const [open, setOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleImageClick = (index: number) => {
    setCurrentIndex(index)
    setOpen(true)
  }

  // const images = getImages2()
  const images = api_images

  const slides = api_images.map((img) => ({
    src: img.url,
    alt: img.alt,
    width: img.width,
    height: img.height,
    title: img.title, // pass title
    description: img.description, // pass description
  }))

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
        className="hidden lg:grid lg:min-w-[800px] gap-4 items-start" // items start to prevent excess whitespace
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
              onClick={() => handleImageClick(index)}
            />
          </div>
        ))}
      </div>

      {/* Medium layout: visible only on md+ lg- screens */}
      <div
        className="hidden md:grid lg:hidden gap-2 items-start" // items start to prevent excess whitespace
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
              onClick={() => handleImageClick(index)}
            />
          </div>
        ))}
      </div>

      {/* Small screens: visible only on sm- screens */}
      <div
        className="block md:hidden items-start" // items start to prevent excess whitespace
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
              onClick={() => handleImageClick(index)}
            />
          </div>
        ))}
      </div>

      {/* Lightbox with custom slide renderer */}
      <Lightbox
        open={open}
        index={currentIndex}
        close={() => setOpen(false)}
        slides={slides}
        plugins={[Captions, Zoom]}
        captions={{
          descriptionTextAlign: 'center',
        }}
        render={{
          slide: NextJsImage,
        }}
      />
    </div>
  )
}
