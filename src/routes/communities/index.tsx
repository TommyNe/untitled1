import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/communities/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/communities/"!</div>
}
