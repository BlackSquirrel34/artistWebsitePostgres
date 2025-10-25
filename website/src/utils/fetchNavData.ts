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
  // let's be careful, these data might not be there yet
  try {
    const navData = await payload.findGlobal({
      slug: 'navLinks',
      depth: 3,
    })

    // Check if navData exists and has items
    if (!navData || !navData.navItems || navData.navItems.length === 0) {
      // Return dummy navItems if no data
      return [
        {
          id: '1',
          label: 'Home',
          years: null,
          link: 'home',
          subpageLinks: [],
        },
        {
          id: '2',
          label: 'About',
          years: null,
          link: 'about',
          subpageLinks: [],
        },
      ]
    }

    // Otherwise, return the fetched data
    console.log('navLinks queried with helper function: ', navData)
    return navData
  } catch (error) {
    console.error('Error fetching nav data:', error)

    // if there's an error, return dummy navItems, too
    return [
      {
        id: '1',
        label: 'Home',
        years: null,
        link: 'home',
        subpageLinks: [],
      },
      {
        id: '2',
        label: 'About',
        years: null,
        link: 'about',
        subpageLinks: [],
      },
    ]
  }
}
