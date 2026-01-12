import {createFileRoute} from '@tanstack/react-router'

export const Route = createFileRoute('/communities/altharen/$name')({
    component: RouteComponent,
})

function RouteComponent() {
    return <div>Hello "/communities/altharen/$name"! </div>
}
