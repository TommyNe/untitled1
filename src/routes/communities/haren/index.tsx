import {createFileRoute} from '@tanstack/react-router'

export const Route = createFileRoute('/communities/haren/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <div>Hello "/communities/haren/"!</div>
}
