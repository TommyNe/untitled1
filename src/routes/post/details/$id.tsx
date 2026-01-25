import { createFileRoute } from '@tanstack/react-router'

import { NewsDetailPage } from '@/sections/NewsDetailPage'

export const Route = createFileRoute('/post/details/$id')({
    component: RouteComponent
})

function RouteComponent() {
    const { id } = Route.useParams()
    return <NewsDetailPage id={id} />
}
