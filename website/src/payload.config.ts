import { s3Storage } from '@payloadcms/storage-s3'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { resendAdapter } from '@payloadcms/email-resend'
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
  serverURL: process.env.PAYLOAD_PUBLIC_BASE_DNS,
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
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  graphQL: {
    disable: true,
  },
  // email: resend
  email: resendAdapter({
    defaultFromAddress: process.env.RESEND_DEFAULT_FROM_ADDRESS || '',
    defaultFromName: 'Payload CMS',
    apiKey: process.env.RESEND_API_KEY || '',
  }),
  // cors and csrf settings
  cors: [
    process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
    process.env.S3_ENDPOINT || '',
  ],
  csrf: [
    process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
    process.env.S3_ENDPOINT || '',
  ],
  plugins: [
    // payloadCloudPlugin(),
    s3Storage({
      collections: {
        media: {
          disableLocalStorage: true,
          disablePayloadAccessControl: true,
          generateFileURL: ({ filename }) =>
            `${process.env.S3_ENDPOINT}/${process.env.S3_BUCKET_NAME}/${filename}`,
        },
      },
      bucket: process.env.S3_BUCKET_NAME || '',
      config: {
        endpoint: process.env.S3_ENDPOINT || '',
        region: process.env.S3_REGION || 'us-east-1',
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY || '',
          secretAccessKey: process.env.S3_SECRET_KEY || '',
        },
        // Required for MinIO
        forcePathStyle: true,
      },
    }),
  ],
})
