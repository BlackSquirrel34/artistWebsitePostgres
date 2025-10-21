import { Block } from 'payload'

export const ImageBlock: Block = {
  slug: 'image',
  interfaceName: 'image',
  labels: {
    singular: 'Image',
    plural: 'Images',
  },
  fields: [
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      type: 'radio',
      name: 'ImageAspectRatio',
      options: ['Quadrat', 'Breit', 'Hoch'],
    },
  ],
}
