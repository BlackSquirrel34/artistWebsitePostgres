import { GlobalConfig } from 'payload'

export const ExhibParts: GlobalConfig = {
  slug: 'exhibpart',
  label: 'Ausstellungsbeteiligungen',
  admin: {
    group: 'Ausstellungen, -beteiligungen und Ankäufe',
  },
  fields: [
    {
      name: 'yearExhibPart',
      label: 'Jahr mit Ausstellungsbeteiligung',
      type: 'array',
      minRows: 1,
      maxRows: 500,
      fields: [
        {
          name: 'year',
          label: 'Jahr',
          type: 'text',
          required: true,
        },
        // there can be several exhibparts in one year
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

// to ensure we do not add the same year several times, we could write a beforeChange hook with logic to check for duplicates
// that's the idea of an ai for that:

/* beforeChange: [
    async ({ data, originalDoc, context }) => {
      if (data.years) {
        const years = data.years.map(y => y.year);
        const duplicates = years.filter((item, index) => years.indexOf(item) !== index);
        if (duplicates.length > 0) {
          throw new Error(`Die Jahre ${duplicates.join(', ')} sind doppelt. Bitte nur eindeutige Jahre eingeben.`);
        }
      }
    }
  ], */
