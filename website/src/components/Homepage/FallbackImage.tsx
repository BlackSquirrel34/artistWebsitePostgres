import Image from 'next/image'

export default function FallbackImage() {
  return (
    <div className="p-20 flex flex-col items-center">
      <Image
        src="/Reflektor_MainImage.jpg"
        alt="Fallback Image"
        width={800}
        height={600}
        className="mx-auto"
      />
    </div>
  )
}
