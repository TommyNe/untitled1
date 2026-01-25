import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/faith/projekt/$name')({
    component: RouteComponent
})

function RouteComponent() {
    return <div>Hello &quot;/faith/projekt/$name&quot;!</div>
}
