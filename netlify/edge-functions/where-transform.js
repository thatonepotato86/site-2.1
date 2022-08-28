export default async (request, context) => {
    const place = `${context.geo.city}, ${context.geo.country.name}`

    const response = await context.next();
    const page = await response.text();

    const updated = page.replace("$LOCATION_UNKNOWN", place)

    return new Response(updated, {
        headers: {
            "content-type": "text/html"
        }
    })
}