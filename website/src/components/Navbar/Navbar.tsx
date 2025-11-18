import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'
import Link from 'next/link'

export default async function Navbar() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // querying for the ownerName from Contact global
  const contactInfo = await payload.findGlobal({
    slug: 'contact',
    select: {
      contactDetails: true,
    },
  })

  if (!contactInfo || !contactInfo.contactDetails) {
    return <div>Owner Name does not exist</div>
  }

  const ownerName = contactInfo.contactDetails.name
  console.log('ownername', ownerName)

  const { docs: pagesnav } = await payload.find({
    collection: 'pages',
    // Select only needed fields
    select: {
      name: true,
      slug: true,
      // let's ask for the subpages only when clicking that pages navitem
    },
  })

  if (!pagesnav || pagesnav.length === 0) {
    return <div>Pages not found or no Pages exist</div>
  }

  // we replace the "/home" slug with "/" for usage on the navbar
  // no longer needed since homepage is now a global and will not be a page
  const prunedNavItems = pagesnav
    .map((page) => ({
      ...page,
    }))
    .filter((page) => page.slug !== 'home')

  return (
    <div className="bg-gray-500 ">
      {/*  <div>{pagesnav && <pre>{JSON.stringify(pagesnav, null, 2)}</pre>}</div> */}
      <div>
        {/*         ownerName works like Home Button */}
        <Link href={'/'}>{ownerName}</Link>
      </div>
      <div className="py-12 max-w-5xl mx-auto flex justify-between w-full items-center">
        <div>
          {prunedNavItems.map((page) => (
            <Link key={page.slug} href={`/${page.slug}`}>
              <div className="mr-4">{page.name}</div> {/* You can style the link as needed */}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
