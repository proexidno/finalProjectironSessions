export async function GET(request) {
  return new Response(process.env.NODE_ENV)
}
