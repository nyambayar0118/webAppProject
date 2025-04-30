import { sortByRating } from "./api.js";

class TopRatedProducts extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    const container = document.createElement("div");
    container.classList.add("product-group-top-rated");

    try {
      const sortedByRating = await sortByRating("desc");
      const top4 = sortedByRating.slice(0, 4);

      for (const product of top4) {
        const productBox = document.createElement("product-box");
        productBox.data = product;
        container.appendChild(productBox);
      }

      this.shadowRoot.innerHTML = `
        <style>
          .product-group-top-rated {
            display: grid;
            place-items: center;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 2rem;
            max-width: 80%;
            margin: 0 auto;
          }
        </style>
      `;
      this.shadowRoot.appendChild(container);

    } catch (err) {
      this.shadowRoot.innerHTML = `<p>Error loading top rated products.</p>`;
      console.error(err);
    }
  }
}

customElements.define("top-rated-products", TopRatedProducts);
