import { Page } from '@/payload-types'
import ImagesOnly from './ImagesOnly'
import TextsOnly from './TextsOnly'

// could be a page only. cuz we got no global with images.
export default function CombinedPage({ page }: { page: Page }) {
  // lets find out what we've got in this page. iguess texts and images.
  // otherwise we'd not be here.
  // render with sub-components that create a onesize fits all layout.

  return (
    <div>
      {/*    <div>Hello from combined page</div> */}
      {/*  <pre className="mt-4 p-4 bg-gray-100 rounded overflow-x-auto">
        {JSON.stringify(page, null, 2)}
      </pre> */}
      <TextsOnly page={page} />
      {/*       this div is only there to give some spacing between texts and images */}
      <div className="mb-24"></div>
      <ImagesOnly page={page} />
    </div>
  )
}
