import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/faith/projekt/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/faith/projekt/"!</div>
}
