fetch('./components/product.json')
  .then(response => response.json())
  .then(product => {
    fetch('./components/productDetails.json')
      .then(response => response.json())
      .then(detailsList => {
        const container = document.getElementById('product-detail');

        const detail = detailsList.find(item => item.id === product.id);
        const description = detail ? detail.description : "Тайлбар олдсонгүй.";

        container.innerHTML = `
          <div class="product-image">
            <img src="${product.imageSrc}" alt="${product.name}">
          </div>
          <div class="product-details">
            <h1>${product.name}</h1>
            <p class="price">Үнэ: ${product.price}</p>

            <div class="size-quantity">
              <label>Size: </label>
              <select>
                ${product.size.map(size => `<option>${size}</option>`).join('')}
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

            <div class="store-info" style="margin-top: 40px; padding: 20px; background-color: #f9f5f0; border-radius: 8px;">
              <h3>Барааны дэлгэрэнгүй мэдээлэл</h3>
              <p>${description}</p>
            </div>
          </div>
        `;
      });
  });
