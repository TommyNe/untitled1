import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/communities/tinnen/$name')({
    component: RouteComponent
})

function RouteComponent() {
    return <div>Hello &quot;/communities/tinnen/$name&quot;!</div>
}
