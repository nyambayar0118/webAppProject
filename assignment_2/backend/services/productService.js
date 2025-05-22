import sql from "../database/database.js";

export async function getProductsWithId(id) {
    const product = await sql`select * from getProductById(${id})`;
    return product || null;
}

// export async function getProductsWithId(id) {
//   return {
//   id: "p0002",
//   name: "Nike air max 1",
//   price: "379,900 ₮",
//   imgSrc: "../pictures/products/product2.jpg",
//   size: ["48", "50", "52", "54"],
//   stock: 50,
//   desc: "Nike Air Max 1 нь 48-р размертай улаан өнгийн пүүз бөгөөд гүйлт, алхалт болон спортын идэвхтэй хэрэглээнд зориулагдсан. Хөнгөн, агаар нэвтрүүлдэг материалтай."
//   };
// }
