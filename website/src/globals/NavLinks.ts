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
          admin: {
            description: 'Wird im Navigationsmenü auf der Webseite angezeigt. Sonderzeichen okay.',
          },
        },
        {
          name: 'years',
          label: 'Zeitraum',
          type: 'text',
          admin: {
            description: 'Wird im Moment von der Webseite nicht verwendet.',
          },
        },
        {
          name: 'link',
          label: 'Link',
          type: 'text',
          admin: {
            description:
              'Wichtig: damit die Navigation funktioniert, muss der link exakt übereinstimmen mit dem Slug (Kürzel) der Seite, zu der navigiert werden soll. Keine Sonderzeichen, Unterstriche sind okay.',
          },
        },
        {
          name: 'subpageLinks',
          label: 'Links auf Unterseiten',
          type: 'array',
          admin: {
            description: 'Machen nur Sinn anzulegen wenn die Seite tatsächlich Unterseiten hat.',
          },
          fields: [
            {
              name: 'label',
              label: 'Label',
              type: 'text',
              admin: {
                description:
                  'Wird im Navigationsmenü auf der Webseite angezeigt. Sonderzeichen okay.',
              },
            },
            {
              name: 'years',
              label: 'Zeitraum',
              type: 'text',
              admin: {
                description: 'Wird im Moment von der Webseite nicht verwendet.',
              },
            },
            {
              name: 'link', // Subpage link should auto-fill if empty
              label: 'Link',
              type: 'text',
              admin: {
                description:
                  'Ein Link zu einer Unterseite muss auch den Link (Slug) der übergeordneten Seite als Präfix haben. Also z.B. so: link_seite/link_unterseite',
              },
            },
          ],
          minRows: 1,
          maxRows: 5,
        },
      ],
      minRows: 1,
      maxRows: 25,
      // allow not more than 25 main nav items
    },
  ],
}
