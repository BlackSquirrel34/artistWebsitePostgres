import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const s3Endpoint = process.env.S3_ENDPOINT || ''
let s3Hostname = ''
try {
  s3Hostname = s3Endpoint ? new URL(s3Endpoint).hostname : ''
} catch (e) {
  s3Hostname = ''
}

const nextConfig = {
  // Your Next.js config here
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: s3Hostname || 'localhost',
        port: '',
        pathname: `/${process.env.S3_BUCKET_NAME || '**'}/**`,
      },
    ],
  },
  // see https://payloadcms.com/docs/production/deployment
  output: 'standalone',
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
