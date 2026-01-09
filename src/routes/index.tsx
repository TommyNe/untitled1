import { createFileRoute } from '@tanstack/react-router'
import {Carousel} from "@/sections/Carousel";
import {EventBanner} from "@/sections/EventBanner";
import {MainContent} from "@/sections/MainContent";
import {ImageGallery} from "@/sections/ImageGallery";

export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <>
            <Carousel />
            <EventBanner />
            <MainContent />
            <ImageGallery />
        </>
    )
}