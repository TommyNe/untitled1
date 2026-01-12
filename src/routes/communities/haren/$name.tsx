import {createFileRoute} from '@tanstack/react-router'

export const Route = createFileRoute('/communities/haren/$name')({
    component: RouteComponent,
})

function RouteComponent() {
    return <div>Hello "/communities/haren/$name"!</div>
}
