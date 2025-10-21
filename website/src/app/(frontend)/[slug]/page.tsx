import { fileURLToPath } from 'url'
import { generateContent } from '@/components/Page/generateContent'

// again: https://fortifiedhq.com/blog/next-js-15-dynamic-routes-params-promise
type ParamsType = Promise<{ slug: string }>

export default async function FirstPage({ params }: { params: ParamsType }) {
  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  // inside an app directory, the slug is directly available
  const { slug } = await params

  const content = generateContent(slug)

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="w-full sm:w-11/12 md:w-4/5 lg:w-2/3 mx-auto mt-20 mb-20 px-8 md:px-12 lg:px-24 pb-12 md:pb-24">
        {content}
      </div>
    </div>
  )
}
