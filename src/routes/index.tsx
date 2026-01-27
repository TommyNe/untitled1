import { createFileRoute } from '@tanstack/react-router'
import { QueryClient, queryOptions, useSuspenseQuery } from '@tanstack/react-query'
import axios from 'axios'

import { Carousel } from '@/sections/Carousel'
import { EventBanner } from '@/sections/EventBanner'
import { ImageGallery } from '@/sections/ImageGallery'
import { MainContent } from '@/sections/MainContent'
import { AggregateResponse } from '@/types/aggregate'

const queryClient = new QueryClient()
const options = () => {
    return queryOptions<AggregateResponse>({
        queryKey: ['indexData'],
        queryFn: async () => {
            const { data } = await axios.get<AggregateResponse>(`/aggregate`, {
                headers: {
                    Accept: 'application/ld+json'
                }
            })
            return data
        }
    })
}

export const Route = createFileRoute('/')({
    component: Index,
    loader: async () => {
        return await queryClient.ensureQueryData(options())
    }
})

function Index() {
    const { data } = useSuspenseQuery(options())
    return (
        <>
            <Carousel images={data.galery} />
            <EventBanner events={data.events} />
            <MainContent data={data} />
            <ImageGallery images={data.galery} />
        </>
    )
}
