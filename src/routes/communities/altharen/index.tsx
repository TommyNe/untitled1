import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/communities/altharen/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/communities/altharen/"!</div>
}
