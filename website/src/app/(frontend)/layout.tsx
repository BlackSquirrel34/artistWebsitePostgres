import React from 'react'
import '@/styles/global.css'
import SubRespNav from '@/components/Navbar/SubRespNav'
import Footer from '@/components/Footer'
import FetchNavData, { fetchOwnerName } from '@/utils/fetchNavData'

export const metadata = {
  description: process.env.METADATA_DESCRIPTION,
  title: process.env.METADATA_TITLE,
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  // data fetching (e.g., ownerName) for navbar
  const navData = await FetchNavData()
  const ownerName = await fetchOwnerName()

  // // commented out min-h-screen to prevent excess whitespace
  return (
    <html lang="en" className="m-0 p-0 h-full">
      <body className="m-0 p-0 h-full">
        <main className="flex flex-col min-h-screen">
          <SubRespNav ownerName={ownerName} navData={navData} />
          {/* Wrap children in a flex-1 container to fill remaining space */}
          <div className="flex-1 w-full">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  )
}
