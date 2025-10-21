import { Subpage } from '@/payload-types'
import ResponsiveGridGallery from '../Gallery/ResposiveGrid'

// we won't ever meet a global with imges only
export default function ImagesOnly({ subpage }: { subpage: Subpage }) {
  // need to extract the images from the subpage
  // populate our data structure

  return (
    <div>
      {/*   <div>Hello from images only</div> */}
      <div>
        <ResponsiveGridGallery />
      </div>

      {/*     <pre className="mt-4 p-4 bg-gray-100 rounded overflow-x-auto">
        {JSON.stringify(subpage, null, 2)}
      </pre> */}
    </div>
  )
}
