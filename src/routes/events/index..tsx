import { createFileRoute } from '@tanstack/react-router'

import EventComponents from '@/sections/EventComponents'

export const Route = createFileRoute('/events/index/')({
    component: RouteComponent
})

function RouteComponent() {
    return (
        <>
            <EventComponents />
        </>
    )
}
