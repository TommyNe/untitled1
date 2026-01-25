import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/communities/emmeln/$name')({
    component: RouteComponent
})

function RouteComponent() {
    return <div>Hello &quot;/communities/emmeln/$name&quot;!</div>
}
