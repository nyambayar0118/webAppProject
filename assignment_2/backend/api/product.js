import { getProductsWithId } from "../services/productService";

export async function handleProduct(req, url) {
    if (req.method !== "GET") {
        return new Response("Method not allowed", { status: 405 });
    }

    const urlParts = url.split("/").filter(Boolean);
    if(urlParts.length === 2 && urlParts[0] === 'api' && urlParts[1] === 'product') {
        return new Response("Product ID is required", { status: 400 });
    }

    if (urlParts.length === 3 && urlParts[0] === 'api' && urlParts[1] === 'product') {
        const id = urlParts[2];
        
        try {
            const product = await getProductsWithId(id);
            if (!product) {
                return new Response("Product not found", { status: 404 });
            }
            return new Response(JSON.stringify(product), {
                status: 200,
                headers: { "Content-Type": "application/json" },
            });
        } catch (error) {
            console.error("Error fetching product:", error);
            return new Response("Internal Server Error", { status: 500 });
        }
    }

    return new Response("Unknown", { status: 404 });
}