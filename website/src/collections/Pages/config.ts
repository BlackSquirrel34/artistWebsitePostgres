import { HeroBlock } from '@/blocks/hero/schema'
import { ImageBlock } from '@/blocks/image/schema'
import { RichTextBlock } from '@/blocks/richText/schema'
import { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: 'Seite',
    plural: 'Seiten',
  },
  admin: {
    group: 'Seiten bearbeiten oder hinzufügen',
    // subpages must be created via Pages
    // upon rendering we'll just use the pages and query via the relationship
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
      required: true,
    },
    {
      name: 'image',
      label: 'Bild',
      type: 'blocks',
      blocks: [HeroBlock, ImageBlock, RichTextBlock],
    },
    // Add relationship to sub-pages
    /*    {
      name: 'subPages',
      type: 'relationship',
      label: 'Unterseite',
      relationTo: 'subpages',
      hasMany: true,
    }, */
    // add texts if needed
    {
      name: 'texts',
      type: 'relationship',
      label: 'Texte',
      relationTo: 'texts',
      hasMany: true,
    },
  ],
}
