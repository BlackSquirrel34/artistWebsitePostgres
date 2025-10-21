import { DataFromGlobalSlug, getPayload, GlobalSlug } from 'payload'
import config from '@/payload.config'

// is there a global with this slug?
// will return either an empty array or an array popualted with json records
export async function getGlobalsBySlug(slug: string): Promise<Record<string, any>[]> {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // simplified type
  const globals: Record<string, any>[] = []

  if (slug === 'biographie') {
    try {
      const global = await payload.findGlobal({
        slug: 'cv' as GlobalSlug,
      })
      globals.push(global)
      return globals
    } catch (error) {
      console.error('Error finding global:', error)
      return globals
    }
  } else if (slug === 'kontakt') {
    try {
      const global = await payload.findGlobal({
        slug: 'contact' as GlobalSlug,
      })
      globals.push(global)
      return globals
    } catch (error) {
      console.error('Error finding global:', error)
      return globals
    }
  } else if (slug === 'ausstellungen') {
    const global1 = await payload.findGlobal({
      slug: 'exhibition' as GlobalSlug,
    })
    globals.push(global1)
    const global2 = await payload.findGlobal({
      slug: 'exhibpart' as GlobalSlug,
    })
    globals.push(global2)
    const global3 = await payload.findGlobal({
      slug: 'acquis' as GlobalSlug,
    })
    globals.push(global3)
    return globals
  }
  return globals
}
