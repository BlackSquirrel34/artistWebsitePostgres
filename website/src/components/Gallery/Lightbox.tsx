'use client'

import {
  RenderSlideProps,
  isImageFitCover,
  useLightboxProps,
  useLightboxState,
  isImageSlide,
} from 'yet-another-react-lightbox'
import Image from 'next/image'

export default function NextJsImage({ slide, offset, rect }: RenderSlideProps) {
  const {
    on: { click },
    carousel: { imageFit },
  } = useLightboxProps()

  const { currentIndex } = useLightboxState()

  const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit)

  const width = rect.width
  const height = rect.height

  // use official isImageSlide Type Guard, to access src and alt safely
  // TypeScript now knows that slide is of type ImageSlide
  if (!isImageSlide(slide)) {
    // Optional: render fall back or null if not an image slide
    console.warn('Das Slide ist kein Bild-Slide und wird nicht mit next/image gerendert.')
    return null
  }

  // in this scope slide is definitely an ImageSlide
  const src = slide.src
  // 'alt' is possibly undefined, so we provide a default value
  const alt = slide.alt || 'Image'

  return (
    <div style={{ position: 'relative', width, height }}>
      <Image
        fill
        src={src}
        alt={alt}
        style={{
          objectFit: cover ? 'cover' : 'contain',
          cursor: click ? 'pointer' : undefined,
        }}
        sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
        onClick={offset === 0 ? () => click?.({ index: currentIndex }) : undefined}
      />
    </div>
  )
}
