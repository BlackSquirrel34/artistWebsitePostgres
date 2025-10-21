import { getPayload } from 'payload'
import config from '@/payload.config'

export async function fetchOwnerName(): Promise<string> {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // api calls
  // querying for the ownerName from Contact global
  const contactInfo = await payload.findGlobal({
    slug: 'contact',
    select: {
      contactDetails: true,
    },
  })

  if (!contactInfo || !contactInfo.contactDetails) {
    return 'Home'
  }

  const ownerName = contactInfo.contactDetails.name
  return ownerName
}

export default async function FetchNavData() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // console.log('ownername queried with helper function: ', ownerName)

  // querying for navigation links form global "navigation"
  const navData = await payload.findGlobal({
    slug: 'navLinks',
    depth: 3,
  })

  /*   if (!navLinks) {
    return {}
  } */

  console.log('navLinks queried with helper function: ', navData)

  return navData
}
