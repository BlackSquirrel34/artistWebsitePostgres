import { getImages2 } from '@/utils/apiMock2'

export default function TinyGridGallery() {
  const images = getImages2()

  const gridColumnCountLarge = 12 // For large screens
  const gridColumnCountSmall = 1 // For small screens

  // Calculate spans based on screen size
  const imagesWithSpans = images.map((img) => {
    // On large screens, span up to 4 columns (~1/3 of 12)
    const colSpanLarge = Math.min(4, Math.ceil((12 * (img.url.width / img.url.height)) / 3))
    // On small screens, span full width
    const colSpanSmall = 1

    return {
      ...img,
      colSpanLarge,
      colSpanSmall,
    }
  })

  return (
    <div className="p-4 max-w-[800px] mx-auto">
      {/* Large screen grid */}
      <div
        className="hidden md:grid gap-2"
        style={{
          gridTemplateColumns: `repeat(${gridColumnCountLarge}, minmax(0, 1fr))`,
        }}
      >
        {imagesWithSpans.map((img, index) => (
          <div
            key={index}
            style={{
              gridColumn: `span ${img.colSpanLarge}`,
            }}
            className="overflow-hidden rounded"
          >
            <img
              src={img.url.src}
              alt={img.alt}
              className="w-full h-auto" // 🔶 Ensures image takes full width of container
              style={{ maxWidth: '300px', display: 'block', margin: '0 auto' }} // 🔶 Prevents gaps and centers image
            />
          </div>
        ))}
      </div>

      {/* Small screen grid */}
      <div
        className="grid md:hidden gap-2"
        style={{
          gridTemplateColumns: `repeat(1, minmax(0, 1fr))`,
        }}
      >
        {imagesWithSpans.map((img, index) => (
          <div
            key={index}
            style={{
              gridColumn: `span ${img.colSpanSmall}`,
            }}
            className="overflow-hidden rounded"
          >
            <img src={img.url.src} alt={img.alt} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
  )
}
