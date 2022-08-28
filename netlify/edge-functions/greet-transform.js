export default async (request, context) => {
    const url = new URL(request.url)

    const response = await context.next();
    const page = await response.text();

    const updated = page.replace("NAME_UNKNOWN", url.searchParams.get("name"))

    return new Response(updated, {
        headers: {
            "content-type": "text/html"
        }
    })
}