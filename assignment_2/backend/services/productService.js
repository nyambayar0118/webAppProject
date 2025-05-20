import sql from "../database/database";

export async function getProductsWithId(id) {
    const product = await sql`select * from getProductById(${id})`;
    return product || null;
}