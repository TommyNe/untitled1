import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/communities/emmeln/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/communities/emmeln/"!</div>
}
