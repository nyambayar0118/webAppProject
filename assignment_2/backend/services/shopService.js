// Dummy data for demonstration. Replace with DB/service logic as needed.
// const shops = [
//   {
//     id: 0,
//     name: "Felisia Online Shop",
//     imgsrc: "../pictures/site elements/store-profile.jpg",
//     rating: 4.9,
//     description: "Бид цахилгаан бараа, загварлаг хувцас, гоо сайхан, чимэглэл зэрэг бүтээгдэхүүнийг Монголдоо шуурхай хүргэнэ.",
//     phone: "+976 99112233",
//     address: "УБ, СБД, 1-р хороо",
//     map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d265.2808683695647!2d106.92847771537578!3d47.91967945398042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9693143a161c81%3A0xf1074a216491906d!2sNational%20University%20of%20Mongolia!5e0!3m2!1sen!2smn!4v1742997311296!5m2!1sen!2smn"
//   }
// ];

// const products = [
//   { shopid: 0, name: "Bose Чихэвч", price: 15000, imgsrc: "../pictures/products/product1.jpg" },
//   { shopid: 0, name: "Улаан кет", price: 45000, imgsrc: "../pictures/products/product2.jpg" },
//   { shopid: 0, name: "Нарны шил", price: 15000, imgsrc: "../pictures/products/product3.jpg" }
// ];

// const reviews = [
//   { shopid: 0, name: "Болормаа", text: "Барааны чанар сайхан, хүргэлт маш хурдан ирсэн. Баярлалаа! 🌟" },
//   { shopid: 0, name: "Энхтүвшин", text: "Утасны хариулт, үйлчилгээний соёл маш сайн. 👍" },
//   { shopid: 0, name: "Саруул", text: "Гоёл чимэглэлийн бараанууд нь үнэхээр чанартай байна лээ." }
// ];

// export function getShopById(shopId) {
//   const shop = shops.find(s => s.id === shopId);
//   if (!shop) return null;
//   const shopProducts = products.filter(p => p.shopid === shopId);
//   const shopReviews = reviews.filter(r => r.shopid === shopId);
//   return { shop, products: shopProducts, reviews: shopReviews };
// }

// export function getDefaultShop() {
//   const shop = shops[0];
//   if (!shop) return null;
//   const shopProducts = products.filter(p => p.shopid === shop.id);
//   const shopReviews = reviews.filter(r => r.shopid === shop.id);
//   return { shop, products: shopProducts, reviews: shopReviews };
// }

import sql from "../database/database.js";

export async function getShopById(shopId) {
    const shop = await sql`select * from getshopbyid(${shopId})`;
    const result = JSON.stringify(shop);
    console.log(result);
    return result || null;
}