import {createFileRoute} from '@tanstack/react-router'

export const Route = createFileRoute('/about/koop')({
    component: RouteComponent,
})

function RouteComponent() {
    return <div>Hello "/about/koop"!</div>
}
