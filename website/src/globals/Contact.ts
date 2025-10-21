import { GlobalConfig } from 'payload'

export const ContactInformation: GlobalConfig = {
  slug: 'contact',
  label: 'Kontaktdaten',
  admin: {
    group: 'Persönliches',
  },
  fields: [
    {
      name: 'contactDetails',
      label: 'Kontaktinformationen',
      type: 'group',
      required: true,
      fields: [
        {
          name: 'name',
          label: 'Name',
          type: 'text',
          required: true,
        },
        {
          name: 'address',
          label: 'Ort',
          type: 'text',
          required: true,
        },
        {
          name: 'email',
          label: 'Email',
          type: 'email',
          required: true,
        },
      ],
    },
  ],
}
