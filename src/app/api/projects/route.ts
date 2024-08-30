export async function GET() {
  const res = await fetch('http://localhost:5334/projects', {
    cache: 'no-store',
  })
  const projects = await res.json()

  return new Response(JSON.stringify(projects), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
