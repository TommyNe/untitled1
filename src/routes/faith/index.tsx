import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/faith/')({
    component: RouteComponent
})

function RouteComponent() {
    return <div>Hello &quot;/faith/&quot;!</div>
}
