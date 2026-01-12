import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/communities/wesuwe/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/communities/wesuwe/"!</div>
}
