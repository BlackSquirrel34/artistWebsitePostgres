import { GlobalConfig } from 'payload'

export const Exhibitions: GlobalConfig = {
  slug: 'exhibition',
  label: 'Einzelausstellungen',
  admin: {
    group: 'Ausstellungen, -beteiligungen und Ankäufe',
  },
  fields: [
    {
      name: 'exhibYears',
      label: 'Jahre mit Einzelausstellung',
      type: 'array',
      minRows: 1,
      maxRows: 500,
      fields: [
        {
          name: 'year',
          label: 'Year',
          type: 'text',
          required: true,
        },
        // there can be several exhibs in one year
        {
          name: 'exhibitions',
          label: 'Ausstellungen',
          type: 'array',
          minRows: 1,
          fields: [
            {
              name: 'description',
              label: 'Beschreibung',
              required: true,
              type: 'text',
            },
            {
              name: 'katalog',
              label: 'Katalog',
              type: 'checkbox',
            },
          ],
        },
      ],
    },
  ],
}
