const URL = "./components/data.json";

export async function fetchProducts() {
  const response = await fetch(URL);
  if (!response.ok) throw new Error("Failed to fetch all products from URL");
  return await response.json();
}

export async function getProductById(id) {
  const products = await fetchProducts();
  return products.find((p) => p.id === id) || null;
}

export async function searchProducts(query) {
  const products = await fetchProducts();
  const q = query.toLowerCase();
  return products.filter(
    (p) => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)
  );
}

export async function filterByRating(minRating) {
  const products = await fetchProducts();
  return products.filter((p) => parseFloat(p.rating) >= minRating);
}

export async function sortByPrice(order = "asc") {
  const products = await fetchProducts();
  return products.sort((a, b) => {
    const pa = parseFloat(a.price);
    const pb = parseFloat(b.price);
    return order === "asc" ? pa - pb : pb - pa;
  });
}

export async function sortByRating(order = "desc") {
  const products = await fetchProducts();
  return products.sort((a, b) => {
    const ra = parseFloat(a.rating);
    const rb = parseFloat(b.rating);
    return order === "asc" ? ra - rb : rb - ra;
  });
}

export async function sortByLatest(order = "latest") {
  const products = await fetchProducts();
  return products.sort((a, b) => {
    const ida = parseInt(a.id.replace("p", ""));
    const idb = parseInt(b.id.replace("p", ""));
    return order === "latest" ? idb - ida : ida - idb;
  });
}

export async function getCartCount() {
  const savedProducts = localStorage.getItem("saved");

  if (savedProducts) {
    const products = JSON.parse(savedProducts);
    const count = products.length;
    console.log("Cart count:", count);
    return count;
  }

  console.log("Cart count: 0");
  return 0;
}
