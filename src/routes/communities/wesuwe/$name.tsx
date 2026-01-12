import {createFileRoute} from '@tanstack/react-router'

export const Route = createFileRoute('/communities/wesuwe/$name')({
    component: RouteComponent,
})

function RouteComponent() {
    return <div>Hello "/communities/wesuwe/$name"!</div>
}
