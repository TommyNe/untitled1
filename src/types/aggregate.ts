export interface AggregateResponse {
    posts: ContentItem[]
    events: EventItem[]
    wtw: ContentItem[]
    galery: GalleryItem[]
    jobs: ContentItem[]
    ads: AdItem[]
}

export interface ContentItem {
    id: number
    title?: string
    content?: string
    file?: string
    date?: string
    place?: string
    [key: string]: unknown
}

export interface EventItem extends ContentItem {
    startDate?: string
    endDate?: string
}

export interface GalleryItem {
    id: number
    image: string
    date: string
    name?: string
    description?: string
    [key: string]: unknown
}

export interface AdItem {
    id: number
    title: string
    content: string
    file: string
    [key: string]: unknown
}
