import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/communities/altharen/$name')({
    component: RouteComponent
})

function RouteComponent() {
    return <div>Hello &quot;/communities/altharen/$name&quot;! </div>
}
