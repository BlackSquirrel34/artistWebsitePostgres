import { GlobalConfig } from 'payload'

export const NavLinks: GlobalConfig = {
  slug: 'navLinks',
  label: 'Navigationsmenü',
  admin: {
    group: 'Seiten bearbeiten oder hinzufügen',
    description:
      'Hier lassen sich die oben in der Navigation angezeigten Links anpassen. Der Link zu einer Seite muss mit dem bei der Seite eingetragenen slug genau übereinstimmmen. Der Link zu einer Unterseite setzt sich zusammen aus dem slug der Parent page und dem slug der Unterseite (Subpage, subslug.)',
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
              name: 'link', // Subpage link should auto-fill if empty
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
