import { Page } from '@/payload-types'

// could be a page only. cuz we got no global with images.
export default function CombinedPage({ page }: { page: Page }) {
  // lets find out what we've got in this page. iguess texts and images.
  // otherwise we'd not be here.
  // render with sub-components that create a onesize fits all layout.

  return (
    <div>
      {/*    <div>Hello from combined page</div> */}
      <pre className="mt-4 p-4 bg-gray-100 rounded overflow-x-auto">
        {JSON.stringify(page, null, 2)}
      </pre>
    </div>
  )
}
