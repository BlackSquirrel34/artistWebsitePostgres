import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    group: 'Accounts',
    useAsTitle: 'email',
    // hidden: true,
    description: 'Benutzer können hier hinzugefügt und verwaltet werden.',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}
