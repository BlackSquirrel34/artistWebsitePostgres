import React from 'react'
import '@/styles/global.css'
import SubRespNav from '@/components/Navbar/SubRespNav'
import Footer from '@/components/Footer'
import FetchNavData, { fetchOwnerName } from '@/utils/fetchNavData'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  // data fetching (e.g., ownerName) for navbar
  const navData = await FetchNavData()
  const ownerName = await fetchOwnerName()

  return (
    <html lang="en">
      <body>
        <main>
          <SubRespNav ownerName={ownerName} navData={navData} />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
