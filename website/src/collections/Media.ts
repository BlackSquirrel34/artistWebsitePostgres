import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: {
    singular: 'Datei',
    plural: 'Dateien',
  },
  admin: {
    hidden: true,
    // description: 'Dateien können über die Media-Sammlung verwaltet werden.',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        description:
          'Der Name wird verwendet falls das Bild nicht geladen werden kann, oder auch für sehbehinderte Menschen. (= alt-tag)',
      },
    },
  ],
  // upload: true,
  upload: {
    disableLocalStorage: true,
    mimeTypes: ['image/*', 'application/pdf'],
  },
}
