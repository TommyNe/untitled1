import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/communities/tinnen/')({
    component: RouteComponent
})

function RouteComponent() {
    return <div>Hello &quot;/communities/tinnen/&quot;!</div>
}
