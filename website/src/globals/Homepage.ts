import { HeroBlock } from '@/blocks/hero/schema'
import { GlobalConfig } from 'payload'

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  label: 'Homepage',
  admin: {
    group: 'Seiten bearbeiten oder hinzufügen',
  },
  fields: [
    {
      // which image should be prominently displayed on the homepage?
      name: 'featuredimage',
      label: 'Bild',
      type: 'blocks',
      blocks: [HeroBlock],
      admin: {
        description:
          'Das erste Bild in dieser Liste wird auf der Homepage prominent angezeigt. Zum Sortieren auf das Feld mit den kleinen Punkten links oben klicken und in die gewünschte Reihenfolge ziehen.',
      },
    },
    {
      name: 'news',
      label: 'Aktuelles',
      type: 'array',
      fields: [
        {
          name: 'date',
          label: 'Datum',
          type: 'text',
        },
        {
          name: 'titel',
          label: 'Titel',
          type: 'text',
        },
        {
          name: 'involved',
          label: 'Beteiligte',
          type: 'text',
        },
        {
          name: 'location',
          label: 'Ort',
          type: 'text',
        },
      ],
      minRows: 1,
      maxRows: 10,
    },
  ],
}
