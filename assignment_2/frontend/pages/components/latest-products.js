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
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 1.5rem 2rem;
      box-sizing: border-box;
    }
    @media (max-width: 1200px) {
      .product-group-latest {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    @media (max-width: 900px) {
      .product-group-latest {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (max-width: 600px) {
      .product-group-latest {
        grid-template-columns: 1fr;
        gap: 1rem;
        padding: 0.7rem 0.5rem;
      }
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
