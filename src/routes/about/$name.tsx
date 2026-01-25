import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about/$name')({
    component: RouteComponent
})

function RouteComponent() {
    return <div>Hello &quot;/about/$name&quot;!</div>
}
