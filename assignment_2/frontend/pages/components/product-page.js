class ProductPage extends HTMLElement {
  async connectedCallback() {
    const productId = this.getAttribute("productId");
    if (!productId) {
      this.innerHTML = `<p>Product ID not specified.</p>`;
      return;
    }

    // Remove leading 'p' or 'P' if present
    const numericId = productId.replace(/^p/i, "");

    let product;
    try {
      const res = await fetch(`http://localhost:3000/api/products/${numericId}`);
      if (!res.ok) {
        this.innerHTML = `<p>Product not found.</p>`;
        return;
      }
      let products = await res.json();
      product = products[0];
    } catch (err) {
      this.innerHTML = `<p>Error loading product.</p>`;
      return;
    }

    if (!product) {
      this.innerHTML = `<p>Product not found.</p>`;
      return;
    }

    // Pass shopid to shop-page component
    const shopId = product.shop_id || product.shop_Id || "";

    this.innerHTML = `
      <layout-wrapper>
        <div class="product-container" id="product-detail">
          <div class="product-image">
            <img src="${product.imgsrc}" alt="${product.imgalt}">
          </div>
          <div class="product-details">
            <h1>${product.name}</h1>
            <p class="price">Үнэ: ${product.price}₮</p>
            <div class="size-quantity">
              <label>Size: </label>
              <select>
                ${(product.size || []).map((size) => `<option>${size}</option>`).join("")}
              </select>
            </div>
            <div class="size-quantity">
              <label>Тоо ширхэг: </label>
              <input type="number" min="1" max="${product.stock || 1}" value="1">
            </div>
            <button style="background-color: var(--main-color-4);" class="btn-buy">Хадгалах</button>
            <div class="payment-options">
              <h3>Ваучер/Лизингийн сонголтууд:</h3>
              <ul>
                <li>✔️ Одоо аваад дараа төл - simple buy</li>
                <li>✔️ Хэрэглээний лизинг - 10-30 сарын сонголттой</li>
                <li>✔️ StorePay - Урьдчилгаагүй, хувааж төлөх</li>
              </ul>
            </div>
            <div class="store-info" style="margin-top: 40px; padding: 20px; background-color: rgb(216, 195, 168); border-radius: 8px;">
                <h3>Барааны дэлгэрэнгүй мэдээлэл</h3>
                <p>${product.description}</p>
            </div>
          </div>
        </div>
        <shop-component shopid="${shopId}"></shop-component>
      </layout-wrapper>
    `;
  }
}
customElements.define("product-page", ProductPage);
