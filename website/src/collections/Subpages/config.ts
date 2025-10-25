import { HeroBlock } from '@/blocks/hero/schema'
import { ImageBlock } from '@/blocks/image/schema'
import { CollectionConfig } from 'payload'

export const Subpages: CollectionConfig = {
  slug: 'subpages',
  labels: {
    singular: 'Unterseite',
    plural: 'Unterseiten',
  },
  admin: {
    group: 'Seiten bearbeiten oder hinzufügen',
    // make visible just for dev.
    // that's how we ensure no orphaned sub-pages are created
    // they must be created via Pages
    // upon rendering we'll just use the pages and query via the relationship
    // hidden: true,
    description:
      'Unterseiten können hier hinzugefügt und verwaltet werden. Sie müssen zwingend mit einer Seite (Parent page) verknüpft werden.',
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
    // each sub-page must be associated with some page
    {
      name: 'parentPage',
      type: 'relationship',
      relationTo: 'pages',
      required: true,
    },
    {
      name: 'layout',
      label: 'Layout',
      type: 'blocks',
      blocks: [ImageBlock],
    },
  ],
}
