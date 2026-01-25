import { createFileRoute } from '@tanstack/react-router'

import { Carousel } from '@/sections/Carousel'
import { EventBanner } from '@/sections/EventBanner'
import { ImageGallery } from '@/sections/ImageGallery'
import { MainContent } from '@/sections/MainContent'
import {QueryClient, queryOptions, useSuspenseQuery} from "@tanstack/react-query";
import axios from "axios";

const queryClient = new QueryClient()
const options = () => {
    return queryOptions({
        queryKey: ['indexData'],
        queryFn: async () => {
            const { data } = await axios.get(`/index-data`)
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
    const data = useSuspenseQuery(options())
    return (
        <>
            <Carousel />
            <EventBanner />
            <MainContent />
            <ImageGallery />
        </>
    )
}
