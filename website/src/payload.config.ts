// storage-adapter-import-placeholder
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

// collections
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages/config'
import { Subpages } from './collections/Subpages/config'
import { Texts } from './collections/Texts'

// globals
import { Footer } from './globals/Footer'
import { CV } from './globals/CV'
import { Exhibitions } from './globals/Exhibitions'
import { ExhibParts } from './globals/ExhibParts'
import { Acquisitions } from './globals/Acquisitions'
import { ContactInformation } from './globals/Contact'
import { Homepage } from './globals/Homepage'
import { NavLinks } from './globals/NavLinks'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      beforeDashboard: ['/components/HelloWidget.tsx'],
    },
  },
  collections: [Users, Media, Texts, Pages, Subpages],
  globals: [
    Homepage,
    NavLinks,
    Footer,
    Exhibitions,
    ExhibParts,
    Acquisitions,
    CV,
    ContactInformation,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
