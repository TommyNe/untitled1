import {createFileRoute} from '@tanstack/react-router'

export const Route = createFileRoute('/communities/tinnen/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <div>Hello "/communities/tinnen/"!</div>
}
