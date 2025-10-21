import { NewsItem } from '@/components/Homepage/News'
import { Homepage, Page } from '@/payload-types'

export function extractNews(homepage_api_data: Homepage): NewsItem[] {
  if (!homepage_api_data.news) {
    return []
  }
  return homepage_api_data.news.map((item) => ({
    id: item.id ?? '', // fallback to empty string if null or undefined
    date: item.date ?? '',
    titel: item.titel ?? '',
    involved: item.involved ?? '',
    location: item.location ?? '',
  }))
}
