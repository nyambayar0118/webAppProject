export class Product extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    if (this._data) {
      this.render(this._data);
    }

    window.addEventListener("product-save-toggled", this.handleToggle);
  }

  disconnectedCallback() {
    window.removeEventListener("product-save-toggled", this.handleToggle);
  }

  handleToggle = (e) => {
    if (!this._data || this._data.id !== e.detail.id) return;

    const heartImg = this.shadowRoot.getElementById("heart-img");
    if (heartImg) {
      heartImg.src = e.detail.shouldSave
        ? "../pictures/site elements/button_heart_filled.webp"
        : "../pictures/site elements/button_heart_empty.webp";
    }
  };

  set data(pdata) {
    this._data = pdata;
    this.render(pdata);
  }

  render(pdata) {
    const isSaved = Product.isSaved(pdata.id);
    const heartIcon = isSaved
      ? "../pictures/site elements/button_heart_filled.webp"
      : "../pictures/site elements/button_heart_empty.webp";

    this.shadowRoot.innerHTML = `
    <style>
      .no-underline {
        text-decoration: none;
      }

      .product-box {
        display: grid;
        grid-template-columns: 80% 20%;
        grid-template-rows: 6fr 1.2fr auto 1fr;
        grid-template-areas:
        "img img"
        "title rating"
        "desc desc"
        "price save";
        height: 350px;
        aspect-ratio: 5/7;
        border-radius: 12px;
        overflow: hidden;
        background-color: var(--secondary-background-color);
      }

      .product-box > img {
        grid-area: img;
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        max-height: 250px;
        border-radius: 12px;
      }

      .product-box > .product-name {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        grid-area: title;
        margin: 0 0.5rem;
        align-self: center;
        color: var(--main-text-color);
        font-weight: 600;
      }

      .product-box > .product-rating {
        grid-area: rating;
        text-align: center;
        margin: 0 0.2rem 0 0;
        align-self: center;
        justify-self: center;
        color: var(--main-text-color);
      }

      .product-box > .product-desc {
        grid-area: desc;
        overflow: hidden;
        margin: 0 0.5rem;
        color: var(--main-text-color);
        font-size: 0.8rem;
      }

      .product-box > .product-price {
        grid-area: price;
        margin: 0.3rem 0 0.3rem 0.5rem;
        font-size: 1.5rem;
        color: var(--main-text-color);
        font-weight: 600;
        letter-spacing: 0.05rem;
      }

      .product-box > button {
    padding: 0;
    align-self: center;
    justify-self: center;
    height: 100%;
    aspect-ratio: 1;
    grid-area: save;
    background-color: var(--secondary-background-color);
    border-radius: 50%;
    overflow: hidden;
    border: none;
  }

  .product-box > button > img {
    height: 80%;
    aspect-ratio: 1;
  }

  .float-on-hover {
    transition: box-shadow 0.3s, transform 0.3s;
  }

  .float-on-hover:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
    .hover-darken {
    transition: background-color 0.3s;
}
    .hover-darken:hover {
        background-color: var(--main-color-1-darken);
    }
        .size-limit {
        height: 350px;
    aspect-ratio: 5/7;
    display: inline-block;
    width: auto;
        }
</style>
      <div class="no-underline size-limit" role="link" tabindex="0">
                    <article class="product-box float-on-hover">
                        <img alt="${pdata.imgAlt}" src="${pdata.imgSrc}">
                        <p class="product-name">${pdata.name}</p>
                        <p class="product-rating">${pdata.rating}⭐</p>
                        <p class="product-desc">${pdata.desc}</p>
                        <p class="product-price">${pdata.price}₮</p>
                        <button class="hover-darken" id="heart-btn">
                            <img id="heart-img" src="${heartIcon}" alt="heart icon">
                        </button>
                    </article>
                </div>
      `;

    const heartBtn = this.shadowRoot.getElementById("heart-btn");
    const heartImg = this.shadowRoot.getElementById("heart-img");

    heartBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const currentlySaved = Product.isSaved(pdata.id);
      const newSaved = !currentlySaved;

      Product.setSaved(pdata.id, newSaved);
      heartImg.src = newSaved
        ? "../pictures/site elements/button_heart_filled.webp"
        : "../pictures/site elements/button_heart_empty.webp";
    });
    const linkWrapper = this.shadowRoot.querySelector(".no-underline");
    linkWrapper.addEventListener("click", () => {
      const router = document.querySelector("shop-router");
      if (router) {
        router.navigate(`/${pdata.id}`);
      } else {
        window.location.href = `/${pdata.id}`;
      }
    });
  }

  static isSaved(id) {
    const savedItems = JSON.parse(localStorage.getItem("saved") || "[]");
    return savedItems.includes(id);
  }

  static setSaved(id, shouldSave) {
    let savedItems = JSON.parse(localStorage.getItem("saved") || "[]");
    if (shouldSave && !savedItems.includes(id)) {
      savedItems.push(id);
    } else if (!shouldSave && savedItems.includes(id)) {
      savedItems = savedItems.filter((item) => item !== id);
    }
    localStorage.setItem("saved", JSON.stringify(savedItems));

    window.dispatchEvent(
      new CustomEvent("product-save-toggled", {
        detail: { id, shouldSave },
      })
    );
  }
}

customElements.define("product-box", Product);
