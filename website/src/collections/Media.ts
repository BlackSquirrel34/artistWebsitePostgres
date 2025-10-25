import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: {
    singular: 'Datei',
    plural: 'Dateien',
  },
  admin: {
    hidden: true,
    description: 'Dateien können über die Media-Sammlung im Admin-Panel verwaltet werden.',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}
