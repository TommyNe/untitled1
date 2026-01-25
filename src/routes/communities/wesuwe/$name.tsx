import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/communities/wesuwe/$name')({
    component: RouteComponent
})

function RouteComponent() {
    return <div>Hello &quot;/communities/wesuwe/$name&quot;!</div>
}
