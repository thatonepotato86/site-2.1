export default async (request, context) => {
    return new Response(`<h1>${context.geo.city}, ${context.geo.country.name}</h1>`, {
        headers: {
            "content-type": "text/html"
        }
    })
}