import { createFileRoute, useRouterState } from '@tanstack/react-router'

export const Route = createFileRoute('/repro/$id')({
  component: Page,
})

function Page() {
  const { state, ...location } = useRouterState({ select: (s) => s.location })
  const params = Route.useParams()
  return (
    <div>
      <pre>location = {JSON.stringify(location, null, 2)}</pre>
      <pre>params = {JSON.stringify(params, null, 2)}</pre>
    </div>
  )
}
