'use client'

import { Text } from '@/payload-types'
import { RichText as RichTextConverter } from '@payloadcms/richtext-lexical/react'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

type RichTextProps = {
  layout: NonNullable<Text['layout']>[number] // Gets the type of a single richtext block from the layout array
}

export default function RichText({ layout }: RichTextProps) {
  // ensure we only try to render richtext blocks
  if (!layout || (layout as any).blockType !== 'richtext') return <div>No Rich Text available</div>

  // layout.content should be the SerializedEditorState produced by Payload's rich text
  const data = (layout as any).content as SerializedEditorState | undefined
  if (!data) return <div>No Rich Text data available</div>

  return (
    // add a stable wrapper class for styling
    <div className="richtext">
      <RichTextConverter data={data} />
    </div>
  )
}
