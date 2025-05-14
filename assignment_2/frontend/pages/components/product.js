fetch('./components/product.json')
  .then(response => response.json())
  .then(product => {
    const container = document.getElementById('product-detail');
    container.innerHTML = `
      <div class="product-image">
        <img src="${product.imageSrc}" alt="${product.name}">
      </div>
      <div class="product-details">
        <h1>${product.name}</h1>
        <p class="price">Үнэ: ${product.price}</p>

        <div class="size-quantity">
          <label>Размер: </label>
          <select>
            ${product.size.map(size => `<option>${size}</option>`).join('')}
          </select>
        </div>

        <div class="size-quantity">
          <label>Тоо ширхэг: </label>
          <input type="number" min="1" max="${product.stock}" value="1">
        </div>

        <button class="btn-buy">Худалдаж авах</button>

        <div class="payment-options">
          <h3>Ваучер/Лизингийн сонголтууд:</h3>
          <ul>
            <li>✔️ Одоо аваад дараа төл - simple buy</li>
            <li>✔️ Хэрэглээний лизинг - 10-30 сарын сонголттой</li>
            <li>✔️ StorePay - Урьдчилгаагүй, хувааж төлөх</li>
          </ul>
        </div>
      </div>
    `;
  })

