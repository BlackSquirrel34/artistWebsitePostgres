import { Text } from '@/payload-types'

export default function TextTopCitation({ text }: { text: Text }) {
  const citation = text['top-citation'] || ''

  if (!citation || citation.length === 0) {
    return null // or you can return a placeholder if needed
  }

  return (
    <div className="italic pl-4 my-4 text-gray-600">
      {citation.map((item, index) => (
        <div key={index} className="mb-2">
          {item.text && <p className="mb-1">"{item.text}"</p>}
          {(item.author || item.further) && (
            <p className="text-sm">{[item.author, item.further].filter(Boolean).join(', ')}</p>
          )}
        </div>
      ))}
    </div>
  )
}
