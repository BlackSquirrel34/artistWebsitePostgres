import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
    hidden: true,
    description: 'Benutzer können über das Admin-Panel hinzugefügt und verwaltet werden.',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}
