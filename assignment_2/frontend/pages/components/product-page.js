import { getProductById } from "./api.js";

class ProductPage extends HTMLElement {
  async connectedCallback() {
    const productId = this.getAttribute("productId");
    const product = await getProductById(productId);

    if (!product) {
      this.innerHTML = `<p>Product not found.</p>`;
      return;
    }

    const detailRes = await fetch('./components/productDetails.json');
    const detailList = await detailRes.json();
    const detail = detailList.find(item => item.id === product.id);
    const description = detail ? detail.description : "Тайлбар олдсонгүй.";

    this.innerHTML = `
      <layout-wrapper>
        <div class="product-container" id="product-detail">
        <div class="product-image">
          <img src="${product.imgSrc}" alt="${product.name}">
        </div>
        <div class="product-details">
          <h1>${product.name}</h1>
          <p class="price">Үнэ: ${product.price}₮</p>
          <div class="size-quantity">
            <label>Size: </label>
            <select>
              ${product.size.map((size) => `<option>${size}</option>`).join("")}
            </select>
          </div>
          <div class="size-quantity">
            <label>Тоо ширхэг: </label>
            <input type="number" min="1" max="${product.stock}" value="1">
          </div>
          <button class="btn-buy">Хадгалах</button>
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
              <p>${description}</p>
            </div>
      </layout-wrapper>
    `;
  }
}
customElements.define("product-page", ProductPage);
