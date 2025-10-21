import { Homepage, Page } from '@/payload-types'
import Image from 'next/image'

// to fix red squiggles cuz of types
// extract from featuredimage of homepage the type of hero
// NonNullable<Homepage['featuredimage']> removes null and undefined.
/* type HeroProps = Extract<Homepage['featuredimage'][0], { blockType: 'hero' }> */
type HeroProps = Extract<NonNullable<Homepage['featuredimage']>[0], { blockType: 'hero' }>

export default function HeroBlock({ block }: { block: HeroProps }) {
  return (
    <div className="pt-20 pb-10 flex flex-col items-center max-w-full  border-b border-gray-300">
      {typeof block?.image === 'object' && block.image.url && (
        <Image
          src={block.image.url}
          alt={block.image.alt}
          width={800}
          height={600}
          priority
          className="w-full"
        />
      )}

      {/* Add some margin at the top of the description for spacing */}
      <p className="mt-6 text-center">{block.description}</p>
    </div>
  )
}
