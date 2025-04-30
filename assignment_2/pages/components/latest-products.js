import { sortByLatest } from "./api.js";

class LatestProducts extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    const container = document.createElement("div");
    container.classList.add("product-group-latest");

    try {
      const sortedByLatest = await sortByLatest("latest");
      const latest10 = sortedByLatest.slice(0,12);

      for (const product of latest10) {
        const productBox = document.createElement("product-box");
        productBox.data = product;
        container.appendChild(productBox);
      }

      this.shadowRoot.innerHTML = `
        <style>
          .product-group-latest {
            display: grid;
            place-items: center;
            grid-template-columns: repeat(6, minmax(200px, 1fr));
            gap: 3rem;
            max-width: 90%;
            margin: 0 auto;
          }
        </style>
      `;
      this.shadowRoot.appendChild(container);

    } catch (err) {
      this.shadowRoot.innerHTML = `<p>Error loading products.</p>`;
      console.error(err);
    }
  }
}

customElements.define("latest-products", LatestProducts);
