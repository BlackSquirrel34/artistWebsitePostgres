import { GlobalConfig } from 'payload'

export const Acquisitions: GlobalConfig = {
  slug: 'acquis',
  label: 'Ankäufe',
  admin: {
    group: 'Ausstellungen, -beteiligungen und Ankäufe',
  },
  fields: [
    {
      name: 'acquisitionEvents',
      label: 'Acquisition Events',
      type: 'array',
      fields: [
        {
          name: 'description',
          label: 'Description',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
