class ShopComponent extends HTMLElement {
  async connectedCallback() {
    const shopId = this.getAttribute("shopid") || "";
    let shop = {};
    let products = [];
    let reviews = [];
    try {
      const apiUrl = shopId ? `http://localhost:3000/api/shop/${shopId}` : `/api/shop`;
      const res = await fetch(apiUrl);
      if (!res.ok) {
        this.innerHTML = `<p>Shop not found.</p>`;
        return;
      }
      const data = await res.json();
      // console.log("Shop data received:", data); // Debug log
      shop = data || {};
      products = data.products || [];
      reviews = data.reviews || [];
    } catch (err) {
      this.innerHTML = `<p>Error loading shop data.</p>`;
      return;
    }

    this.innerHTML = `
      <style>
        .profile {
          display: flex;
          align-items: center;
          gap: 2rem;
          background: var(--secondary-background-color);
          padding: 2rem;
          border-radius: 12px;
          margin-bottom: 2rem;
        }
        .profile img {
          width: 150px;
          height: 150px;
          object-fit: cover;
          border-radius: 50%;
          border: 4px solid var(--secondary-background-color);
        }
        .profile-info h1 {
          margin: 0;
          font-size: 2rem;
        }
        .profile-info p {
          margin: 0.5rem 0;
        }
        .products {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }
        article.product {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.3s;
        }
        article.product:hover {
          transform: translateY(-5px);
        }
        article.product img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        .product-info {
          padding: 1rem;
          text-align: center;
        }
        .product-info .price {
          color: var(--main-text-color);
          font-weight: bold;
          margin: 0.5rem 0;
        }
        .product-info button {
          width: 100%;
          padding: 0.5rem;
          background: var(--secondary-background-color);
          color: #fff;
          border: none;
          cursor: pointer;
          border-radius: 0 0 12px 12px;
        }
        .reviews {
          margin-top: 3rem;
          background: var(--secondary-background-color);
          padding: 2rem;
          border-radius: 12px;
        }
                h2 {
          margin-top: 0;
          align-self: center;
          justify-self: center;
          text-align: center;
          width: 100%;
          display: block;
          font-size: 2rem;
        }
        @media (max-width: 600px) {
          h2 {
            font-size: 1.3rem;
          }
        }
        .review-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .review-form textarea {
          width: 100%;
          min-height: 100px;
          border: 2px solid var(--main-color-4);
          border-radius: 8px;
          padding: 0.75rem;
          font-size: 1rem;
          resize: vertical;
        }
        .review-form button {
          align-self: flex-end;
          padding: 0.5rem 1.5rem;
          background: var(--main-color-4);
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }
        .review-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .review-list li {
          background: white;
          border-radius: 8px;
          color: black;
          padding: 1rem;
          margin-bottom: 1rem;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        }
        aside.map {
          margin-top: 3rem;
        }
        aside.map iframe {
          width: 100%;
          height: 400px;
          border: none;
          border-radius: 12px;
        }
      </style>
      <main style="padding: 2rem;">
        <section class="profile">
          <img src="${shop.imgsrc || '../pictures/site elements/store-profile.jpg'}" alt="Store Profile">
          <div class="profile-info">
            <h1>${shop.name || 'Felisia Online Shop'}</h1>
            <p>🌟 ${shop.rating || '4.9'} / 5 үнэлгээтэй дэлгүүр</p>
            <p>${shop.description || 'Бид цахилгаан бараа, загварлаг хувцас, гоо сайхан, чимэглэл зэрэг бүтээгдэхүүнийг Монголдоо шуурхай хүргэнэ.'}</p>
            <p>📞 ${shop.phone || '+976 99112233'} | 📍 ${shop.address || 'УБ, СБД, 1-р хороо'}</p>
          </div>
        </section>
        <section class="products" aria-label="Онцлох бүтээгдэхүүнүүд">
          ${
            products.length
              ? products.map(product => `
                <article class="product">
                  <img src="${product.imgsrc}" alt="${product.name}">
                  <div class="product-info">
                    <h2>${product.name}</h2>
                    <p class="price">₮${product.price}</p>
                    <button>Хадгалах</button>
                  </div>
                </article>
              `).join('')
              : '<p>Бүтээгдэхүүн алга байна.</p>'
          }
        </section>
        <section class="reviews">
          <h2>💬 Үйлчлүүлэгчдийн сэтгэгдэл</h2>
          <form class="review-form" aria-label="Шинэ сэтгэгдэл илгээх">
            <textarea placeholder="Сэтгэгдлээ бичнэ үү..." required></textarea>
            <button type="submit">Илгээх</button>
          </form>
          <ul class="review-list" aria-label="Хэрэглэгчдийн сэтгэгдлүүд">
            ${
              reviews.length
                ? reviews.map(r => `
                    <li>
                      <p><strong>${r.name}:</strong> ${r.text}</p>
                    </li>
                  `).join('')
                : `<li>Одоогоор сэтгэгдэл алга байна.</li>`
            }
          </ul>
        </section>
        <aside class="map" aria-label="Байршил">
          <h2>📍 Манай байршлууд</h2>
          <iframe src="${shop.map || 'https://www.google.com/maps/embed?...'}" allowfullscreen loading="lazy"></iframe>
        </aside>
      </main>
    `;
  }
}

customElements.define("shop-component", ShopComponent);
