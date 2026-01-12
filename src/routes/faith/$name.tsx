import {createFileRoute} from '@tanstack/react-router'

export const Route = createFileRoute('/faith/$name')({
    component: RouteComponent,
})

function RouteComponent() {
    return <div>Hello "/faith/$name"!</div>
}
