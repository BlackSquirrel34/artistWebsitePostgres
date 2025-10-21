import sequoia from '@/assets/sequoia.jpg'
import color from '@/assets/color.jpg'
import futuristic from '@/assets/futuristic.jpg'
import mushroom from '@/assets/mushroom.jpg'
import coast from '@/assets/coast.jpg'
import wood from '@/assets/wood.jpg'
import bulb from '@/assets/bulb.jpg'
import iceberg from '@/assets/iceberg.jpg'
import bonfire from '@/assets/bonfire.jpg'
import jet from '@/assets/jet.jpg'
import desert from '@/assets/desert.jpg'
import serene from '@/assets/serene.jpg'
import plant from '@/assets/plant.jpg'
import ocean from '@/assets/ocean.jpg'
import waves from '@/assets/waves.jpg'
import forest from '@/assets/forest.jpg'
import fluegelfackel from '@/assets/fluegelfackel.jpg'
import eisberge from '@/assets/Eisberge.jpg'
import { StaticImageData } from 'next/image'

export interface ImageT {
  id: number
  name: string
  alt: string
  url: StaticImageData // for imported images
}

const images: ImageT[] = [
  {
    id: 0,
    name: 'Sequoia',
    alt: 'A tall sequoia tree',
    url: sequoia,
  },
  {
    id: 1,
    name: 'Color Image',
    alt: 'Colorful abstract',
    url: color,
  },
  {
    id: 2,
    name: 'Futuristic Scene',
    alt: 'Futuristic landscape',
    url: futuristic,
  },
  {
    id: 3,
    name: 'Mushroom',
    alt: 'Mushroom close-up',
    url: mushroom,
  },
  {
    id: 4,
    name: 'Coast',
    alt: 'Coastal view',
    url: coast,
  },
  {
    id: 5,
    name: 'Fluegelfackel',
    alt: 'Fluegel und Fackel',
    url: fluegelfackel,
  },
  {
    id: 6,
    name: 'Wood',
    alt: 'Wood texture',
    url: wood,
  },
  {
    id: 7,
    name: 'Bulb',
    alt: 'Light bulb',
    url: bulb,
  },
  {
    id: 8,
    name: 'Iceberg',
    alt: 'Iceberg in the ocean',
    url: iceberg,
  },
  {
    id: 9,
    name: 'Eisberge',
    alt: 'Icebergs in the ocean',
    url: eisberge,
  },
  {
    id: 10,
    name: 'Bonfire',
    alt: 'Bonfire at night',
    url: bonfire,
  },
  {
    id: 11,
    name: 'Jet',
    alt: 'Jet in the sky',
    url: jet,
  },
  {
    id: 12,
    name: 'Desert',
    alt: 'Desert landscape',
    url: desert,
  },
  {
    id: 13,
    name: 'Serene View',
    alt: 'Serene landscape',
    url: serene,
  },
  {
    id: 14,
    name: 'Plant',
    alt: 'Plant close-up',
    url: plant,
  },
  {
    id: 15,
    name: 'Ocean',
    alt: 'Ocean waves',
    url: ocean,
  },
  {
    id: 16,
    name: 'Waves',
    alt: 'Waves crashing',
    url: waves,
  },
  {
    id: 17,
    name: 'Forest',
    alt: 'Dense forest',
    url: forest,
  },
]

// Example function to get all images
export function getImages2(): ImageT[] {
  return images
}
