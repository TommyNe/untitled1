import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/communities/')({
    component: RouteComponent
})

function RouteComponent() {
    return <div>Hello &quot;/communities/&quot;!</div>
}
