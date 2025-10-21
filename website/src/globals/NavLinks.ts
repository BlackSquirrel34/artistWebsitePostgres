import { GlobalConfig } from 'payload'

export const NavLinks: GlobalConfig = {
  slug: 'navLinks',
  label: 'Navigationsmenü',
  admin: {
    group: 'Seiten bearbeiten oder hinzufügen',
    description: 'Hier lassen sich die oben in der Navigation angezeigten Links anpassen.',
  },
  fields: [
    {
      name: 'navItems',
      label: 'Links im Navigationsmenü',
      type: 'array',
      fields: [
        {
          name: 'label',
          label: 'Label',
          type: 'text',
        },
        {
          name: 'years',
          label: 'Zeitraum',
          type: 'text',
        },
        {
          name: 'link',
          label: 'Link',
          type: 'text',
        },
        {
          name: 'subpageLinks',
          label: 'Links auf Unterseiten',
          type: 'array',
          fields: [
            {
              name: 'label',
              label: 'Label',
              type: 'text',
            },
            {
              name: 'years',
              label: 'Zeitraum',
              type: 'text',
            },
            {
              name: 'link',
              label: 'Link',
              type: 'text',
            },
          ],
          minRows: 1,
          maxRows: 5,
        },
      ],
      minRows: 1,
      maxRows: 15,
      // allow not more than 15 main nav items
    },
  ],
}
