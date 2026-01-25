import { createFileRoute } from '@tanstack/react-router'

import EventDetailPage from '@/sections/EventComponents/EventDetailsPage.tsx'

export const Route = createFileRoute('/events/details')({
    component: RouteComponent
})

function RouteComponent() {
    return <EventDetailPage />
}
