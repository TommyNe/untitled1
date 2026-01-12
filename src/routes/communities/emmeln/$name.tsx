import {createFileRoute} from '@tanstack/react-router'

export const Route = createFileRoute('/communities/emmeln/$name')({
    component: RouteComponent,
})

function RouteComponent() {
    return <div>Hello "/communities/emmeln/$name"!</div>
}
