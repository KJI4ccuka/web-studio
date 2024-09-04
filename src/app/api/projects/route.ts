export async function GET() {
  const res = await fetch(
    'https://mighty-thicket-66417-b0c7371ebf05.herokuapp.com/projects',
    {
      cache: 'no-store',
    },
  )
  const projects = await res.json()

  return new Response(JSON.stringify(projects), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
