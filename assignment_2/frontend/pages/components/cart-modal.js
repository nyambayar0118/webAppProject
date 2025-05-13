import { getProductById } from "./api.js";

export class CartModal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.handleProductSaveToggled = this.handleProductSaveToggled.bind(this);
  }

  connectedCallback() {
    this.render();
    this.addEventListeners();
    window.addEventListener(
      "product-save-toggled",
      this.handleProductSaveToggled
    );
  }

  disconnectedCallback() {
    window.removeEventListener(
      "product-save-toggled",
      this.handleProductSaveToggled
    );
  }

  handleProductSaveToggled() {
    this.updateCartItems();
  }

  async updateCartItems() {
    const savedItemIds = JSON.parse(localStorage.getItem("saved")) || [];
    
    const savedItems = await Promise.all(
      savedItemIds.map(async (id) => await getProductById(id))
    );

    const itemList = savedItems
      .map(
        (item) => `
          <li>${item.name} - ${item.price}₮</li>
        `
      )
      .join("");

    const productList = this.shadowRoot.querySelector(".product-list");
    if (productList) {
      productList.innerHTML = itemList || "<li>No products in the cart.</li>";
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal {
          background: white;
          padding: 1.5rem;
          border-radius: 8px;
          width: 90%;
          max-width: 500px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          position: relative;
          background-color: var(--main-background-color);
        }

        .modal h2 {
          margin-top: 0;
        }

        .close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
        }

        .product-list {
          list-style: none;
          padding: 0;
          margin: 1rem 0;
        }

        .product-list li {
          padding: 0.5rem 0;
          color: var(--main-text-color);
          border-bottom: 1px solid #ddd;
        }
      </style>

      <div class="overlay">
        <div class="modal">
          <button class="close-btn">&times;</button>
          <h2>Your Cart</h2>
          <ul class="product-list">
            "<li>Loading...</li>"}
          </ul>
        </div>
      </div>
    `;
    this.updateCartItems();
  }

  addEventListeners() {
    const closeButton = this.shadowRoot.querySelector(".close-btn");
    closeButton.addEventListener("click", () => {
      this.style.display = "none";
    });

    const overlay = this.shadowRoot.querySelector(".overlay");
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        this.style.display = "none";
      }
    });
  }
}

customElements.define("cart-modal", CartModal);
