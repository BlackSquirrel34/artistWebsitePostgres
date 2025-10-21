// Define the type for each news item
export interface NewsItem {
  id: string
  date: string
  titel: string
  involved: string | null
  location: string
}

// Define the props for the News component
export interface NewsProps {
  news: NewsItem[]
}

export default function News({ news }: NewsProps) {
  return (
    <div className="pt-20">
      {news.map((item) => (
        <div key={item.id} className="mb-6 pt-4">
          {/* Date */}
          <p className="mb-2 text-gray-600">{item.date}</p>

          {/* Title in bold */}
          <h3 className="font-bold mb-2">{item.titel}</h3>

          {/* Involved, if exists and not empty */}
          {item.involved && item.involved.trim() !== '' && <p className="mb-2">{item.involved}</p>}

          {/* Location */}
          <p className="mb-2">{item.location}</p>
        </div>
      ))}
    </div>
  )
}
