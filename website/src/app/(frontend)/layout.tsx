import React from 'react'
import '@/styles/global.css'
import SubRespNav from '@/components/Navbar/SubRespNav'
import Footer from '@/components/Footer'
import FetchNavData, { fetchOwnerName } from '@/utils/fetchNavData'

export const metadata = {
  description: 'A website about the artist showcasing their works, biography, and news',
  title: 'Artist Website',
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

// let's be careful: maybe there are no navdata yet
